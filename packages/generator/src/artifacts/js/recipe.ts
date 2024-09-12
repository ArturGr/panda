import type { Context } from '@pandacss/core'
import { Recipes } from '@pandacss/core'
import { isBoolean, unionType } from '@pandacss/shared'
import type { ArtifactFilters } from '@pandacss/types'
import { outdent } from 'outdent'
import { match } from 'ts-pattern'

const stringify = (value: any) => JSON.stringify(value, null, 2)
const isBooleanValue = (value: string) => value === 'true' || value === 'false'
const hasOwn = (obj: any | undefined, key: string): obj is Record<string, any> => {
  if (!obj) return false
  return Object.prototype.hasOwnProperty.call(obj, key)
}

export function generateCreateRecipe(ctx: Context) {
  const { conditions, recipes, prefix, hash, utility } = ctx

  if (recipes.isEmpty()) return

  return {
    name: 'create-recipe',
    dts: '',
    js: outdent`
   ${ctx.file.import('finalizeConditions, sortConditions', '../css/conditions')}
   ${ctx.file.import('css', '../css/css')}
   ${ctx.file.import('assertCompoundVariant, getCompoundVariantCss', '../css/cva')}
   ${ctx.file.import('cx', '../css/cx')}
   ${ctx.file.import('compact, createCss, splitProps, uniq, withoutSpace', '../helpers')}

   export const createRecipe = (name, defaultVariants, compoundVariants) => {
    const getVariantProps = (variants) => {
      return {
        [name]: '__ignore__',
        ...defaultVariants,
        ...compact(variants),
      };
    };

     const recipeFn = (variants, withCompoundVariants = true) => {
      const transform = (prop, value) => {
        assertCompoundVariant(name, compoundVariants, variants, prop)

         if (value === '__ignore__') {
           return { className: name }
         }

         value = withoutSpace(value)
         return { className: \`\${name}--\${prop}${utility.separator}\${value}\` }
      }

      const recipeCss = createCss({
        ${hash.className ? 'hash: true,' : ''}
        conditions: {
          shift: sortConditions,
          finalize: finalizeConditions,
          breakpoints: { keys: ${JSON.stringify(conditions.breakpoints.keys)} }
        },
        utility: {
          ${prefix.className ? 'prefix: ' + JSON.stringify(prefix.className) + ',' : ''}
          toHash: ${utility.toHash},
          transform,
        }
      })

      const recipeStyles = getVariantProps(variants)

      if (withCompoundVariants) {
        const compoundVariantStyles = getCompoundVariantCss(compoundVariants, recipeStyles)
        return cx(recipeCss(recipeStyles), css(compoundVariantStyles))
      }

      return recipeCss(recipeStyles)
     }

      return {
        recipeFn,
        getVariantProps,
        __getCompoundVariantCss__: (variants) => {
          return getCompoundVariantCss(compoundVariants, getVariantProps(variants));
        },
      }
   }

   export const mergeRecipes = (recipeA, recipeB) => {
    if (recipeA && !recipeB) return recipeA
    if (!recipeA && recipeB) return recipeB

    const recipeFn = (...args) => cx(recipeA(...args), recipeB(...args))
    const variantKeys = uniq(recipeA.variantKeys, recipeB.variantKeys)
    const variantMap = variantKeys.reduce((acc, key) => {
      acc[key] = uniq(recipeA.variantMap[key], recipeB.variantMap[key])
      return acc
    }, {})

    return Object.assign(recipeFn, {
      __recipe__: true,
      __name__: \`$\{recipeA.__name__} \${recipeB.__name__}\`,
      raw: (props) => props,
      variantKeys,
      variantMap,
      splitVariantProps(props) {
        return splitProps(props, variantKeys)
      },
    })
    }
  }
  `,
  }
}

export function generateRecipes(ctx: Context, filters?: ArtifactFilters) {
  const { recipes } = ctx

  if (recipes.isEmpty()) return

  const details = ctx.recipes.filterDetails(filters)

  return details.map((recipe) => {
    const { baseName, config, upperName, variantKeyMap, dashName } = recipe
    const { description, base, variants, defaultVariants, compoundVariants, deprecated } = config

    const getDefaultValueJsDoc = (key: string) => {
      if (!hasOwn(defaultVariants, key)) return
      let defaultValue = defaultVariants[key]

      if (isBoolean(defaultValue)) {
        defaultValue = defaultValue ? `true` : `false`
      } else {
        defaultValue = JSON.stringify(defaultValue)
      }

      return ctx.file.jsDocComment('', { default: defaultValue })
    }

    const isReactNative = ctx.config.jsxFramework === 'react-native'

    const jsCode = match(config)
      .when(
        Recipes.isSlotRecipeConfig,
        (config) => outdent`
        ${ctx.file.import('compact, getSlotCompoundVariant, memo, splitProps', '../helpers')}
        ${ctx.file.import('createRecipe', './create-recipe')}
${
  isReactNative
    ? `
const ${baseName}Base = ${stringify(base ?? {})}}
const ${baseName}Variants = ${stringify(variants ?? {})}`
    : ''
}
        const ${baseName}DefaultVariants = ${stringify(defaultVariants ?? {})}
        const ${baseName}CompoundVariants = ${stringify(compoundVariants ?? [])}
${
  isReactNative
    ? `
const ${baseName}Slots = ${stringify(config.slots ?? [])}`
    : ''
}
        const ${baseName}SlotNames = ${stringify(config.slots.map((slot) => [slot, `${config.className}__${slot}`]))}
        const ${baseName}SlotFns = /* @__PURE__ */ ${baseName}SlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, ${baseName}DefaultVariants, getSlotCompoundVariant(${baseName}CompoundVariants, slotName))])

        const ${baseName}Fn = memo((props = {}) => {
          return Object.fromEntries(${baseName}SlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
        })

        const ${baseName}VariantKeys = ${stringify(Object.keys(variantKeyMap))}
        const getVariantProps = (variants) => ({ ...${baseName}DefaultVariants, ...compact(variants) })

        export const ${baseName} = /* @__PURE__ */ Object.assign(${baseName}Fn, {
          __recipe__: false,
          __name__: '${baseName}',
          raw: (props) => props,
          variantKeys: ${baseName}VariantKeys,
          variantMap: ${stringify(variantKeyMap)},
          splitVariantProps(props) {
            return splitProps(props, ${baseName}VariantKeys)
          },
          getVariantProps${
            isReactNative
              ? `,
          base: ${baseName}Base,
          variants: ${baseName}Variants,
          defaultVariants: ${baseName}DefaultVariants,
          compoundVariants: ${baseName}CompoundVariants,
          slots: ${baseName}Slots,`
              : ''
          }
        })
        `,
      )
      .otherwise(
        (config) => outdent`
        ${ctx.file.import('memo, splitProps', '../helpers')}
        ${ctx.file.import('createRecipe, mergeRecipes', './create-recipe')}

        const ${baseName}Fn = /* @__PURE__ */ createRecipe('${config.className}', ${stringify(
          defaultVariants ?? {},
        )}, ${stringify(compoundVariants ?? [])})

        const ${baseName}VariantMap = ${stringify(variantKeyMap)}

        const ${baseName}VariantKeys = Object.keys(${baseName}VariantMap)
        ${
          isReactNative
            ? `const ${baseName}Base = ${stringify(base ?? {})}
const ${baseName}Variants = ${stringify(variants ?? {})}
const ${baseName}DefaultVariants = ${stringify(defaultVariants ?? {})}
const ${baseName}CompoundVariants = ${stringify(compoundVariants ?? [])}`
            : ''
        }
        export const ${baseName} = /* @__PURE__ */ Object.assign(memo(${baseName}Fn.recipeFn), {
          __recipe__: true,
          __name__: '${baseName}',
          __getCompoundVariantCss__: ${baseName}Fn.__getCompoundVariantCss__,
          raw: (props) => props,
          variantKeys: ${baseName}VariantKeys,
          variantMap: ${baseName}VariantMap,
          merge(recipe) {
            return mergeRecipes(this, recipe)
          },
          splitVariantProps(props) {
            return splitProps(props, ${baseName}VariantKeys)
          },
          getVariantProps: ${baseName}Fn.getVariantProps,${
            isReactNative
              ? `
          base: ${baseName}Base,
          variants: ${baseName}Variants,
          defaultVariants: ${baseName}DefaultVariants,
          compoundVariants: ${baseName}CompoundVariants,`
              : ''
          }
        })
        `,
      )

    return {
      name: dashName,

      js: jsCode,

      dts: outdent`
        ${ctx.file.importType(`ConditionalValue${!isReactNative ? '' : `${Recipes.isSlotRecipeConfig(config) ? `, Slot` : ', '}RecipeDefinition`}`, '../types/index')}
        ${ctx.file.importType(`DistributiveOmit${isReactNative ? ', SystemStyleObject' : ''}, Pretty`, '../types/system-types')}

        interface ${upperName}Variant {
          ${Object.keys(variantKeyMap)
            .map((key) => {
              const values = variantKeyMap[key]
              const valueStr = values.every(isBooleanValue) ? `${key}: boolean` : `${key}: ${unionType(values)}`
              return [getDefaultValueJsDoc(key), valueStr].filter(Boolean).join('\n')
            })
            .join('\n')}
        }

        type ${upperName}VariantMap = {
          [key in keyof ${upperName}Variant]: Array<${upperName}Variant[key]>
        }

        export type ${upperName}VariantProps = {
          [key in keyof ${upperName}Variant]?: ${
            compoundVariants?.length ? `${upperName}Variant[key]` : `ConditionalValue<${upperName}Variant[key]>`
          } | undefined
        }${
          !isReactNative
            ? ''
            : Recipes.isSlotRecipeConfig(config)
              ? `
export type ${upperName}Slots = ${unionType(config.slots)}
export type ${upperName}Variants = {
  [variantKey in keyof ${upperName}Variant]?: {
    [key in ${upperName}Variant[variantKey]]?: {
      [key in ${upperName}Slots]?: SystemStyleObject;
    };
  };
};
export type RecipeType = SlotRecipeDefinition<${upperName}Slots, ${upperName}Variants>;
`
              : `export type ${upperName}Variants = {
  [variantKey in keyof ${upperName}Variant]?: {
    [key in ${upperName}Variant[variantKey]]?: SystemStyleObject;
  };
};
export type RecipeType = RecipeDefinition<${upperName}Variants>;
`
        }${
          isReactNative
            ? `
export type ${upperName}Base = RecipeType["base"];

export type ${upperName}DefaultVariants = RecipeType["defaultVariants"];

export type ${upperName}CompoundVariants = RecipeType["compoundVariants"];`
            : ''
        }

        export interface ${upperName}Recipe {
          __type: ${upperName}VariantProps
          (props?: ${upperName}VariantProps): ${
            Recipes.isSlotRecipeConfig(config)
              ? `Pretty<Record<${isReactNative ? `${upperName}Slots` : unionType(config.slots)}, string>>`
              : 'string'
          }
          raw: (props?: ${upperName}VariantProps) => ${upperName}VariantProps
          variantMap: ${upperName}VariantMap
          variantKeys: Array<keyof ${upperName}Variant>
          splitVariantProps<Props extends ${upperName}VariantProps>(props: Props): [${upperName}VariantProps, Pretty<DistributiveOmit<Props, keyof ${upperName}VariantProps>>]
          getVariantProps: (props?: ${upperName}VariantProps) => ${upperName}VariantProps
        ${
          !isReactNative
            ? ''
            : `  base?: ${upperName}Base
  variants?: ${upperName}Variants
  defaultVariants?: ${upperName}DefaultVariants
  compoundVariants?: ${upperName}CompoundVariants${
    Recipes.isSlotRecipeConfig(config)
      ? `
  slots: ${upperName}Slots
`
      : ''
  }`
        }}

        ${ctx.file.jsDocComment(description, { deprecated })}
        export declare const ${baseName}: ${upperName}Recipe
        `,
    }
  })
}

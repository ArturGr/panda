/* eslint-disable */
import type { ConditionalValue } from './conditions';
import type { OnlyKnown, UtilityValues, WithEscapeHatch } from './prop-type';
import type { CssProperties } from './system-types';
import type { Token } from '../tokens/index';

type AnyString = (string & {})
type CssVars = `var(--${string})`
type CssVarValue = ConditionalValue<Token | AnyString | (number & {})>

type CssVarName =  | AnyString
type CssVarKeys = `--${CssVarName}`

export type CssVarProperties = {
  [key in CssVarKeys]?: CssVarValue
}

export interface SystemProperties {
   /**
   * The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
   *
   * **Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **28**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
alignContent?: ConditionalValue<CssVars | CssProperties["alignContent"] | AnyString>
 /**
   * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   *
   * **Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **20**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
alignItems?: ConditionalValue<CssVars | CssProperties["alignItems"] | AnyString>
 /**
   * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
   *
   * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **20**  |  **9**  | **12** | **10** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
alignSelf?: ConditionalValue<CssVars | CssProperties["alignSelf"] | AnyString>
 /**
   * The **`aspect-ratio`** CSS property sets a **preferred aspect ratio** for the box, which will be used in the calculation of auto sizes and some other layout functions.
   *
   * **Syntax**: `auto | <ratio>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **88** | **89**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/aspect-ratio
   */
aspectRatio?: ConditionalValue<UtilityValues["aspectRatio"] | CssVars | CssProperties["aspectRatio"] | AnyString>
 /**
   * The **`border-bottom-width`** CSS property sets the width of the bottom border of an element.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
borderBottomWidth?: ConditionalValue<CssProperties["borderBottomWidth"] | AnyString>
 /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome |           Firefox           |  Safari  | Edge | IE  |
   * | :----: | :-------------------------: | :------: | :--: | :-: |
   * | **69** |           **41**            | **12.1** | n/a  | No  |
   * |        | 3 _(-moz-border-end-width)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
borderEndWidth?: ConditionalValue<string | number | AnyString>
 /**
   * The **`border-left-width`** CSS property sets the width of the left border of an element.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
borderLeftWidth?: ConditionalValue<CssProperties["borderLeftWidth"] | AnyString>
 /**
   * The **`border-right-width`** CSS property sets the width of the right border of an element.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
borderRightWidth?: ConditionalValue<CssProperties["borderRightWidth"] | AnyString>
 /**
   * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
borderStartWidth?: ConditionalValue<string | number | AnyString>
 /**
   * The **`border-top-width`** CSS property sets the width of the top border of an element.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
borderTopWidth?: ConditionalValue<CssProperties["borderTopWidth"] | AnyString>
 /**
   * The **`border-width`** shorthand CSS property sets the width of an element's border.
   *
   * **Syntax**: `<line-width>{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
borderWidth?: ConditionalValue<CssProperties["borderWidth"] | AnyString>
 /**
   * The **`bottom`** CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
bottom?: ConditionalValue<UtilityValues["bottom"] | CssVars | CssProperties["bottom"] | AnyString>
 /**
   * The **`display`** CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
   *
   * **Syntax**: `[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>`
   *
   * **Initial value**: `inline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
display?: ConditionalValue<CssVars | CssProperties["display"] | AnyString>
 /**
   * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **63**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-end
   */
end?: ConditionalValue<UtilityValues["insetInlineEnd"] | CssVars | AnyString>
 /**
   * The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.
   *
   * **Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
flex?: ConditionalValue<UtilityValues["flex"] | CssVars | CssProperties["flex"] | AnyString>
 /**
   * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
   *
   * **Syntax**: `content | <'width'>`
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **22**  |  **9**  | **12** | **11** |
   * | 22 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
flexBasis?: ConditionalValue<UtilityValues["flexBasis"] | CssVars | CssProperties["flexBasis"] | AnyString>
 /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Syntax**: `row | row-reverse | column | column-reverse`
   *
   * **Initial value**: `row`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |    IE    |
   * | :------: | :------: | :-----: | :----: | :------: |
   * |  **29**  |  **81**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ | 49 _-x-_ | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
flexDirection?: ConditionalValue<CssVars | CssProperties["flexDirection"] | AnyString>
 /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's rows.
   *
   * **Syntax**: `normal | <length-percentage>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **47** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
rowGap?: ConditionalValue<UtilityValues["rowGap"] | CssVars | CssProperties["rowGap"] | AnyString>
 /**
   * The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * **Syntax**: `<'row-gap'> <'column-gap'>?`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
gap?: ConditionalValue<UtilityValues["gap"] | CssVars | CssProperties["gap"] | AnyString>
 /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Syntax**: `normal | <length-percentage>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **1**  | **1.5** | **3**  | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
columnGap?: ConditionalValue<UtilityValues["columnGap"] | CssVars | CssProperties["columnGap"] | AnyString>
 /**
   * The **`flex-grow`** CSS property sets the flex grow factor of a flex item's main size.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |            IE            |
   * | :------: | :-----: | :-----: | :----: | :----------------------: |
   * |  **29**  | **20**  |  **9**  | **12** |          **11**          |
   * | 22 _-x-_ |         | 7 _-x-_ |        | 10 _(-ms-flex-positive)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
flexGrow?: ConditionalValue<CssProperties["flexGrow"] | AnyString>
 /**
   * The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `1`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **20**  |  **9**  | **12** | **10** |
   * | 22 _-x-_ |         | 8 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
flexShrink?: ConditionalValue<CssProperties["flexShrink"] | AnyString>
 /**
   * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * **Syntax**: `nowrap | wrap | wrap-reverse`
   *
   * **Initial value**: `nowrap`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **28**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
flexWrap?: ConditionalValue<CssVars | CssProperties["flexWrap"] | AnyString>
 /**
   * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
height?: ConditionalValue<UtilityValues["height"] | CssVars | CssProperties["height"] | AnyString>
 /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * **Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **20**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
justifyContent?: ConditionalValue<CssProperties["justifyContent"] | AnyString>
 /**
   * The **`left`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
left?: ConditionalValue<UtilityValues["left"] | CssVars | CssProperties["left"] | AnyString>
 /**
   * The **`margin`** CSS shorthand property sets the margin area on all four sides of an element.
   *
   * **Syntax**: `[ <length> | <percentage> | auto ]{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
margin?: ConditionalValue<UtilityValues["margin"] | CssVars | CssProperties["margin"] | AnyString>
 /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
marginBottom?: ConditionalValue<UtilityValues["marginBottom"] | CssVars | CssProperties["marginBottom"] | AnyString>
 /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * |          Chrome          |        Firefox        |          Safari          | Edge | IE  |
   * | :----------------------: | :-------------------: | :----------------------: | :--: | :-: |
   * |          **69**          |        **41**         |         **12.1**         | n/a  | No  |
   * | 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
marginEnd?: ConditionalValue<UtilityValues["marginInlineEnd"] | CssVars | AnyString>
 marginHorizontal?: ConditionalValue<CssProperties["marginHorizontal"] | AnyString>
 /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
marginLeft?: ConditionalValue<UtilityValues["marginLeft"] | CssVars | CssProperties["marginLeft"] | AnyString>
 /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
marginRight?: ConditionalValue<UtilityValues["marginRight"] | CssVars | CssProperties["marginRight"] | AnyString>
 /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * |           Chrome           |         Firefox         |           Safari           | Edge | IE  |
   * | :------------------------: | :---------------------: | :------------------------: | :--: | :-: |
   * |           **69**           |         **41**          |          **12.1**          | n/a  | No  |
   * | 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
marginStart?: ConditionalValue<UtilityValues["marginInlineStart"] | CssVars | AnyString>
 /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
marginTop?: ConditionalValue<UtilityValues["marginTop"] | CssVars | CssProperties["marginTop"] | AnyString>
 marginVertical?: ConditionalValue<CssProperties["marginVertical"] | AnyString>
 /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
   *
   * **Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **18** |  **1**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
maxHeight?: ConditionalValue<UtilityValues["maxHeight"] | CssVars | CssProperties["maxHeight"] | AnyString>
 /**
   * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
   *
   * **Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
maxWidth?: ConditionalValue<UtilityValues["maxWidth"] | CssVars | CssProperties["maxWidth"] | AnyString>
 /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **3**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
minHeight?: ConditionalValue<UtilityValues["minHeight"] | CssVars | CssProperties["minHeight"] | AnyString>
 /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
minWidth?: ConditionalValue<UtilityValues["minWidth"] | CssVars | CssProperties["minWidth"] | AnyString>
 /**
   * The **`overflow`** CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.
   *
   * **Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
overflow?: ConditionalValue<CssVars | CssProperties["overflow"] | AnyString>
 /**
   * The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once.
   *
   * **Syntax**: `[ <length> | <percentage> ]{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
padding?: ConditionalValue<UtilityValues["padding"] | CssVars | CssProperties["padding"] | AnyString>
 /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
paddingBottom?: ConditionalValue<UtilityValues["paddingBottom"] | CssVars | CssProperties["paddingBottom"] | AnyString>
 /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * |          Chrome           |        Firefox         |          Safari           | Edge | IE  |
   * | :-----------------------: | :--------------------: | :-----------------------: | :--: | :-: |
   * |          **69**           |         **41**         |         **12.1**          | n/a  | No  |
   * | 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
paddingEnd?: ConditionalValue<UtilityValues["paddingInlineEnd"] | CssVars | AnyString>
 paddingHorizontal?: ConditionalValue<CssProperties["paddingHorizontal"] | AnyString>
 /**
   * The **`padding-left`** CSS property sets the width of the padding area to the left of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
paddingLeft?: ConditionalValue<UtilityValues["paddingLeft"] | CssVars | CssProperties["paddingLeft"] | AnyString>
 /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
paddingRight?: ConditionalValue<UtilityValues["paddingRight"] | CssVars | CssProperties["paddingRight"] | AnyString>
 /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * |           Chrome            |         Firefox          |           Safari            | Edge | IE  |
   * | :-------------------------: | :----------------------: | :-------------------------: | :--: | :-: |
   * |           **69**            |          **41**          |          **12.1**           | n/a  | No  |
   * | 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
paddingStart?: ConditionalValue<UtilityValues["paddingInlineStart"] | CssVars | AnyString>
 /**
   * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
paddingTop?: ConditionalValue<UtilityValues["paddingTop"] | CssVars | CssProperties["paddingTop"] | AnyString>
 paddingVertical?: ConditionalValue<CssProperties["paddingVertical"] | AnyString>
 /**
   * The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   *
   * **Syntax**: `static | relative | absolute | sticky | fixed`
   *
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
position?: ConditionalValue<CssVars | CssProperties["position"] | AnyString>
 /**
   * The **`right`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
right?: ConditionalValue<UtilityValues["right"] | CssVars | CssProperties["right"] | AnyString>
 /**
   * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **63**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-start
   */
start?: ConditionalValue<UtilityValues["insetInlineStart"] | CssVars | AnyString>
 /**
   * The **`top`** CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
top?: ConditionalValue<UtilityValues["top"] | CssVars | CssProperties["top"] | AnyString>
 /**
   * The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
width?: ConditionalValue<UtilityValues["width"] | CssVars | CssProperties["width"] | AnyString>
 /**
   * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * **Syntax**: `auto | <integer>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
zIndex?: ConditionalValue<CssProperties["zIndex"] | AnyString>
 /**
   * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
   *
   * **Syntax**: `ltr | rtl`
   *
   * **Initial value**: `ltr`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **2**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
direction?: ConditionalValue<CssVars | CssProperties["direction"] | AnyString>
 /**
   * The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   *
   * **Syntax**: `static | relative | absolute | sticky | fixed`
   *
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
pos?: ConditionalValue<CssProperties["position"] | AnyString>
 /**
   * The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **63**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline
   */
insetX?: ConditionalValue<UtilityValues["insetInline"] | CssVars | AnyString>
 /**
   * The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **63**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block
   */
insetY?: ConditionalValue<UtilityValues["insetBlock"] | CssVars | AnyString>
 /**
   * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **63**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-end
   */
insetEnd?: ConditionalValue<UtilityValues["insetInlineEnd"] | CssVars | AnyString>
 /**
   * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **63**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-start
   */
insetStart?: ConditionalValue<UtilityValues["insetInlineStart"] | CssVars | AnyString>
 /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Syntax**: `row | row-reverse | column | column-reverse`
   *
   * **Initial value**: `row`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |    IE    |
   * | :------: | :------: | :-----: | :----: | :------: |
   * |  **29**  |  **81**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ | 49 _-x-_ | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
flexDir?: ConditionalValue<CssProperties["flexDirection"] | AnyString>
 /**
   * The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once.
   *
   * **Syntax**: `[ <length> | <percentage> ]{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
p?: ConditionalValue<UtilityValues["padding"] | CssVars | CssProperties["padding"] | AnyString>
 /**
   * The **`padding-left`** CSS property sets the width of the padding area to the left of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
pl?: ConditionalValue<UtilityValues["paddingLeft"] | CssVars | CssProperties["paddingLeft"] | AnyString>
 /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
pr?: ConditionalValue<UtilityValues["paddingRight"] | CssVars | CssProperties["paddingRight"] | AnyString>
 /**
   * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
pt?: ConditionalValue<UtilityValues["paddingTop"] | CssVars | CssProperties["paddingTop"] | AnyString>
 /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
pb?: ConditionalValue<UtilityValues["paddingBottom"] | CssVars | CssProperties["paddingBottom"] | AnyString>
 /**
   * The **`padding-block`** CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block
   */
py?: ConditionalValue<UtilityValues["paddingBlock"] | CssVars | AnyString>
 /**
   * The **`padding-block`** CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block
   */
paddingY?: ConditionalValue<UtilityValues["paddingBlock"] | CssVars | AnyString>
 /**
   * The **`padding-inline`** CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline
   */
paddingX?: ConditionalValue<UtilityValues["paddingInline"] | CssVars | AnyString>
 /**
   * The **`padding-inline`** CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline
   */
px?: ConditionalValue<UtilityValues["paddingInline"] | CssVars | AnyString>
 /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * |          Chrome           |        Firefox         |          Safari           | Edge | IE  |
   * | :-----------------------: | :--------------------: | :-----------------------: | :--: | :-: |
   * |          **69**           |         **41**         |         **12.1**          | n/a  | No  |
   * | 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
pe?: ConditionalValue<UtilityValues["paddingInlineEnd"] | CssVars | AnyString>
 /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * |           Chrome            |         Firefox          |           Safari            | Edge | IE  |
   * | :-------------------------: | :----------------------: | :-------------------------: | :--: | :-: |
   * |           **69**            |          **41**          |          **12.1**           | n/a  | No  |
   * | 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
ps?: ConditionalValue<UtilityValues["paddingInlineStart"] | CssVars | AnyString>
 /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
ml?: ConditionalValue<UtilityValues["marginLeft"] | CssVars | CssProperties["marginLeft"] | AnyString>
 /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
mr?: ConditionalValue<UtilityValues["marginRight"] | CssVars | CssProperties["marginRight"] | AnyString>
 /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
mt?: ConditionalValue<UtilityValues["marginTop"] | CssVars | CssProperties["marginTop"] | AnyString>
 /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
mb?: ConditionalValue<UtilityValues["marginBottom"] | CssVars | CssProperties["marginBottom"] | AnyString>
 /**
   * The **`margin`** CSS shorthand property sets the margin area on all four sides of an element.
   *
   * **Syntax**: `[ <length> | <percentage> | auto ]{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
m?: ConditionalValue<UtilityValues["margin"] | CssVars | CssProperties["margin"] | AnyString>
 /**
   * The **`margin-block`** CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block
   */
my?: ConditionalValue<UtilityValues["marginBlock"] | CssVars | AnyString>
 /**
   * The **`margin-block`** CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block
   */
marginY?: ConditionalValue<UtilityValues["marginBlock"] | CssVars | AnyString>
 /**
   * The **`margin-inline`** CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline
   */
mx?: ConditionalValue<UtilityValues["marginInline"] | CssVars | AnyString>
 /**
   * The **`margin-inline`** CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline
   */
marginX?: ConditionalValue<UtilityValues["marginInline"] | CssVars | AnyString>
 /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * |          Chrome          |        Firefox        |          Safari          | Edge | IE  |
   * | :----------------------: | :-------------------: | :----------------------: | :--: | :-: |
   * |          **69**          |        **41**         |         **12.1**         | n/a  | No  |
   * | 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
me?: ConditionalValue<UtilityValues["marginInlineEnd"] | CssVars | AnyString>
 /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * |           Chrome           |         Firefox         |           Safari           | Edge | IE  |
   * | :------------------------: | :---------------------: | :------------------------: | :--: | :-: |
   * |           **69**           |         **41**          |          **12.1**          | n/a  | No  |
   * | 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
ms?: ConditionalValue<UtilityValues["marginInlineStart"] | CssVars | AnyString>
 /**
   * The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
ringWidth?: ConditionalValue<string | number | AnyString>
 /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   * **Syntax**: `<color> | invert`
   *
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
ringColor?: ConditionalValue<UtilityValues["outlineColor"] | CssVars | AnyString>
 /**
   * The **`outline`** CSS shorthand property sets most of the outline properties in a single declaration.
   *
   * **Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :------: | :----: | :---: |
   * | **94** | **88**  | **16.4** | **94** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
ring?: ConditionalValue<UtilityValues["outline"] | CssVars | AnyString>
 /**
   * The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **1**  | **1.5** | **1.2** | **15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
ringOffset?: ConditionalValue<UtilityValues["outlineOffset"] | CssVars | AnyString>
 /**
   * The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
w?: ConditionalValue<UtilityValues["width"] | CssVars | CssProperties["width"] | AnyString>
 /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
minW?: ConditionalValue<UtilityValues["minWidth"] | CssVars | CssProperties["minWidth"] | AnyString>
 /**
   * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
   *
   * **Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
maxW?: ConditionalValue<UtilityValues["maxWidth"] | CssVars | CssProperties["maxWidth"] | AnyString>
 /**
   * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
h?: ConditionalValue<UtilityValues["height"] | CssVars | CssProperties["height"] | AnyString>
 /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **3**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
minH?: ConditionalValue<UtilityValues["minHeight"] | CssVars | CssProperties["minHeight"] | AnyString>
 /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
   *
   * **Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **18** |  **1**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
maxH?: ConditionalValue<UtilityValues["maxHeight"] | CssVars | CssProperties["maxHeight"] | AnyString>
 textShadowColor?: ConditionalValue<UtilityValues["textShadowColor"] | CssVars | AnyString>
 /**
   * The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Syntax**: `<bg-position>#`
   *
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
bgPosition?: ConditionalValue<string | number | AnyString>
 /**
   * The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`
   *
   * **Initial value**: `0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **49**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
bgPositionX?: ConditionalValue<string | number | AnyString>
 /**
   * The **`background-position-y`** CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Syntax**: `[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`
   *
   * **Initial value**: `0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **49**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
bgPositionY?: ConditionalValue<string | number | AnyString>
 /**
   * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
   *
   * **Syntax**: `<attachment>#`
   *
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
bgAttachment?: ConditionalValue<string | number | AnyString>
 /**
   * The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
   *
   * **Syntax**: `<box>#`
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **4**  |  **5**  | **12** | **9** |
   * |        |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
bgClip?: ConditionalValue<string | number | AnyString>
 /**
   * The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
   *
   * **Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
bg?: ConditionalValue<UtilityValues["background"] | CssVars | AnyString>
 /**
   * The **`background-color`** CSS property sets the background color of an element.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
bgColor?: ConditionalValue<UtilityValues["backgroundColor"] | CssVars | AnyString>
 /**
   * The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
   *
   * **Syntax**: `<box>#`
   *
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
bgOrigin?: ConditionalValue<string | number | AnyString>
 /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   *
   * **Syntax**: `<bg-image>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
bgImage?: ConditionalValue<UtilityValues["backgroundImage"] | CssVars | AnyString>
 /**
   * The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
   *
   * **Syntax**: `<repeat-style>#`
   *
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
bgRepeat?: ConditionalValue<string | number | AnyString>
 /**
   * The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.
   *
   * **Syntax**: `<blend-mode>#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **35** | **30**  | **8**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
bgBlendMode?: ConditionalValue<string | number | AnyString>
 /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **3**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
bgSize?: ConditionalValue<string | number | AnyString>
 bgGradient?: ConditionalValue<UtilityValues["backgroundGradient"] | CssVars | AnyString>
 /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * **Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
rounded?: ConditionalValue<UtilityValues["borderRadius"] | CssVars | AnyString>
 /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
roundedTopLeft?: ConditionalValue<UtilityValues["borderTopLeftRadius"] | CssVars | AnyString>
 /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
roundedTopRight?: ConditionalValue<UtilityValues["borderTopRightRadius"] | CssVars | AnyString>
 /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
roundedBottomRight?: ConditionalValue<UtilityValues["borderBottomRightRadius"] | CssVars | AnyString>
 /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
roundedBottomLeft?: ConditionalValue<UtilityValues["borderBottomLeftRadius"] | CssVars | AnyString>
 roundedTop?: ConditionalValue<UtilityValues["borderTopRadius"] | CssVars | AnyString>
 roundedRight?: ConditionalValue<UtilityValues["borderRightRadius"] | CssVars | AnyString>
 roundedBottom?: ConditionalValue<UtilityValues["borderBottomRadius"] | CssVars | AnyString>
 roundedLeft?: ConditionalValue<UtilityValues["borderLeftRadius"] | CssVars | AnyString>
 /**
   * The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **89** | **66**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   */
roundedStartStart?: ConditionalValue<UtilityValues["borderStartStartRadius"] | CssVars | AnyString>
 /**
   * The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **89** | **66**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   */
roundedStartEnd?: ConditionalValue<UtilityValues["borderStartEndRadius"] | CssVars | AnyString>
 roundedStart?: ConditionalValue<UtilityValues["borderStartRadius"] | CssVars | AnyString>
 /**
   * The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **89** | **66**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   */
roundedEndStart?: ConditionalValue<UtilityValues["borderEndStartRadius"] | CssVars | AnyString>
 /**
   * The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **89** | **66**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   */
roundedEndEnd?: ConditionalValue<UtilityValues["borderEndEndRadius"] | CssVars | AnyString>
 roundedEnd?: ConditionalValue<UtilityValues["borderEndRadius"] | CssVars | AnyString>
 /**
   * The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline
   */
borderX?: ConditionalValue<UtilityValues["borderInline"] | CssVars | AnyString>
 /**
   * The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-width
   */
borderXWidth?: ConditionalValue<string | number | AnyString>
 /**
   * The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>{1,2}`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-color
   */
borderXColor?: ConditionalValue<UtilityValues["borderInlineColor"] | CssVars | AnyString>
 /**
   * The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block
   */
borderY?: ConditionalValue<UtilityValues["borderBlock"] | CssVars | AnyString>
 /**
   * The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-width
   */
borderYWidth?: ConditionalValue<string | number | AnyString>
 /**
   * The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>{1,2}`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-color
   */
borderYColor?: ConditionalValue<UtilityValues["borderBlockColor"] | CssVars | AnyString>
 /**
   * The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
borderStart?: ConditionalValue<UtilityValues["borderInlineStart"] | CssVars | AnyString>
 /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |            Firefox            |  Safari  | Edge | IE  |
   * | :----: | :---------------------------: | :------: | :--: | :-: |
   * | **69** |            **41**             | **12.1** | n/a  | No  |
   * |        | 3 _(-moz-border-start-color)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
borderStartColor?: ConditionalValue<UtilityValues["borderInlineStartColor"] | CssVars | AnyString>
 /**
   * The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
borderEnd?: ConditionalValue<UtilityValues["borderInlineEnd"] | CssVars | AnyString>
 /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |           Firefox           |  Safari  | Edge | IE  |
   * | :----: | :-------------------------: | :------: | :--: | :-: |
   * | **69** |           **41**            | **12.1** | n/a  | No  |
   * |        | 3 _(-moz-border-end-color)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
borderEndColor?: ConditionalValue<UtilityValues["borderInlineEndColor"] | CssVars | AnyString>
 /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
   *
   * **Syntax**: `none | <shadow>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  |  **4**  | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
shadow?: ConditionalValue<UtilityValues["boxShadow"] | CssVars | AnyString>
 shadowColor?: ConditionalValue<UtilityValues["boxShadowColor"] | CssVars | AnyString>
 x?: ConditionalValue<UtilityValues["translateX"] | CssVars | AnyString>
 y?: ConditionalValue<UtilityValues["translateY"] | CssVars | AnyString>
 z?: ConditionalValue<UtilityValues["translateZ"] | CssVars | AnyString>
 /**
   * The `scroll-margin-block` shorthand property sets the scroll margins of an element in the block dimension.
   *
   * **Syntax**: `<length>{1,2}`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block
   */
scrollMarginY?: ConditionalValue<UtilityValues["scrollMarginBlock"] | CssVars | AnyString>
 /**
   * The `scroll-margin-inline` shorthand property sets the scroll margins of an element in the inline dimension.
   *
   * **Syntax**: `<length>{1,2}`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline
   */
scrollMarginX?: ConditionalValue<UtilityValues["scrollMarginInline"] | CssVars | AnyString>
 /**
   * The `scroll-padding-block` shorthand property sets the scroll padding of an element in the block dimension.
   *
   * **Syntax**: `[ auto | <length-percentage> ]{1,2}`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block
   */
scrollPaddingY?: ConditionalValue<UtilityValues["scrollPaddingBlock"] | CssVars | AnyString>
 /**
   * The `scroll-padding-inline` shorthand property sets the scroll padding of an element in the inline dimension.
   *
   * **Syntax**: `[ auto | <length-percentage> ]{1,2}`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline
   */
scrollPaddingX?: ConditionalValue<UtilityValues["scrollPaddingInline"] | CssVars | AnyString>
 /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * **Syntax**: `slice | clone`
   *
   * **Initial value**: `slice`
   *
   * |    Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :----------: | :-----: | :---------: | :--: | :-: |
   * | **22** _-x-_ | **32**  | **7** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
boxDecorationBreak?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.
   *
   * **Syntax**: `content-box | border-box`
   *
   * **Initial value**: `content-box`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
boxSizing?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **32** | **36**  | **10** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
objectPosition?: ConditionalValue<string | number | AnyString>
 /**
   * The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   *
   * **Syntax**: `fill | contain | cover | none | scale-down`
   *
   * **Initial value**: `fill`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **32** | **36**  | **10** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
objectFit?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.
   *
   * **Syntax**: `[ contain | none | auto ]{1,2}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  | **16** | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
overscrollBehavior?: ConditionalValue<string | number | AnyString>
 /**
   * The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  | **16** | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
overscrollBehaviorX?: ConditionalValue<string | number | AnyString>
 /**
   * The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  | **16** | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
overscrollBehaviorY?: ConditionalValue<string | number | AnyString>
 /**
   * The **`inset`** CSS property is a shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties. It has the same multi-value syntax of the `margin` shorthand.
   *
   * **Syntax**: `<'top'>{1,4}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset
   */
inset?: ConditionalValue<UtilityValues["inset"] | CssVars | AnyString>
 /**
   * The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **63**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline
   */
insetInline?: ConditionalValue<UtilityValues["insetInline"] | CssVars | AnyString>
 /**
   * The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **63**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block
   */
insetBlock?: ConditionalValue<UtilityValues["insetBlock"] | CssVars | AnyString>
 /**
   * The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **63**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-end
   */
insetBlockEnd?: ConditionalValue<UtilityValues["insetBlockEnd"] | CssVars | AnyString>
 /**
   * The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **63**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-start
   */
insetBlockStart?: ConditionalValue<UtilityValues["insetBlockStart"] | CssVars | AnyString>
 /**
   * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **63**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-end
   */
insetInlineEnd?: ConditionalValue<UtilityValues["insetInlineEnd"] | CssVars | AnyString>
 /**
   * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **63**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-start
   */
insetInlineStart?: ConditionalValue<UtilityValues["insetInlineStart"] | CssVars | AnyString>
 /**
   * The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
   *
   * **Syntax**: `left | right | none | inline-start | inline-end`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
float?: ConditionalValue<UtilityValues["float"] | CssVars | AnyString>
 /**
   * The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.
   *
   * **Syntax**: `visible | hidden | collapse`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
visibility?: ConditionalValue<CssVars | AnyString>
 hideFrom?: ConditionalValue<UtilityValues["hideFrom"] | CssVars | AnyString>
 hideBelow?: ConditionalValue<UtilityValues["hideBelow"] | CssVars | AnyString>
 /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   *
   * **Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |             IE              |
   * | :----: | :-----: | :------: | :----: | :-------------------------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
gridTemplateColumns?: ConditionalValue<UtilityValues["gridTemplateColumns"] | CssVars | AnyString>
 /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   *
   * **Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |            IE            |
   * | :----: | :-----: | :------: | :----: | :----------------------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
gridTemplateRows?: ConditionalValue<UtilityValues["gridTemplateRows"] | CssVars | AnyString>
 /**
   * The **`grid-column`** CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * **Syntax**: `<grid-line> [ / <grid-line> ]?`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
gridColumn?: ConditionalValue<UtilityValues["gridColumn"] | CssVars | AnyString>
 /**
   * The **`grid-row`** CSS shorthand property specifies a grid item's size and location within a grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * **Syntax**: `<grid-line> [ / <grid-line> ]?`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
gridRow?: ConditionalValue<UtilityValues["gridRow"] | CssVars | AnyString>
 /**
   * The **`grid-column-start`** CSS property specifies a grid item's start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
   *
   * **Syntax**: `<grid-line>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
gridColumnStart?: ConditionalValue<string | number | AnyString>
 /**
   * The **`grid-column-end`** CSS property specifies a grid item's end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
   *
   * **Syntax**: `<grid-line>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
gridColumnEnd?: ConditionalValue<string | number | AnyString>
 /**
   * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   *
   * **Syntax**: `[ row | column ] || dense`
   *
   * **Initial value**: `row`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
gridAutoFlow?: ConditionalValue<string | number | AnyString>
 /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.
   *
   * **Syntax**: `<track-size>+`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |             IE              |
   * | :----: | :-----: | :------: | :----: | :-------------------------: |
   * | **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
gridAutoColumns?: ConditionalValue<UtilityValues["gridAutoColumns"] | CssVars | AnyString>
 /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.
   *
   * **Syntax**: `<track-size>+`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |            IE            |
   * | :----: | :-----: | :------: | :----: | :----------------------: |
   * | **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
gridAutoRows?: ConditionalValue<UtilityValues["gridAutoRows"] | CssVars | AnyString>
 gridGap?: ConditionalValue<UtilityValues["gridGap"] | CssVars | AnyString>
 gridRowGap?: ConditionalValue<UtilityValues["gridRowGap"] | CssVars | AnyString>
 gridColumnGap?: ConditionalValue<UtilityValues["gridColumnGap"] | CssVars | AnyString>
 /**
   * The **`padding-block`** CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block
   */
paddingBlock?: ConditionalValue<UtilityValues["paddingBlock"] | CssVars | AnyString>
 /**
   * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
paddingBlockEnd?: ConditionalValue<UtilityValues["paddingBlockEnd"] | CssVars | AnyString>
 /**
   * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
paddingBlockStart?: ConditionalValue<UtilityValues["paddingBlockStart"] | CssVars | AnyString>
 /**
   * The **`padding-inline`** CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline
   */
paddingInline?: ConditionalValue<UtilityValues["paddingInline"] | CssVars | AnyString>
 /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * |          Chrome           |        Firefox         |          Safari           | Edge | IE  |
   * | :-----------------------: | :--------------------: | :-----------------------: | :--: | :-: |
   * |          **69**           |         **41**         |         **12.1**          | n/a  | No  |
   * | 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
paddingInlineEnd?: ConditionalValue<UtilityValues["paddingInlineEnd"] | CssVars | AnyString>
 /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * |           Chrome            |         Firefox          |           Safari            | Edge | IE  |
   * | :-------------------------: | :----------------------: | :-------------------------: | :--: | :-: |
   * |           **69**            |          **41**          |          **12.1**           | n/a  | No  |
   * | 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
paddingInlineStart?: ConditionalValue<UtilityValues["paddingInlineStart"] | CssVars | AnyString>
 /**
   * The **`margin-block`** CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block
   */
marginBlock?: ConditionalValue<UtilityValues["marginBlock"] | CssVars | AnyString>
 /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
marginBlockEnd?: ConditionalValue<UtilityValues["marginBlockEnd"] | CssVars | AnyString>
 /**
   * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
marginBlockStart?: ConditionalValue<UtilityValues["marginBlockStart"] | CssVars | AnyString>
 /**
   * The **`margin-inline`** CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline
   */
marginInline?: ConditionalValue<UtilityValues["marginInline"] | CssVars | AnyString>
 /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * |          Chrome          |        Firefox        |          Safari          | Edge | IE  |
   * | :----------------------: | :-------------------: | :----------------------: | :--: | :-: |
   * |          **69**          |        **41**         |         **12.1**         | n/a  | No  |
   * | 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
marginInlineEnd?: ConditionalValue<UtilityValues["marginInlineEnd"] | CssVars | AnyString>
 /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * |           Chrome           |         Firefox         |           Safari           | Edge | IE  |
   * | :------------------------: | :---------------------: | :------------------------: | :--: | :-: |
   * |           **69**           |         **41**          |          **12.1**          | n/a  | No  |
   * | 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
marginInlineStart?: ConditionalValue<UtilityValues["marginInlineStart"] | CssVars | AnyString>
 spaceX?: ConditionalValue<UtilityValues["spaceX"] | CssVars | AnyString>
 spaceY?: ConditionalValue<UtilityValues["spaceY"] | CssVars | AnyString>
 /**
   * The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
outlineWidth?: ConditionalValue<string | number | AnyString>
 /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   * **Syntax**: `<color> | invert`
   *
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
outlineColor?: ConditionalValue<UtilityValues["outlineColor"] | CssVars | AnyString>
 /**
   * The **`outline`** CSS shorthand property sets most of the outline properties in a single declaration.
   *
   * **Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :------: | :----: | :---: |
   * | **94** | **88**  | **16.4** | **94** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
outline?: ConditionalValue<UtilityValues["outline"] | CssVars | AnyString>
 /**
   * The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **1**  | **1.5** | **1.2** | **15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
outlineOffset?: ConditionalValue<UtilityValues["outlineOffset"] | CssVars | AnyString>
 divideX?: ConditionalValue<string | number | AnyString>
 divideY?: ConditionalValue<string | number | AnyString>
 divideColor?: ConditionalValue<UtilityValues["divideColor"] | CssVars | AnyString>
 divideStyle?: ConditionalValue<UtilityValues["divideStyle"] | CssVars | AnyString>
 /**
   * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Syntax**: `<'width'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
inlineSize?: ConditionalValue<UtilityValues["inlineSize"] | CssVars | AnyString>
 /**
   * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Syntax**: `<'min-width'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
minInlineSize?: ConditionalValue<UtilityValues["minInlineSize"] | CssVars | AnyString>
 /**
   * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.
   *
   * **Syntax**: `<'max-width'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari   | Edge | IE  |
   * | :----: | :-----: | :--------: | :--: | :-: |
   * | **57** | **41**  |  **12.1**  | n/a  | No  |
   * |        |         | 10.1 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
maxInlineSize?: ConditionalValue<UtilityValues["maxInlineSize"] | CssVars | AnyString>
 /**
   * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Syntax**: `<'width'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
blockSize?: ConditionalValue<UtilityValues["blockSize"] | CssVars | AnyString>
 /**
   * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Syntax**: `<'min-width'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
minBlockSize?: ConditionalValue<UtilityValues["minBlockSize"] | CssVars | AnyString>
 /**
   * The **`max-block-size`** CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.
   *
   * **Syntax**: `<'max-width'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-block-size
   */
maxBlockSize?: ConditionalValue<UtilityValues["maxBlockSize"] | CssVars | AnyString>
 /**
   * The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `canvastext`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
color?: ConditionalValue<UtilityValues["color"] | CssVars | AnyString>
 /**
   * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   *
   * **Syntax**: `[ <family-name> | <generic-family> ]#`
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
fontFamily?: ConditionalValue<UtilityValues["fontFamily"] | CssVars | AnyString>
 /**
   * The **`font-size`** CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative `<length>` units, such as `em`, `ex`, and so forth.
   *
   * **Syntax**: `<absolute-size> | <relative-size> | <length-percentage>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
fontSize?: ConditionalValue<UtilityValues["fontSize"] | CssVars | AnyString>
 /**
   * The **`font-size-adjust`** CSS property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).
   *
   * **Syntax**: `none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number> ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   |  **3**  | **16.4** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
fontSizeAdjust?: ConditionalValue<string | number | AnyString>
 /**
   * **Syntax**: `normal | light | dark | <palette-identifier>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox |  Safari  | Edge | IE  |
   * | :-----: | :-----: | :------: | :--: | :-: |
   * | **101** | **107** | **15.4** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-palette
   */
fontPalette?: ConditionalValue<string | number | AnyString>
 /**
   * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
   *
   * **Syntax**: `auto | normal | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **33** | **32**  |  **9**  | n/a  | No  |
   * |        |         | 6 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
fontKerning?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   *
   * **Syntax**: `normal | <feature-tag-value>#`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **48**  |  **34**  | **9.1** | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |         |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
fontFeatureSettings?: ConditionalValue<string | number | AnyString>
 /**
   * The **`font-weight`** CSS property sets the weight (or boldness) of the font. The weights available depend on the `font-family` that is currently set.
   *
   * **Syntax**: `<font-weight-absolute> | bolder | lighter`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
fontWeight?: ConditionalValue<UtilityValues["fontWeight"] | CssVars | AnyString>
 fontSmoothing?: ConditionalValue<UtilityValues["fontSmoothing"] | CssVars | AnyString>
 /**
   * The **`font-variant`** CSS shorthand property allows you to set all the font variants for a font.
   *
   * **Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
fontVariant?: ConditionalValue<string | number | AnyString>
 /**
   * The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in `@font-feature-values`.
   *
   * **Syntax**: `normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari  | Edge | IE  |
   * | :-----: | :-----: | :-----: | :--: | :-: |
   * | **111** | **34**  | **9.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates
   */
fontVariantAlternates?: ConditionalValue<string | number | AnyString>
 /**
   * The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.
   *
   * **Syntax**: `normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **52** | **34**  | **9.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
fontVariantCaps?: ConditionalValue<string | number | AnyString>
 /**
   * The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.
   *
   * **Syntax**: `normal | [ <string> <number> ]#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **62** | **62**  | **11** | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
fontVariationSettings?: ConditionalValue<string | number | AnyString>
 /**
   * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   *
   * **Syntax**: `normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **52** | **34**  | **9.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
fontVariantNumeric?: ConditionalValue<string | number | AnyString>
 /**
   * The **`letter-spacing`** CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.
   *
   * **Syntax**: `normal | <length>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
letterSpacing?: ConditionalValue<UtilityValues["letterSpacing"] | CssVars | AnyString>
 /**
   * The **`line-height`** CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * **Syntax**: `normal | <number> | <length> | <percentage>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
lineHeight?: ConditionalValue<UtilityValues["lineHeight"] | CssVars | AnyString>
 /**
   * The **`text-align`** CSS property sets the horizontal alignment of the inline-level content inside a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.
   *
   * **Syntax**: `start | end | left | right | center | justify | match-parent`
   *
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
textAlign?: ConditionalValue<string | number | AnyString>
 /**
   * The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, and the newer `text-decoration-thickness` property.
   *
   * **Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
textDecoration?: ConditionalValue<string | number | AnyString>
 /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **36**  | **12.1** | n/a  | No  |
   * |        |         | 8 _-x-_  |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
textDecorationColor?: ConditionalValue<UtilityValues["textDecorationColor"] | CssVars | AnyString>
 /**
   * The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * |  Chrome  | Firefox | Safari | Edge | IE  |
   * | :------: | :-----: | :----: | :--: | :-: |
   * |  **99**  | **46**  | **7**  | n/a  | No  |
   * | 25 _-x-_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
textEmphasisColor?: ConditionalValue<UtilityValues["textEmphasisColor"] | CssVars | AnyString>
 /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   *
   * **Syntax**: `solid | double | dotted | dashed | wavy`
   *
   * **Initial value**: `solid`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **36**  | **12.1** | n/a  | No  |
   * |        |         | 8 _-x-_  |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
textDecorationStyle?: ConditionalValue<string | number | AnyString>
 /**
   * The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
   *
   * **Syntax**: `auto | from-font | <length> | <percentage> `
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **89** | **70**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness
   */
textDecorationThickness?: ConditionalValue<string | number | AnyString>
 /**
   * The **`text-underline-offset`** CSS property sets the offset distance of an underline text decoration line (applied using `text-decoration`) from its original position.
   *
   * **Syntax**: `auto | <length> | <percentage> `
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **70**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-offset
   */
textUnderlineOffset?: ConditionalValue<string | number | AnyString>
 /**
   * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
   *
   * **Syntax**: `none | capitalize | uppercase | lowercase | full-width | full-size-kana`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
textTransform?: ConditionalValue<string | number | AnyString>
 /**
   * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.
   *
   * **Syntax**: `<length-percentage> && hanging? && each-line?`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
textIndent?: ConditionalValue<UtilityValues["textIndent"] | CssVars | AnyString>
 /**
   * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
   *
   * **Syntax**: `none | <shadow-t>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
textShadow?: ConditionalValue<UtilityValues["textShadow"] | CssVars | AnyString>
 /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
   *
   * **Syntax**: `[ clip | ellipsis | <string> ]{1,2}`
   *
   * **Initial value**: `clip`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **7**  | **1.3** | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
textOverflow?: ConditionalValue<string | number | AnyString>
 /**
   * The **`vertical-align`** CSS property sets vertical alignment of an inline, inline-block or table-cell box.
   *
   * **Syntax**: `baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`
   *
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
verticalAlign?: ConditionalValue<string | number | AnyString>
 /**
   * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
   *
   * **Syntax**: `normal | break-all | keep-all | break-word`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **15**  | **3**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
wordBreak?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`text-wrap`** CSS property controls how text inside an element is wrapped. The different values provide:
   *
   * **Syntax**: `wrap | nowrap | balance | stable | pretty`
   *
   * **Initial value**: `wrap`
   *
   * | Chrome  | Firefox | Safari | Edge | IE  |
   * | :-----: | :-----: | :----: | :--: | :-: |
   * | **114** | **121** |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-wrap
   */
textWrap?: ConditionalValue<UtilityValues["textWrap"] | CssVars | AnyString>
 truncate?: ConditionalValue<UtilityValues["truncate"] | CssVars | AnyString>
 /**
   * **Syntax**: `none | <integer>`
   *
   * **Initial value**: `none`
   */
lineClamp?: ConditionalValue<string | number | AnyString>
 /**
   * The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
   *
   * **Syntax**: `<counter-style> | <string> | none`
   *
   * **Initial value**: `disc`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
listStyleType?: ConditionalValue<string | number | AnyString>
 /**
   * The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.
   *
   * **Syntax**: `inside | outside`
   *
   * **Initial value**: `outside`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
listStylePosition?: ConditionalValue<string | number | AnyString>
 /**
   * The **`list-style-image`** CSS property sets an image to be used as the list item marker.
   *
   * **Syntax**: `<image> | none`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
listStyleImage?: ConditionalValue<UtilityValues["listStyleImage"] | CssVars | AnyString>
 /**
   * The **`list-style`** CSS shorthand property allows you to set all the list style properties at once.
   *
   * **Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
listStyle?: ConditionalValue<string | number | AnyString>
 /**
   * The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Syntax**: `<bg-position>#`
   *
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
backgroundPosition?: ConditionalValue<string | number | AnyString>
 /**
   * The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`
   *
   * **Initial value**: `0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **49**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
backgroundPositionX?: ConditionalValue<string | number | AnyString>
 /**
   * The **`background-position-y`** CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Syntax**: `[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`
   *
   * **Initial value**: `0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **49**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
backgroundPositionY?: ConditionalValue<string | number | AnyString>
 /**
   * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
   *
   * **Syntax**: `<attachment>#`
   *
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
backgroundAttachment?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
   *
   * **Syntax**: `<box>#`
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **4**  |  **5**  | **12** | **9** |
   * |        |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
backgroundClip?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
   *
   * **Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
background?: ConditionalValue<UtilityValues["background"] | CssVars | AnyString>
 /**
   * The **`background-color`** CSS property sets the background color of an element.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
backgroundColor?: ConditionalValue<UtilityValues["backgroundColor"] | CssVars | AnyString>
 /**
   * The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
   *
   * **Syntax**: `<box>#`
   *
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
backgroundOrigin?: ConditionalValue<string | number | AnyString>
 /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   *
   * **Syntax**: `<bg-image>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
backgroundImage?: ConditionalValue<UtilityValues["backgroundImage"] | CssVars | AnyString>
 /**
   * The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
   *
   * **Syntax**: `<repeat-style>#`
   *
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
backgroundRepeat?: ConditionalValue<string | number | AnyString>
 /**
   * The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.
   *
   * **Syntax**: `<blend-mode>#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **35** | **30**  | **8**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
backgroundBlendMode?: ConditionalValue<string | number | AnyString>
 /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **3**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
backgroundSize?: ConditionalValue<string | number | AnyString>
 backgroundGradient?: ConditionalValue<UtilityValues["backgroundGradient"] | CssVars | AnyString>
 textGradient?: ConditionalValue<UtilityValues["textGradient"] | CssVars | AnyString>
 gradientFromPosition?: ConditionalValue<string | number | AnyString>
 gradientToPosition?: ConditionalValue<string | number | AnyString>
 gradientFrom?: ConditionalValue<UtilityValues["gradientFrom"] | CssVars | AnyString>
 gradientTo?: ConditionalValue<UtilityValues["gradientTo"] | CssVars | AnyString>
 gradientVia?: ConditionalValue<UtilityValues["gradientVia"] | CssVars | AnyString>
 gradientViaPosition?: ConditionalValue<string | number | AnyString>
 /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * **Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
borderRadius?: ConditionalValue<UtilityValues["borderRadius"] | CssVars | AnyString>
 /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
borderTopLeftRadius?: ConditionalValue<UtilityValues["borderTopLeftRadius"] | CssVars | AnyString>
 /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
borderTopRightRadius?: ConditionalValue<UtilityValues["borderTopRightRadius"] | CssVars | AnyString>
 /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
borderBottomRightRadius?: ConditionalValue<UtilityValues["borderBottomRightRadius"] | CssVars | AnyString>
 /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
borderBottomLeftRadius?: ConditionalValue<UtilityValues["borderBottomLeftRadius"] | CssVars | AnyString>
 borderTopRadius?: ConditionalValue<UtilityValues["borderTopRadius"] | CssVars | AnyString>
 borderRightRadius?: ConditionalValue<UtilityValues["borderRightRadius"] | CssVars | AnyString>
 borderBottomRadius?: ConditionalValue<UtilityValues["borderBottomRadius"] | CssVars | AnyString>
 borderLeftRadius?: ConditionalValue<UtilityValues["borderLeftRadius"] | CssVars | AnyString>
 /**
   * The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **89** | **66**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   */
borderStartStartRadius?: ConditionalValue<UtilityValues["borderStartStartRadius"] | CssVars | AnyString>
 /**
   * The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **89** | **66**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   */
borderStartEndRadius?: ConditionalValue<UtilityValues["borderStartEndRadius"] | CssVars | AnyString>
 borderStartRadius?: ConditionalValue<UtilityValues["borderStartRadius"] | CssVars | AnyString>
 /**
   * The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **89** | **66**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   */
borderEndStartRadius?: ConditionalValue<UtilityValues["borderEndStartRadius"] | CssVars | AnyString>
 /**
   * The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **89** | **66**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   */
borderEndEndRadius?: ConditionalValue<UtilityValues["borderEndEndRadius"] | CssVars | AnyString>
 borderEndRadius?: ConditionalValue<UtilityValues["borderEndRadius"] | CssVars | AnyString>
 /**
   * The **`border`** shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
border?: ConditionalValue<UtilityValues["border"] | CssVars | AnyString>
 /**
   * The **`border-color`** shorthand CSS property sets the color of an element's border.
   *
   * **Syntax**: `<color>{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
borderColor?: ConditionalValue<UtilityValues["borderColor"] | CssVars | AnyString>
 /**
   * The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline
   */
borderInline?: ConditionalValue<UtilityValues["borderInline"] | CssVars | AnyString>
 /**
   * The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-width
   */
borderInlineWidth?: ConditionalValue<string | number | AnyString>
 /**
   * The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>{1,2}`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-color
   */
borderInlineColor?: ConditionalValue<UtilityValues["borderInlineColor"] | CssVars | AnyString>
 /**
   * The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block
   */
borderBlock?: ConditionalValue<UtilityValues["borderBlock"] | CssVars | AnyString>
 /**
   * The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-width
   */
borderBlockWidth?: ConditionalValue<string | number | AnyString>
 /**
   * The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>{1,2}`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **87** | **66**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-color
   */
borderBlockColor?: ConditionalValue<UtilityValues["borderBlockColor"] | CssVars | AnyString>
 /**
   * The **`border-left`** shorthand CSS property sets all the properties of an element's left border.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
borderLeft?: ConditionalValue<UtilityValues["borderLeft"] | CssVars | AnyString>
 /**
   * The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
borderLeftColor?: ConditionalValue<UtilityValues["borderLeftColor"] | CssVars | AnyString>
 /**
   * The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
borderInlineStart?: ConditionalValue<UtilityValues["borderInlineStart"] | CssVars | AnyString>
 /**
   * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
borderInlineStartWidth?: ConditionalValue<string | number | AnyString>
 /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |            Firefox            |  Safari  | Edge | IE  |
   * | :----: | :---------------------------: | :------: | :--: | :-: |
   * | **69** |            **41**             | **12.1** | n/a  | No  |
   * |        | 3 _(-moz-border-start-color)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
borderInlineStartColor?: ConditionalValue<UtilityValues["borderInlineStartColor"] | CssVars | AnyString>
 /**
   * The **`border-right`** shorthand CSS property sets all the properties of an element's right border.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
borderRight?: ConditionalValue<UtilityValues["borderRight"] | CssVars | AnyString>
 /**
   * The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
borderRightColor?: ConditionalValue<UtilityValues["borderRightColor"] | CssVars | AnyString>
 /**
   * The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
borderInlineEnd?: ConditionalValue<UtilityValues["borderInlineEnd"] | CssVars | AnyString>
 /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome |           Firefox           |  Safari  | Edge | IE  |
   * | :----: | :-------------------------: | :------: | :--: | :-: |
   * | **69** |           **41**            | **12.1** | n/a  | No  |
   * |        | 3 _(-moz-border-end-width)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
borderInlineEndWidth?: ConditionalValue<string | number | AnyString>
 /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |           Firefox           |  Safari  | Edge | IE  |
   * | :----: | :-------------------------: | :------: | :--: | :-: |
   * | **69** |           **41**            | **12.1** | n/a  | No  |
   * |        | 3 _(-moz-border-end-color)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
borderInlineEndColor?: ConditionalValue<UtilityValues["borderInlineEndColor"] | CssVars | AnyString>
 /**
   * The **`border-top`** shorthand CSS property sets all the properties of an element's top border.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
borderTop?: ConditionalValue<UtilityValues["borderTop"] | CssVars | AnyString>
 /**
   * The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
borderTopColor?: ConditionalValue<UtilityValues["borderTopColor"] | CssVars | AnyString>
 /**
   * The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
borderBottom?: ConditionalValue<UtilityValues["borderBottom"] | CssVars | AnyString>
 /**
   * The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
borderBottomColor?: ConditionalValue<UtilityValues["borderBottomColor"] | CssVars | AnyString>
 /**
   * The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
borderBlockEnd?: ConditionalValue<UtilityValues["borderBlockEnd"] | CssVars | AnyString>
 /**
   * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
borderBlockEndColor?: ConditionalValue<UtilityValues["borderBlockEndColor"] | CssVars | AnyString>
 /**
   * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
borderBlockStart?: ConditionalValue<UtilityValues["borderBlockStart"] | CssVars | AnyString>
 /**
   * The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
borderBlockStartColor?: ConditionalValue<UtilityValues["borderBlockStartColor"] | CssVars | AnyString>
 /**
   * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   *
   * **Syntax**: `<alpha-value>`
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **2**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
opacity?: ConditionalValue<string | number | AnyString>
 /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
   *
   * **Syntax**: `none | <shadow>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  |  **4**  | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
boxShadow?: ConditionalValue<UtilityValues["boxShadow"] | CssVars | AnyString>
 boxShadowColor?: ConditionalValue<UtilityValues["boxShadowColor"] | CssVars | AnyString>
 /**
   * The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
   *
   * **Syntax**: `<blend-mode> | plus-lighter`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **41** | **32**  | **8**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
mixBlendMode?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   * **Syntax**: `none | <filter-function-list>`
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  | IE  |
   * | :------: | :-----: | :-----: | :----: | :-: |
   * |  **53**  | **35**  | **9.1** | **12** | No  |
   * | 18 _-x-_ |         | 6 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
filter?: ConditionalValue<UtilityValues["filter"] | CssVars | AnyString>
 brightness?: ConditionalValue<string | number | AnyString>
 contrast?: ConditionalValue<string | number | AnyString>
 grayscale?: ConditionalValue<string | number | AnyString>
 hueRotate?: ConditionalValue<string | number | AnyString>
 invert?: ConditionalValue<string | number | AnyString>
 saturate?: ConditionalValue<string | number | AnyString>
 sepia?: ConditionalValue<string | number | AnyString>
 dropShadow?: ConditionalValue<string | number | AnyString>
 blur?: ConditionalValue<UtilityValues["blur"] | CssVars | AnyString>
 /**
   * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
   *
   * **Syntax**: `none | <filter-function-list>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  | IE  |
   * | :----: | :-----: | :---------: | :----: | :-: |
   * | **76** | **103** | **9** _-x-_ | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
backdropFilter?: ConditionalValue<UtilityValues["backdropFilter"] | CssVars | AnyString>
 backdropBlur?: ConditionalValue<UtilityValues["backdropBlur"] | CssVars | AnyString>
 backdropBrightness?: ConditionalValue<string | number | AnyString>
 backdropContrast?: ConditionalValue<string | number | AnyString>
 backdropGrayscale?: ConditionalValue<string | number | AnyString>
 backdropHueRotate?: ConditionalValue<string | number | AnyString>
 backdropInvert?: ConditionalValue<string | number | AnyString>
 backdropOpacity?: ConditionalValue<string | number | AnyString>
 backdropSaturate?: ConditionalValue<string | number | AnyString>
 backdropSepia?: ConditionalValue<string | number | AnyString>
 /**
   * The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.
   *
   * **Syntax**: `collapse | separate`
   *
   * **Initial value**: `separate`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
borderCollapse?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`border-spacing`** CSS property sets the distance between the borders of adjacent cells in a `<table>`. This property applies only when `border-collapse` is `separate`.
   *
   * **Syntax**: `<length> <length>?`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
borderSpacing?: ConditionalValue<UtilityValues["borderSpacing"] | CssVars | AnyString>
 borderSpacingX?: ConditionalValue<UtilityValues["borderSpacingX"] | CssVars | AnyString>
 borderSpacingY?: ConditionalValue<UtilityValues["borderSpacingY"] | CssVars | AnyString>
 /**
   * The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.
   *
   * **Syntax**: `auto | fixed`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **14** |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
tableLayout?: ConditionalValue<string | number | AnyString>
 /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
transitionTimingFunction?: ConditionalValue<UtilityValues["transitionTimingFunction"] | CssVars | AnyString>
 /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **26**  | **16**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
transitionDelay?: ConditionalValue<UtilityValues["transitionDelay"] | CssVars | AnyString>
 /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
transitionDuration?: ConditionalValue<UtilityValues["transitionDuration"] | CssVars | AnyString>
 /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
transitionProperty?: ConditionalValue<string | number | AnyString>
 /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * **Syntax**: `<single-transition>#`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
transition?: ConditionalValue<UtilityValues["transition"] | CssVars | AnyString>
 /**
   * The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * **Syntax**: `<single-animation>#`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
animation?: ConditionalValue<UtilityValues["animation"] | CssVars | AnyString>
 /**
   * The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules that describe the animation to apply to an element. Multiple `@keyframe` at-rules are specified as a comma-separated list of names. If the specified name does not match any `@keyframe` at-rule, no properties are animated.
   *
   * **Syntax**: `[ none | <keyframes-name> ]#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
animationName?: ConditionalValue<UtilityValues["animationName"] | CssVars | AnyString>
 /**
   * The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
animationTimingFunction?: ConditionalValue<UtilityValues["animationTimingFunction"] | CssVars | AnyString>
 /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
animationDuration?: ConditionalValue<UtilityValues["animationDuration"] | CssVars | AnyString>
 /**
   * The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
animationDelay?: ConditionalValue<UtilityValues["animationDelay"] | CssVars | AnyString>
 /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   * **Syntax**: `<single-animation-play-state>#`
   *
   * **Initial value**: `running`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
animationPlayState?: ConditionalValue<string | number | AnyString>
 /**
   * The **`animation-composition`** CSS property specifies the composite operation to use when multiple animations affect the same property simultaneously.
   *
   * **Syntax**: `<single-animation-composition>#`
   *
   * **Initial value**: `replace`
   *
   * | Chrome  | Firefox | Safari | Edge | IE  |
   * | :-----: | :-----: | :----: | :--: | :-: |
   * | **112** | **115** | **16** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-composition
   */
animationComposition?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * **Syntax**: `<single-animation-fill-mode>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
animationFillMode?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
   *
   * **Syntax**: `<single-animation-direction>#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
animationDirection?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.
   *
   * **Syntax**: `<single-animation-iteration-count>#`
   *
   * **Initial value**: `1`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
animationIterationCount?: ConditionalValue<string | number | AnyString>
 /**
   * The **`animation-range`** CSS shorthand property is used to set the start and end of an animation's attachment range along its timeline, i.e. where along the timeline an animation will start and end.
   *
   * **Syntax**: `[ <'animation-range-start'> <'animation-range-end'>? ]#`
   *
   * | Chrome  | Firefox | Safari | Edge | IE  |
   * | :-----: | :-----: | :----: | :--: | :-: |
   * | **115** |   No    |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-range
   */
animationRange?: ConditionalValue<string | number | AnyString>
 animationState?: ConditionalValue<string | number | AnyString>
 /**
   * The **`animation-range-start`** CSS property is used to set the start of an animation's attachment range along its timeline, i.e. where along the timeline an animation will start.
   *
   * **Syntax**: `[ normal | <length-percentage> | <timeline-range-name> <length-percentage>? ]#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari | Edge | IE  |
   * | :-----: | :-----: | :----: | :--: | :-: |
   * | **115** |   No    |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-range-start
   */
animationRangeStart?: ConditionalValue<string | number | AnyString>
 /**
   * The **`animation-range-end`** CSS property is used to set the end of an animation's attachment range along its timeline, i.e. where along the timeline an animation will end.
   *
   * **Syntax**: `[ normal | <length-percentage> | <timeline-range-name> <length-percentage>? ]#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari | Edge | IE  |
   * | :-----: | :-----: | :----: | :--: | :-: |
   * | **115** |   No    |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-range-end
   */
animationRangeEnd?: ConditionalValue<string | number | AnyString>
 /**
   * The **`animation-timeline`** CSS property specifies the timeline that is used to control the progress of an animation.
   *
   * **Syntax**: `<single-animation-timeline>#`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari | Edge | IE  |
   * | :-----: | :-----: | :----: | :--: | :-: |
   * | **115** |   n/a   |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timeline
   */
animationTimeline?: ConditionalValue<string | number | AnyString>
 /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE    |
   * | :-----: | :-----: | :-----: | :----: | :-----: |
   * | **36**  | **16**  |  **9**  | **12** | **10**  |
   * | 1 _-x-_ |         | 2 _-x-_ |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
transformOrigin?: ConditionalValue<string | number | AnyString>
 /**
   * The **`transform-box`** CSS property defines the layout box to which the `transform`, individual transform properties `translate`,`scale`, and `rotate`, and `transform-origin` properties relate.
   *
   * **Syntax**: `content-box | border-box | fill-box | stroke-box | view-box`
   *
   * **Initial value**: `view-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **64** | **55**  | **11** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
transformBox?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   *
   * **Syntax**: `flat | preserve-3d`
   *
   * **Initial value**: `flat`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  | IE  |
   * | :------: | :-----: | :-----: | :----: | :-: |
   * |  **36**  | **16**  |  **9**  | **12** | No  |
   * | 12 _-x-_ |         | 4 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
transformStyle?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * **Syntax**: `none | <transform-list>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE    |
   * | :-----: | :-----: | :-------: | :----: | :-----: |
   * | **36**  | **16**  |   **9**   | **12** | **10**  |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
transform?: ConditionalValue<string | number | AnyString>
 /**
   * The **`rotate`** CSS property allows you to specify rotation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.
   *
   * **Syntax**: `none | <angle> | [ x | y | z | <number>{3} ] && <angle>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  | Edge | IE  |
   * | :-----: | :-----: | :------: | :--: | :-: |
   * | **104** | **72**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
rotate?: ConditionalValue<UtilityValues["rotate"] | CssVars | AnyString>
 rotateX?: ConditionalValue<UtilityValues["rotateX"] | CssVars | AnyString>
 rotateY?: ConditionalValue<UtilityValues["rotateY"] | CssVars | AnyString>
 rotateZ?: ConditionalValue<UtilityValues["rotateZ"] | CssVars | AnyString>
 /**
   * The **`scale`** CSS property allows you to specify scale transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Syntax**: `none | <number>{1,3}`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  | Edge | IE  |
   * | :-----: | :-----: | :------: | :--: | :-: |
   * | **104** | **72**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
scale?: ConditionalValue<UtilityValues["scale"] | CssVars | AnyString>
 scaleX?: ConditionalValue<string | number | AnyString>
 scaleY?: ConditionalValue<string | number | AnyString>
 /**
   * The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Syntax**: `none | <length-percentage> [ <length-percentage> <length>? ]?`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  | Edge | IE  |
   * | :-----: | :-----: | :------: | :--: | :-: |
   * | **104** | **72**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
translate?: ConditionalValue<UtilityValues["translate"] | CssVars | AnyString>
 translateX?: ConditionalValue<UtilityValues["translateX"] | CssVars | AnyString>
 translateY?: ConditionalValue<UtilityValues["translateY"] | CssVars | AnyString>
 translateZ?: ConditionalValue<UtilityValues["translateZ"] | CssVars | AnyString>
 /**
   * The **`accent-color`** CSS property sets the accent color for user-interface controls generated by some elements.
   *
   * **Syntax**: `auto | <color>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **93** | **92**  | **15.4** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/accent-color
   */
accentColor?: ConditionalValue<UtilityValues["accentColor"] | CssVars | AnyString>
 /**
   * The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
   *
   * **Syntax**: `auto | <color>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **53**  | **11.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
caretColor?: ConditionalValue<UtilityValues["caretColor"] | CssVars | AnyString>
 /**
   * The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
   *
   * **Syntax**: `auto | smooth`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **61** | **36**  | **15.4** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
scrollBehavior?: ConditionalValue<CssVars | AnyString>
 scrollbar?: ConditionalValue<UtilityValues["scrollbar"] | CssVars | AnyString>
 /**
   * The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.
   *
   * **Syntax**: `auto | <color>{2}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari | Edge | IE  |
   * | :-----: | :-----: | :----: | :--: | :-: |
   * | **121** | **64**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-color
   */
scrollbarColor?: ConditionalValue<UtilityValues["scrollbarColor"] | CssVars | AnyString>
 /**
   * The **`scrollbar-gutter`** CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.
   *
   * **Syntax**: `auto | stable && both-edges?`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **94** | **97**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter
   */
scrollbarGutter?: ConditionalValue<UtilityValues["scrollbarGutter"] | CssVars | AnyString>
 /**
   * The **`scrollbar-width`** property allows the author to set the maximum thickness of an element's scrollbars when they are shown.
   *
   * **Syntax**: `auto | thin | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari | Edge | IE  |
   * | :-----: | :-----: | :----: | :--: | :-: |
   * | **121** | **64**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-width
   */
scrollbarWidth?: ConditionalValue<UtilityValues["scrollbarWidth"] | CssVars | AnyString>
 /**
   * The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.
   *
   * **Syntax**: `<length>{1,4}`
   *
   * | Chrome | Firefox |          Safari           | Edge | IE  |
   * | :----: | :-----: | :-----------------------: | :--: | :-: |
   * | **69** | **90**  |         **14.1**          | n/a  | No  |
   * |        |         | 11 _(scroll-snap-margin)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin
   */
scrollMargin?: ConditionalValue<UtilityValues["scrollMargin"] | CssVars | AnyString>
 /**
   * The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari             | Edge | IE  |
   * | :----: | :-----: | :----------------------------: | :--: | :-: |
   * | **69** | **68**  |            **14.1**            | n/a  | No  |
   * |        |         | 11 _(scroll-snap-margin-left)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left
   */
scrollMarginLeft?: ConditionalValue<UtilityValues["scrollMarginLeft"] | CssVars | AnyString>
 /**
   * The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari              | Edge | IE  |
   * | :----: | :-----: | :-----------------------------: | :--: | :-: |
   * | **69** | **68**  |            **14.1**             | n/a  | No  |
   * |        |         | 11 _(scroll-snap-margin-right)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right
   */
scrollMarginRight?: ConditionalValue<UtilityValues["scrollMarginRight"] | CssVars | AnyString>
 /**
   * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |            Safari             | Edge | IE  |
   * | :----: | :-----: | :---------------------------: | :--: | :-: |
   * | **69** | **68**  |           **14.1**            | n/a  | No  |
   * |        |         | 11 _(scroll-snap-margin-top)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
   */
scrollMarginTop?: ConditionalValue<UtilityValues["scrollMarginTop"] | CssVars | AnyString>
 /**
   * The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |              Safari              | Edge | IE  |
   * | :----: | :-----: | :------------------------------: | :--: | :-: |
   * | **69** | **68**  |             **14.1**             | n/a  | No  |
   * |        |         | 11 _(scroll-snap-margin-bottom)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom
   */
scrollMarginBottom?: ConditionalValue<UtilityValues["scrollMarginBottom"] | CssVars | AnyString>
 /**
   * The `scroll-margin-block` shorthand property sets the scroll margins of an element in the block dimension.
   *
   * **Syntax**: `<length>{1,2}`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block
   */
scrollMarginBlock?: ConditionalValue<UtilityValues["scrollMarginBlock"] | CssVars | AnyString>
 /**
   * The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end
   */
scrollMarginBlockEnd?: ConditionalValue<UtilityValues["scrollMarginBlockEnd"] | CssVars | AnyString>
 /**
   * The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start
   */
scrollMarginBlockStart?: ConditionalValue<UtilityValues["scrollMarginBlockStart"] | CssVars | AnyString>
 /**
   * The `scroll-margin-inline` shorthand property sets the scroll margins of an element in the inline dimension.
   *
   * **Syntax**: `<length>{1,2}`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline
   */
scrollMarginInline?: ConditionalValue<UtilityValues["scrollMarginInline"] | CssVars | AnyString>
 /**
   * The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end
   */
scrollMarginInlineEnd?: ConditionalValue<UtilityValues["scrollMarginInlineEnd"] | CssVars | AnyString>
 /**
   * The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start
   */
scrollMarginInlineStart?: ConditionalValue<UtilityValues["scrollMarginInlineStart"] | CssVars | AnyString>
 /**
   * The **`scroll-padding`** shorthand property sets scroll padding on all sides of an element at once, much like the `padding` property does for padding on an element.
   *
   * **Syntax**: `[ auto | <length-percentage> ]{1,4}`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **68**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding
   */
scrollPadding?: ConditionalValue<UtilityValues["scrollPadding"] | CssVars | AnyString>
 /**
   * The `scroll-padding-block` shorthand property sets the scroll padding of an element in the block dimension.
   *
   * **Syntax**: `[ auto | <length-percentage> ]{1,2}`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block
   */
scrollPaddingBlock?: ConditionalValue<UtilityValues["scrollPaddingBlock"] | CssVars | AnyString>
 /**
   * The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start
   */
scrollPaddingBlockStart?: ConditionalValue<UtilityValues["scrollPaddingBlockStart"] | CssVars | AnyString>
 /**
   * The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end
   */
scrollPaddingBlockEnd?: ConditionalValue<UtilityValues["scrollPaddingBlockEnd"] | CssVars | AnyString>
 /**
   * The `scroll-padding-inline` shorthand property sets the scroll padding of an element in the inline dimension.
   *
   * **Syntax**: `[ auto | <length-percentage> ]{1,2}`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline
   */
scrollPaddingInline?: ConditionalValue<UtilityValues["scrollPaddingInline"] | CssVars | AnyString>
 /**
   * The `scroll-padding-inline-end` property defines offsets for the end edge in the inline dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end
   */
scrollPaddingInlineEnd?: ConditionalValue<UtilityValues["scrollPaddingInlineEnd"] | CssVars | AnyString>
 /**
   * The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start
   */
scrollPaddingInlineStart?: ConditionalValue<UtilityValues["scrollPaddingInlineStart"] | CssVars | AnyString>
 /**
   * The `scroll-padding-left` property defines offsets for the left of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **68**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left
   */
scrollPaddingLeft?: ConditionalValue<UtilityValues["scrollPaddingLeft"] | CssVars | AnyString>
 /**
   * The `scroll-padding-right` property defines offsets for the right of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **68**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right
   */
scrollPaddingRight?: ConditionalValue<UtilityValues["scrollPaddingRight"] | CssVars | AnyString>
 /**
   * The **`scroll-padding-top`** property defines offsets for the top of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **68**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top
   */
scrollPaddingTop?: ConditionalValue<UtilityValues["scrollPaddingTop"] | CssVars | AnyString>
 /**
   * The `scroll-padding-bottom` property defines offsets for the bottom of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **68**  | **14.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom
   */
scrollPaddingBottom?: ConditionalValue<UtilityValues["scrollPaddingBottom"] | CssVars | AnyString>
 /**
   * The `scroll-snap-align` property specifies the box's snap position as an alignment of its snap area (as the alignment subject) within its snap container's snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
   *
   * **Syntax**: `[ none | start | end | center ]{1,2}`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align
   */
scrollSnapAlign?: ConditionalValue<string | number | AnyString>
 /**
   * The **`scroll-snap-stop`** CSS property defines whether or not the scroll container is allowed to "pass over" possible snap positions.
   *
   * **Syntax**: `normal | always`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **75** | **103** | **15** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop
   */
scrollSnapStop?: ConditionalValue<string | number | AnyString>
 /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   *
   * **Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |      IE      |
   * | :----: | :-----: | :-----: | :----: | :----------: |
   * | **69** |  39-68  | **11**  | **79** | **10** _-x-_ |
   * |        |         | 9 _-x-_ |        |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
scrollSnapType?: ConditionalValue<UtilityValues["scrollSnapType"] | CssVars | AnyString>
 scrollSnapStrictness?: ConditionalValue<UtilityValues["scrollSnapStrictness"] | CssVars | AnyString>
 /**
   * The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.
   *
   * **Syntax**: `<length>{1,4}`
   *
   * | Chrome | Firefox |          Safari           | Edge | IE  |
   * | :----: | :-----: | :-----------------------: | :--: | :-: |
   * | **69** |  68-90  |         **14.1**          | n/a  | No  |
   * |        |         | 11 _(scroll-snap-margin)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin
   */
scrollSnapMargin?: ConditionalValue<UtilityValues["scrollSnapMargin"] | CssVars | AnyString>
 /**
   * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |            Safari             | Edge | IE  |
   * | :----: | :-----: | :---------------------------: | :--: | :-: |
   * | **69** | **68**  |           **14.1**            | n/a  | No  |
   * |        |         | 11 _(scroll-snap-margin-top)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
   */
scrollSnapMarginTop?: ConditionalValue<UtilityValues["scrollSnapMarginTop"] | CssVars | AnyString>
 /**
   * The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |              Safari              | Edge | IE  |
   * | :----: | :-----: | :------------------------------: | :--: | :-: |
   * | **69** | **68**  |             **14.1**             | n/a  | No  |
   * |        |         | 11 _(scroll-snap-margin-bottom)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom
   */
scrollSnapMarginBottom?: ConditionalValue<UtilityValues["scrollSnapMarginBottom"] | CssVars | AnyString>
 /**
   * The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari             | Edge | IE  |
   * | :----: | :-----: | :----------------------------: | :--: | :-: |
   * | **69** | **68**  |            **14.1**            | n/a  | No  |
   * |        |         | 11 _(scroll-snap-margin-left)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left
   */
scrollSnapMarginLeft?: ConditionalValue<UtilityValues["scrollSnapMarginLeft"] | CssVars | AnyString>
 /**
   * The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari              | Edge | IE  |
   * | :----: | :-----: | :-----------------------------: | :--: | :-: |
   * | **69** | **68**  |            **14.1**             | n/a  | No  |
   * |        |         | 11 _(scroll-snap-margin-right)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right
   */
scrollSnapMarginRight?: ConditionalValue<UtilityValues["scrollSnapMarginRight"] | CssVars | AnyString>
 scrollSnapCoordinate?: ConditionalValue<string | number | AnyString>
 scrollSnapDestination?: ConditionalValue<string | number | AnyString>
 scrollSnapPointsX?: ConditionalValue<string | number | AnyString>
 scrollSnapPointsY?: ConditionalValue<string | number | AnyString>
 scrollSnapTypeX?: ConditionalValue<string | number | AnyString>
 scrollSnapTypeY?: ConditionalValue<string | number | AnyString>
 /**
   * The **`scroll-timeline`** CSS shorthand property defines a name that can be used to identify the source element of a scroll timeline, along with the scrollbar axis that should provide the timeline.
   *
   * **Syntax**: `[ <'scroll-timeline-name'> <'scroll-timeline-axis'>? ]#`
   *
   * | Chrome  | Firefox | Safari | Edge | IE  |
   * | :-----: | :-----: | :----: | :--: | :-: |
   * | **115** |   n/a   |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-timeline
   */
scrollTimeline?: ConditionalValue<string | number | AnyString>
 /**
   * The **`scroll-timeline-axis`** CSS property can be used to specify the scrollbar that will be used to provide the timeline for a scroll-timeline animation.
   *
   * **Syntax**: `[ block | inline | x | y ]#`
   *
   * **Initial value**: `block`
   *
   * | Chrome  | Firefox | Safari | Edge | IE  |
   * | :-----: | :-----: | :----: | :--: | :-: |
   * | **115** |   n/a   |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-timeline-axis
   */
scrollTimelineAxis?: ConditionalValue<string | number | AnyString>
 /**
   * The **`scroll-timeline-name`** CSS property defines a name that can be used to identify an element as the source of a scroll timeline for an animation.
   *
   * **Syntax**: `none | <dashed-ident>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari | Edge | IE  |
   * | :-----: | :-----: | :----: | :--: | :-: |
   * | **115** |   n/a   |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-timeline-name
   */
scrollTimelineName?: ConditionalValue<string | number | AnyString>
 /**
   * The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
   *
   * **Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |    IE    |
   * | :----: | :-----: | :----: | :----: | :------: |
   * | **36** | **52**  | **13** | **12** |  **11**  |
   * |        |         |        |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
touchAction?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.
   *
   * **Syntax**: `auto | text | none | contain | all`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |   Safari    |   Edge   |      IE      |
   * | :-----: | :-----: | :---------: | :------: | :----------: |
   * | **54**  | **69**  | **3** _-x-_ |  **79**  | **10** _-x-_ |
   * | 1 _-x-_ | 1 _-x-_ |             | 12 _-x-_ |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
userSelect?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`overflow-wrap`** CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   * **Syntax**: `normal | break-word | anywhere`
   *
   * **Initial value**: `normal`
   *
   * |     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           |
   * | :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: |
   * |     **23**      |      **49**       |      **7**      |      **18**      | **5.5** _(word-wrap)_ |
   * | 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
overflowWrap?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
overflowX?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
overflowY?: ConditionalValue<CssVars | AnyString>
 /**
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **56** | **66**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-anchor
   */
overflowAnchor?: ConditionalValue<string | number | AnyString>
 /**
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **69**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-block
   */
overflowBlock?: ConditionalValue<CssVars | AnyString>
 /**
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **69**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-inline
   */
overflowInline?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.
   *
   * **Syntax**: `padding-box | content-box`
   *
   * **Initial value**: `padding-box`
   */
overflowClipBox?: ConditionalValue<string | number | AnyString>
 /**
   * **Syntax**: `<visual-box> || <length [0,∞]>`
   *
   * **Initial value**: `0px`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **90** | **102** |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin
   */
overflowClipMargin?: ConditionalValue<string | number | AnyString>
 /**
   * The **`overscroll-behavior-block`** CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **77** | **73**  | **16** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block
   */
overscrollBehaviorBlock?: ConditionalValue<string | number | AnyString>
 /**
   * The **`overscroll-behavior-inline`** CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **77** | **73**  | **16** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline
   */
overscrollBehaviorInline?: ConditionalValue<string | number | AnyString>
 fill?: ConditionalValue<UtilityValues["fill"] | CssVars | AnyString>
 stroke?: ConditionalValue<UtilityValues["stroke"] | CssVars | AnyString>
 strokeWidth?: ConditionalValue<string | number | AnyString>
 strokeDasharray?: ConditionalValue<string | number | AnyString>
 strokeDashoffset?: ConditionalValue<string | number | AnyString>
 strokeLinecap?: ConditionalValue<string | number | AnyString>
 strokeLinejoin?: ConditionalValue<string | number | AnyString>
 strokeMiterlimit?: ConditionalValue<string | number | AnyString>
 strokeOpacity?: ConditionalValue<string | number | AnyString>
 srOnly?: ConditionalValue<UtilityValues["srOnly"] | CssVars | AnyString>
 debug?: ConditionalValue<UtilityValues["debug"] | CssVars | AnyString>
 /**
   * The **`appearance`** CSS property is used to control native appearance of UI controls, that are based on operating system's theme.
   *
   * **Syntax**: `none | auto | textfield | menulist-button | <compat-auto>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |   Edge   | IE  |
   * | :-----: | :-----: | :------: | :------: | :-: |
   * | **84**  | **80**  | **15.4** |  **84**  | No  |
   * | 1 _-x-_ | 1 _-x-_ | 3 _-x-_  | 12 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
appearance?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   *
   * **Syntax**: `visible | hidden`
   *
   * **Initial value**: `visible`
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **36**  | **16**  | **15.4**  | **12** | **10** |
   * | 12 _-x-_ |         | 5.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
backfaceVisibility?: ConditionalValue<CssVars | AnyString>
 /**
   * The **`clip-path`** CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
   *
   * **Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **55**  | **3.5** | **9.1** | **79** | **10** |
   * | 23 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
clipPath?: ConditionalValue<string | number | AnyString>
 /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Syntax**: `none | manual | auto`
   *
   * **Initial value**: `manual`
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |      IE      |
   * | :------: | :-----: | :-------: | :----: | :----------: |
   * |  **55**  | **43**  |  **17**   | **79** | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ | 5.1 _-x-_ |        |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
hyphens?: ConditionalValue<string | number | AnyString>
 /**
   * The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.
   *
   * **Syntax**: `<mask-layer>#`
   *
   * | Chrome | Firefox |  Safari   | Edge  | IE  |
   * | :----: | :-----: | :-------: | :---: | :-: |
   * | **1**  | **53**  | **15.4**  | 12-79 | No  |
   * |        |         | 3.1 _-x-_ |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
mask?: ConditionalValue<string | number | AnyString>
 /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element. By default this means the alpha channel of the mask image will be multiplied with the alpha channel of the element. This can be controlled with the `mask-mode` property.
   *
   * **Syntax**: `<mask-reference>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  | Edge  | IE  |
   * | :-----: | :-----: | :------: | :---: | :-: |
   * | **120** | **53**  | **15.4** | 16-79 | No  |
   * | 1 _-x-_ |         | 4 _-x-_  |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
maskImage?: ConditionalValue<string | number | AnyString>
 /**
   * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |  Safari  | Edge  | IE  |
   * | :-----: | :-----: | :------: | :---: | :-: |
   * | **120** | **53**  | **15.4** | 18-79 | No  |
   * | 4 _-x-_ |         | 4 _-x-_  |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
maskSize?: ConditionalValue<string | number | AnyString>
 /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * **Syntax**: `none | auto | <percentage>`
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **54** |   No    |   No   | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
textSizeAdjust?: ConditionalValue<string | number | AnyString>
 /**
   * The **container** shorthand CSS property establishes the element as a query container and specifies the name or name for the containment context used in a container query.
   *
   * **Syntax**: `<'container-name'> [ / <'container-type'> ]?`
   *
   * | Chrome  | Firefox | Safari | Edge | IE  |
   * | :-----: | :-----: | :----: | :--: | :-: |
   * | **105** | **110** | **16** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/container
   */
container?: ConditionalValue<string | number | AnyString>
 /**
   * The **container-name** CSS property specifies a list of query container names used by the @container at-rule in a container query. A container query will apply styles to elements based on the size of the nearest ancestor with a containment context. When a containment context is given a name, it can be specifically targeted using the `@container` at-rule instead of the nearest ancestor with containment.
   *
   * **Syntax**: `none | <custom-ident>+`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari | Edge | IE  |
   * | :-----: | :-----: | :----: | :--: | :-: |
   * | **105** | **110** | **16** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/container-name
   */
containerName?: ConditionalValue<UtilityValues["containerName"] | CssVars | AnyString>
 /**
   * The **container-type** CSS property is used to define the type of containment used in a container query.
   *
   * **Syntax**: `normal | size | inline-size`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari | Edge | IE  |
   * | :-----: | :-----: | :----: | :--: | :-: |
   * | **105** | **110** | **16** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/container-type
   */
containerType?: ConditionalValue<string | number | AnyString>
 colorPalette?: ConditionalValue<UtilityValues["colorPalette"] | CssVars | AnyString>
 textStyle?: ConditionalValue<UtilityValues["textStyle"] | CssVars | AnyString>
}
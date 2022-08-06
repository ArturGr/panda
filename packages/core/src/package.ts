import type { PackageJson } from 'pkg-types'
import path from 'path'
import { promises as fs } from 'fs'

type PackageOptions = {
  name: string
  outDir: string
  exports: string[]
}

export function setupPackage(options: PackageOptions) {
  const { name, exports, outDir } = options

  const exportEntries = exports.map((key) => [
    `./${key}`,
    {
      import: './' + path.join(outDir, key, 'index.mjs'),
    },
  ])

  const typeVersionEntries = exports.map((key) => [key, ['./' + path.join(outDir, key)]])

  const pkg: PackageJson = {
    name,
    description: 'This package is auto-generated by Css Panda',
    exports: Object.fromEntries(exportEntries),
    typeVersions: {
      '*': Object.fromEntries(typeVersionEntries),
    },
  }

  return pkg
}

export async function writePackage(filePath: string, options: PackageOptions) {
  const pkg = setupPackage(options)
  return fs.writeFile(filePath, JSON.stringify(pkg, null, 2))
}

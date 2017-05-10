import * as path from 'path'
import { readFileSync } from 'fs'

const cssImportRegex = /(require\(|import \w* ?(from )?)['"]([^'"\)]+\.css)['"]\)?/g

const findCssImports = src => {
  if (!src) return []

  const matches = src.match(cssImportRegex)
  return matches ? matches : []
}

const stripImport = cssImport => cssImport.replace(cssImportRegex, '$3')

const findSelectors = src => {
  if (!src) return []

  const cssImportRegex = /\.(.+?)\s+[{]/g
  const matches = src.match(cssImportRegex)
  return matches ? matches.map(m => m.replace(cssImportRegex, '$1')) : []
}

const objectize = keys =>
  keys.reduce((acc, key) => {
    acc[key] = key
    return acc
  }, {})

function replaceCssImportsWithModules(src, jsModulePath) {
  return findCssImports(src)
    .map(cssImport => {
      const cssFilename = stripImport(cssImport)
      const fullCssFilename = path.normalize(
        path.dirname(jsModulePath) + '/' + cssFilename
      )
      const cssSrc = readFileSync(fullCssFilename, 'utf8')
      const cssModule = objectize(findSelectors(cssSrc))
      return {
        cssImport,
        cssModule
      }
    })
    .reduce((acc, css) => {
      return acc.replace(css.cssImport, JSON.stringify(css.cssModule))
    }, src)
}

module.exports = function parseClasses(filename) {
  const src = readFileSync(filename, 'utf8')
  return objectize(findSelectors(src))
}

module.exports = {
  replaceCssImportsWithModules,
  findCssImports,
  findSelectors,
  objectize,
  stripImport
}

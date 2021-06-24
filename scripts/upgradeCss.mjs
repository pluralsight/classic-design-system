// prereq
// yarn add @kristoferbaxter/estree-walker acorn magic-string -D -W
import { execSync } from 'child_process'
import * as fs from 'fs'
import prettier from 'prettier'
import { walk } from '@kristoferbaxter/estree-walker'
import * as acorn from 'acorn'
import MagicString from 'magic-string'

async function main() {
  await refactorCssInJs()
  runBuild()
  copyBuiltCssToSrc()
  adjustPackageJson()
  copyPostcssConfig()
  rmOldCssJs()
  refactorRootExports()
}

async function refactorRootExports() {
  const css = readFile('src/index.ts')

  const ast = acorn.parse(css, ACORN_OPTS)
  const magic = new MagicString(css)

  walk(ast, {
    enter(node, parent, prop, index) {
      if (node.type === 'ExportNamedDeclaration') {
        if (/css/.test(node.source.value)) {
          const [start, end] = node.range
          magic.remove(start, end)
        }
      }
    }
  })

  writeFile('src/index.ts', magic.toString())
}

function rmOldCssJs() {
  fs.rmSync('src/css/index.ts')
}

function copyPostcssConfig() {
  fs.copyFileSync('../avatar/postcss.config.js', 'postcss.config.js')
}

function adjustPackageJson() {
  const pkg = JSON.parse(readFile('package.json'))

  pkg.scripts['build:css'] = 'postcss-compile'
  pkg.style = 'dist/esm/css/index.css'

  if (pkg.sideEffects.toString() === 'false') {
    pkg.sideEffects = ['**/*.css']
  } else {
    console.log('[warn] package#sideEffects unchanged')
  }

  const json = prettier.format(JSON.stringify(pkg), {
    parser: 'json-stringify'
  })
  writeFile('package.json', json)
}

function runBuild() {
  exec('yarn build')
}

function copyBuiltCssToSrc() {
  const css = readFile('dist/index.css')
  const formatted = prettier.format(css, {
    parser: 'css'
  })
  if (/object/.test(formatted)) {
    console.log('[warn] object pattern detected in src/css/index.css')
  }
  writeFile('src/css/index.css', formatted)
}

async function refactorCssInJs() {
  const css = readFile('src/css/index.ts')

  const ast = acorn.parse(css, ACORN_OPTS)
  const magic = new MagicString(css)

  let coreNamedExports
  let lastImportDeclaration
  walk(ast, {
    enter(node, parent, prop, index) {
      if (node.type === 'ImportDeclaration') {
        if (node.source.value === '@pluralsight/ps-design-system-core') {
          coreNamedExports = node.specifiers
            .map(spec => spec.imported.name)
            .join(', ')

          const start = node.specifiers[0].start
          const end = node.specifiers[node.specifiers.length - 1].end
          magic.overwrite(start, end, 'refactor')
        }

        lastImportDeclaration = node
      }
    }
  })

  magic.appendRight(
    lastImportDeclaration.end,
    `\n\nconst { ${coreNamedExports} } = refactor.cssVars`
  )

  writeFile('src/css/index.ts', magic.toString())
}

function readFile(filePath) {
  const contents = fs.readFileSync(filePath, 'utf8')
  return contents
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8')
}

function exec(cmd) {
  execSync(cmd, { stdio: 'inherit', cwd: process.cwd() })
}

const ACORN_OPTS = {
  ecmaVersion: 2020,
  sourceType: 'module',
  preserveParens: false,
  ranges: true
}

main()

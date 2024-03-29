/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

const { promises: fs } = require('fs')
const fg = require('fast-glob')
const path = require('path')
const { optimize, extendDefaultPlugins } = require('svgo')
const { getComponentTemplate } = require('./componentTemplate.js')
const svgoOpts = { plugins: extendDefaultPlugins([{ name: 'removeXMLNS' }]) }

exports.generateComponents = async ({
  src = 'src',
  dest = 'dist',
  ext = 'dist.tsx',
  core
}) => {
  try {
    await fs.mkdir(dest, { recursive: true })

    const files = await fg([`${src}/*.svg`])

    const names = await Promise.all(
      files.map(async file => {
        const name = parseComponentName(file)
        const rawName = name.split('_')[0]
        const importName = `${rawName.split('.')[0]}Icon`
        const destPath = `${dest}/${name}.${ext}`
        const svgString = await fs.readFile(file, 'utf8')
        const { data } = optimize(svgString, svgoOpts)
        const svgWithReactAttrs = camelCaseAttributes(data)
        const fileContents = generateComponent(name, svgWithReactAttrs, core)

        await fs.writeFile(destPath, fileContents)

        return { importName, path: name }
      })
    )

    const manifest = generateManifest(names, ext)
    await fs.writeFile(`${dest}/index.ts`, manifest)
  } catch (err) {
    console.error(err)
  }
}

const generateComponent = (componentName, svgString, core) => {
  const baseImport = core ? '..' : '@pluralsight/ps-design-system-icon'
  return getComponentTemplate(baseImport, componentName, svgString)
}

const generateManifest = fileNames => {
  return [...fileNames]
    .sort((a, b) => a.importName.localeCompare(b.importName))
    .map(name => `export { ${name.importName} } from './${name.path}.dist'`)
    .join('\n')
    .concat('\n')
}

const camelCaseAttributes = str =>
  str.replace(
    /[^aria|data]-([A-Za-z])/g,
    match => `${match[0]}${match[2].toUpperCase()}`
  )

const dashToPascalCase = str => {
  const camelStr = str.replace(
    /-([A-Za-z])/g,
    match => `${match[1].toUpperCase()}`
  )
  return camelStr.charAt(0).toUpperCase() + camelStr.slice(1)
}

const parseComponentName = file => {
  const fileName = path.basename(file, '.svg').split('.')[0]
  return dashToPascalCase(fileName)
}

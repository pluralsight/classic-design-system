import { promises as fs } from 'fs'
import fg from 'fast-glob'
import path from 'path'
import SVGO from 'svgo'

const svgo = new SVGO({ plugins: [{ removeXMLNS: true }] })

export const generateComponents = async ({
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
        const destPath = `${dest}/${name}.${ext}`

        const svgString = await fs.readFile(file, 'utf8')
        const { data } = await svgo.optimize(svgString)

        const svgWithReactAttrs = camelCaseAttributes(data)
        const fileContents = generateComponent(name, svgWithReactAttrs, core)

        await fs.writeFile(destPath, fileContents)

        return name
      })
    )

    const manifest = generateManifest(names, ext)
    await fs.writeFile(`${dest}/index.ts`, manifest)
  } catch (err) {
    console.error(err)
  }
}

const generateComponent = (componentName, svgString, core) => {
  const regex = />/
  const baseImport = core ? '../index.js' : '@pluralsight/ps-design-system-icon'

  return `
import React, { forwardRef } from 'react'

import Icon, { IconComponent } from '${baseImport}'

const ${componentName} = forwardRef((props, ref) => {
  const { 'aria-label': ariaLabel, ...rest } = props
  return (
    <Icon {...rest} ref={ref}>
      ${svgString.replace(
        regex,
        "role='img' {...(ariaLabel && { 'aria-label': ariaLabel })}>"
      )}
    </Icon>
  )
}) as IconComponent

${componentName}.displayName = "${componentName}"

${componentName}.colors = Icon.colors
${componentName}.sizes = Icon.sizes

export { ${componentName}  }
`
}

const generateManifest = (fileNames, ext = 'dist.tsx') => {
  return [...fileNames]
    .sort((a, b) => a.localeCompare(b))
    .map(n => `export { ${n} } from './${n}.${ext.split('.').slice(0, -1)}.js'`)
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

const parseComponentName = (file, suffix = 'Icon') => {
  const fileName = path.basename(file, '.svg').split('.')[0]

  return dashToPascalCase(fileName) + suffix
}

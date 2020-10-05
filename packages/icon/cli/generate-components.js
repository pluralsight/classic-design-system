const { promises: fs } = require('fs')
const fg = require('fast-glob')
const path = require('path')
const SVGO = require('svgo')

const svgo = new SVGO({ plugins: [{ removeXMLNS: true }] })

const regex = />/
const componentTemplate = (svg, componentName, core) => `
import React, { HTMLAttributes } from 'react'
import Icon from ${core ? "'../'" : "'@pluralsight/ps-design-system-icon'"}
import { RefForwardingComponent } from '@pluralsight/ps-design-system-util'


interface ${componentName}Statics {
  sizes: typeof Icon.sizes
  colors: typeof Icon.colors
}

interface ${componentName}Props extends HTMLAttributes<HTMLDivElement> {
  size?: string
}

interface ${componentName}Component
  extends RefForwardingComponent<${componentName}Props, HTMLDivElement, ${componentName}Statics> {}

export const ${componentName} = React.forwardRef<HTMLDivElement, ${componentName}Props>(
  ({ 'aria-label': ariaLabel, ...props }, ref) => { 
    return (
      <Icon {...props} ref={ref}>
        ${svg.replace(
          regex,
          "role='img' {...(ariaLabel && { 'aria-label': ariaLabel })}>"
        )}
      </Icon>
    )
  }
) as ${componentName}Component

${componentName}.displayName = '${componentName}'
${componentName}.colors = Icon.colors
${componentName}.sizes = Icon.sizes
`

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

const exportTemplate = filePaths =>
  [...filePaths]
    .sort((a, b) => a.localeCompare(b))
    .map(
      filePath =>
        `export { ${filePath.split('.')[0]} } from './${path.basename(
          filePath,
          '.tsx'
        )}'`
    )
    .join('\n')
    .concat('\n')

exports.generateComponents = async ({ src, dest, ext = 'dist.tsx', core }) => {
  try {
    await fs.mkdir(dest, { recursive: true })
    const files = await fg([`${src}/*.svg`])
    const filePaths = await Promise.all(
      files.map(async file => {
        const componentName = `${dashToPascalCase(
          path.basename(file, '.svg').split('.')[0]
        )}Icon`
        const svg = await fs.readFile(file, 'utf8')
        const { data } = await svgo.optimize(svg)
        const component = componentTemplate(
          camelCaseAttributes(data),
          componentName,
          core
        )
        const filePath = `${componentName}.${ext}`
        await fs.writeFile(`${dest}/${filePath}`, component)
        return filePath
      })
    )
    await fs.writeFile(`${dest}/index.tsx`, exportTemplate(filePaths))
  } catch (err) {
    console.error(err)
  }
}

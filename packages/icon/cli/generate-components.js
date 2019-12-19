const { promises: fs } = require('fs')
const fg = require('fast-glob')
const path = require('path')
const SVGO = require('svgo')

const svgo = new SVGO({ plugins: [{ removeXMLNS: true }] })

const regex = />/
const componentTemplate = (svg, componentName, core) => `
import React from 'react'
import PropTypes from 'prop-types'
import Icon from ${
  core ? "'../index.js'" : "'@pluralsight/ps-design-system-icon'"
}
export const ${componentName} =  React.forwardRef(function ${componentName}({'aria-label': ariaLabel, ...props}, ref){ return (
  <Icon {...props} ref={ref}>
    ${svg.replace(
      regex,
      "role='img' {...(ariaLabel && { 'aria-label': ariaLabel })}>"
    )}
  </Icon>
)})
${componentName}.displayName = '${componentName}'
${componentName}.propTypes = {
  'aria-label': PropTypes.string,
}
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
      filePath => `export { ${filePath.split('.')[0]} } from './${filePath}'`
    )
    .join('\n')

exports.generateComponents = async ({ src, dest, ext = 'dist.js', core }) => {
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
    await fs.writeFile(`${dest}/index.js`, exportTemplate(filePaths))
  } catch (err) {
    console.error(err)
  }
}

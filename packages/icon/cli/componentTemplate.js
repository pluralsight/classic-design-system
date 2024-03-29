/* eslint-disable @typescript-eslint/restrict-template-expressions */
const { deprecationMap } = require('./deprecationMap.js')

function getDefaultImports() {
  return "import React, { forwardRef } from 'react'"
}

function getDeprecatedImports() {
  return `
  import React, { forwardRef, useEffect } from 'react'
  import { deprecationWarning } from '@pluralsight/ps-design-system-util'
  `
}

function getImports(baseImport, deprecated = false) {
  return `
  ${deprecated ? getDeprecatedImports() : getDefaultImports()}
  import Icon, { IconComponent } from '${baseImport}'
  `
}

function getDeprecationHook(name) {
  const DEP_MESSAGE =
    'has been deprecated and will be removed in the future. Please use the new icon: '
  const warning = `${name} ${DEP_MESSAGE} ${deprecationMap[name]}`

  return `
    useEffect(() => {
      deprecationWarning('${warning}')
    }, [])
  `
}

function getComponentBlock(name, svgString, deprecated = false) {
  const regex = />/

  return `
  const ${name} = forwardRef((props, ref) => {
    const { 'aria-label': ariaLabel, ...rest } = props
    ${deprecated ? getDeprecationHook(name) : ''}
    return (
      <Icon {...rest} ref={ref}>
        ${svgString.replace(
          regex,
          "role='img' {...(ariaLabel && { 'aria-label': ariaLabel })}>"
        )}
      </Icon>
    )
  }) as IconComponent
  `
}

function getComponentTemplate(baseImport, rawFileName, svgString) {
  const fileName = rawFileName.split('_')[0]
  const componentDisplay = fileName.split('.')[0]
  const componentName = `${componentDisplay}Icon`
  const isDeprecated = rawFileName.includes('DEPRECATED')

  return `
  // This file is generated by running the "icons" bin script.
  // Manual changes might be lost - proceed with caution!
  ${getImports(baseImport, isDeprecated)}
  ${getComponentBlock(componentName, svgString, isDeprecated)}
  ${componentName}.displayName = "${componentName}"
  ${componentName}.colors = Icon.colors
  ${componentName}.sizes = Icon.sizes

  export { ${componentName} }
  `
}

module.exports = {
  getComponentTemplate
}

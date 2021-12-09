/* eslint-disable @typescript-eslint/restrict-template-expressions */
const { deprecationMap } = require('./deprecationMap.js')
const { DEP_MESSAGE } = require('../src/react/icons')

function getDeprecatedImports() {
  return `
  import { deprecationWarning } from '@pluralsight/ps-design-system-util'
  `
}

function getImports(baseImport, deprecated = false) {
  return `
  import React, { forwardRef } from 'react'
  ${deprecated && getDeprecatedImports()}
  import Icon, { IconComponent } from '${baseImport}'
  `
}

function getDeprecationHook(name) {
  const DEP_MESSAGE =
    'has been deprecated and will be removed in the future. Please use the new icon: '
  const warning = `${name} ${DEP_MESSAGE} ${deprecationMap[name]}`

  return `
    useEffect(() => {
      deprecationWarning(${warning})
    }, [])
  `
}

function getComponentBlock(name, replaceFn, deprecated = false) {
  const regex = />/

  return `
  const ${name} = forwardRef((props, ref) => {
    const { 'aria-label': ariaLabel, ...rest } = props

    ${deprecated && getDeprecationHook()}

    return (
      <Icon {...rest} ref={ref}>
        ${replaceFn(
          regex,
          "role='img' {...(ariaLabel && { 'aria-label': ariaLabel })}>"
        )}
      </Icon>
    )
  }) as IconComponent
  `
}

function getComponentTemplate(baseImport, fileName, replaceFn) {
  const componentName = fileName.split('_')[0]
  const isDeprecated = fileName.includes('DEPRECATED')

  return `
  ${getImports(baseImport, isDeprecated)}

  ${getComponentBlock(componentName, replaceFn, isDeprecated)}

  ${componentName}.displayName = "${componentName}"
  ${componentName}.colors = Icon.colors
  ${componentName}.sizes = Icon.sizes

  export { ${componentName}  }
  `
}

module.exports = {
  getComponentTemplate
}

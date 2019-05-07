// NOTE: largely taken from `prop-types` and `react-element-proptypes`
//       https://github.com/facebook/prop-types/blob/master/factoryWithTypeCheckers.js
//       https://github.com/wzrdzl/react-element-proptypes

import PropTypeError from './prop-type-error'
import {
  createChainableTypeChecker,
  getDisplayName,
  getCircularReplacer
} from './utils'

export default function elementOfType(ExpectedElementType) {
  function validate(props, propName, componentName, location, propFullName) {
    const prop = props[propName]
    const hasComponentType = !!prop.type

    const ofExpectedType = hasComponentType && prop.type === ExpectedElementType

    if (prop && !ofExpectedType) {
      const expectedTypeName = getDisplayName(ExpectedElementType)

      if (!hasComponentType) {
        // prettier-ignore
        const msg = `Invalid ${location} \`${propFullName}\` with value \`${JSON.stringify(prop, getCircularReplacer())}\` supplied to ${componentName}, expected element of type \`${expectedTypeName}\``
        return new PropTypeError(msg)
      }

      const receivedTypeName = getDisplayName(prop.type)
      const msg = `Invalid ${location} \`${propFullName}\` of element type \`${receivedTypeName}\` supplied to ${componentName}, expected element of type \`${expectedTypeName}\``
      return new PropTypeError(msg)
    }

    return null
  }

  return createChainableTypeChecker(validate)
}

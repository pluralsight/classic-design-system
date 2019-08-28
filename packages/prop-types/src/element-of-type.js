// NOTE: largely taken from `prop-types` and `react-element-proptypes`
//       https://github.com/facebook/prop-types/blob/master/factoryWithTypeCheckers.js
//       https://github.com/wzrdzl/react-element-proptypes

import PropTypeError from './prop-type-error.js'
import {
  createChainableTypeChecker,
  getDisplayName,
  getCircularReplacer
} from './utils/index.js'

export default function elementOfType(ExpectedElementType) {
  function validate(props, propName, componentName, location, propFullName) {
    const prop = props[propName]
    const hasComponentType = !!prop.type

    if (prop) {
      const expectedTypeName = getDisplayName(ExpectedElementType)

      if (!hasComponentType) {
        // prettier-ignore
        const msg = `Invalid ${location} \`${propFullName}\` with value \`${JSON.stringify(prop, getCircularReplacer())}\` supplied to ${componentName}, expected element of type \`${expectedTypeName}\``
        return new PropTypeError(msg)
      }

      const receivedTypeName = getDisplayName(prop.type)
      const ofExpectedType = expectedTypeName === receivedTypeName

      if (!ofExpectedType) {
        // prettier-ignore
        const msg = `Invalid ${location} \`${propFullName}\` of element type \`${receivedTypeName}\` supplied to ${componentName}, expected element of type \`${expectedTypeName}\``
        return new PropTypeError(msg)
      }
    }

    return null
  }

  return createChainableTypeChecker(validate)
}

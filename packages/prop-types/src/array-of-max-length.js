import PropTypes from 'prop-types'

import PropTypeError from './prop-type-error'
import { createChainableTypeChecker, getCircularReplacer } from './utils'

export default function arrayOfMaxLength(
  maxLength,
  typeChecker = PropTypes.node
) {
  function validate(props, propName, componentName, location, propFullName) {
    const prop = props[propName]

    if (!Array.isArray(prop)) {
      // prettier-ignore
      const msg = `Invalid ${location} \`${propFullName}\` with value \`${JSON.stringify(prop, getCircularReplacer())}\` supplied to ${componentName}, expected an array`
      return new PropTypeError(msg)
    }

    if (prop.length > maxLength) {
      // prettier-ignore
      const msg = `Invalid ${location} \`${propFullName}\` with length ${prop.length} supplied to ${componentName}, expected max length of ${maxLength}`
      return new PropTypeError(msg)
    }

    for (var i = 0; i < prop.length; i++) {
      PropTypes.checkPropTypes(
        { tempKey: typeChecker },
        { tempKey: prop[i] },
        location,
        propFullName + '[' + i + ']'
      )
    }

    return null
  }

  return createChainableTypeChecker(validate)
}

// NOTE: largely taken from `prop-types` and `react-element-proptypes`
//       https://github.com/facebook/prop-types/blob/master/factoryWithTypeCheckers.js
//       https://github.com/wzrdzl/react-element-proptypes

const ANONYMOUS = 'ANONYMOUS'

const getDisplayName = Component => {
  if (typeof Component === 'string') return Component

  if (!Component) return undefined

  return Component.displayName || Component.name || 'Component'
}

const isNil = value => value == null

function PropTypeError(message) {
  this.message = message
  this.stack = ''
}
PropTypeError.prototype = Error.prototype

function createChainableTypeChecker(validate) {
  function checkType(
    isRequired,
    props,
    propName,
    componentName = ANONYMOUS,
    location,
    propFullName
  ) {
    propFullName = propFullName || propName

    const propValue = props[propName]

    if (!isNil(propValue))
      return validate(props, propName, componentName, location, propFullName)

    if (!isRequired) return null

    const nilType = propValue === null ? 'null' : 'undefined'
    const msg = `The ${location} \`${propFullName}\` is marked as required in ${componentName}, but it's value is \`${nilType}\``

    return new PropTypeError(msg)
  }

  const chainedCheckType = checkType.bind(null, false)
  chainedCheckType.isRequired = checkType.bind(null, true)

  return chainedCheckType
}

export default function elementOfType(ExpectedElementType) {
  function validate(props, propName, componentName, location, propFullName) {
    const prop = props[propName]
    const hasComponentType = !!prop.type

    const ofExpectedType = hasComponentType && prop.type === ExpectedElementType

    if (prop && !ofExpectedType) {
      const expectedTypeName = getDisplayName(ExpectedElementType)

      if (!hasComponentType) {
        // prettier-ignore
        const msg = `Invalid ${location} \`${propFullName}\` with value \`${JSON.stringify(prop)}\` supplied to ${componentName}, expected element of type \`${expectedTypeName}\``
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

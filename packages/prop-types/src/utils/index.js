import PropTypeError from '../prop-type-error'

export function createChainableTypeChecker(validate) {
  function checkType(
    isRequired,
    props,
    propName,
    componentName = 'ANONYMOUS',
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

export const getDisplayName = Component => {
  if (typeof Component === 'string') return Component

  if (!Component) return undefined

  return Component.displayName || Component.name || 'Component'
}

export const isNil = value => value == null

// NOTE: example from MDN docs
//       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value#Examples
export const getCircularReplacer = () => {
  const seen = new WeakSet()
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return
      }
      seen.add(value)
    }
    return value
  }
}

export default expectedTypes => (
  props,
  propName,
  componentName,
  _,
  fullPropName,
  etc
) => {
  // function(props, propName, componentName)
  // function(propValue, key, componentName, location, propFullName)

  const parseActualDisplayName = actual =>
    typeof actual.type === 'string' ? actual.type : actual.type.displayName

  const actualProp = props[propName]
  const actualDisplayName = parseActualDisplayName(actualProp)
  const parseExpectedDisplayName = expected => expected.displayName

  if (
    !expectedTypes.map(parseExpectedDisplayName).includes(actualDisplayName)
  ) {
    const quote = str => `"${str}"`
    const formatExpectedMsg = types => {
      return (
        types
          .slice(0, types.length - 1)
          .map(parseExpectedDisplayName)
          .map(quote)
          .join(', ') +
        (types.length > 1
          ? ' or ' + quote(parseExpectedDisplayName(types[types.length - 1]))
          : '')
      )
    }
    throw new Error(
      `${componentName}.${fullPropName ||
        propName} only allows ${formatExpectedMsg(
        expectedTypes
      )} but got ${quote(actualDisplayName)}`
    )
  }
}

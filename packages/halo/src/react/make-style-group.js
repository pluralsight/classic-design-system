import * as glamor from 'glamor'

const makeGroupStyle = cssObj => className => {
  const convertToNestedSelector = str =>
    str.replace(className, '').replace(/(:|\[)/g, '&$&')

  const isRelatedClass = str =>
    new RegExp('^' + className + '(:|\\[)').test(str)

  const base = glamor.style(cssObj[className])

  const additional = Object.keys(cssObj)
    .filter(isRelatedClass)
    .map(selector => {
      const styles = cssObj[selector]
      if (!styles) return
      return { [convertToNestedSelector(selector)]: styles }
    })
    .filter(Boolean)

  return glamor.compose(
    base,
    ...additional
  )
}

export default makeGroupStyle

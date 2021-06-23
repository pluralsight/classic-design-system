const glamor = require('glamor')
const CleanCSS = require('clean-css')
const jsToCss = require('./js-to-css.js')

function glamorToCss(obj) {
  return (
    convertKeyframes(filterKeyframes(obj.default)) +
    convertAnimations(filterAnimationFunctions(obj.default)) +
    convertCssWithGlamor(filterNonKeyframes(obj.default))
  )
}

function convertAnimations(obj) {
  return jsToCss(obj)
}

function convertKeyframes(obj) {
  return jsToCss(obj)
}

function convertCssWithGlamor(obj) {
  const name = glamor.css(obj).toString()
  const input = glamor
    .cssFor(obj)
    .replace(new RegExp(`\\.${name}`, 'g'), '')
    .replace(new RegExp(`\\[data-${name}\\]`, 'g'), '')
  const output = new CleanCSS().minify(input)
  return output.styles
}

function filterObject(predicate, obj) {
  return obj =>
    Object.keys(obj)
      .filter(k => predicate(k, obj))
      .reduce((acc, k) => ({ ...acc, [k]: obj[k] }), {})
}

const filterKeyframes = filterObject(k => /keyframes/.test(k))
const filterNonKeyframes = filterObject(k => !/keyframes/.test(k))
const filterAnimationFunctions = filterObject(
  (k, obj) => typeof obj[k] === 'function'
)

module.exports = glamorToCss

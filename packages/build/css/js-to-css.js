// based on https://github.com/jonschlinkert/dashify/blob/master/index.js
// change: ignore non-word characters (eg, %)
function dashify(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string')
  }

  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, m => (options && options.condense ? '-' : m))
    .toLowerCase()
}

// based on https://raw.githubusercontent.com/tiaanduplessis/obj-to-css/master/index.js
function toCss(obj = {}) {
  const selectors = Object.keys(obj)
  return selectors
    .map(selector => {
      const definition =
        typeof obj[selector] === 'function' ? obj[selector]({}) : obj[selector]
      const rules = Object.keys(definition)
        .map(rule => `  ${dashify(rule)}: ${definition[rule]};`)
        .join('\n')
      return `${selector} {
${rules}
}`
    })
    .join('\n')
}

module.exports = toCss

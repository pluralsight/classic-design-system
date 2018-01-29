const dashify = require('dashify')

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

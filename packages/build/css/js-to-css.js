// based on https://raw.githubusercontent.com/tiaanduplessis/obj-to-css/master/index.js
function toCss(obj = {}) {
  const selectors = Object.keys(obj)
  return selectors
    .map(selector => {
      const definition = obj[selector]
      const rules = Object.keys(definition)
        .map(rule => `  ${rule}: ${definition[rule]}`)
        .join(';\n')
      return `${selector} {
${rules}
}\n`
    })
    .join('')
}

module.exports = toCss

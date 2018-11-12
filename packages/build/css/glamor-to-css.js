const glamor = require('glamor')

function glamorToCss(obj) {
  const name = glamor.css(obj).toString()

  const dedupSelectors = /([^,{}]+),\1/g
  return glamor
    .cssFor(obj)
    .replace(new RegExp(`\\.${name}`, 'g'), '')
    .replace(new RegExp(`\\[data-${name}\\]`, 'g'), '')
    .replace(dedupSelectors, '$1')
}

module.exports = glamorToCss

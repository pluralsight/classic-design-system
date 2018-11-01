import * as glamor from 'glamor'

function glamorToCss(glamorStyle) {
  const name = String(glamorStyle)

  return glamor
    .cssFor(glamorStyle)
    .replace(new RegExp(`\\.${name}`, 'g'), '')
    .replace(new RegExp(`\\[data-${name}\\]`, 'g'), '')
}

module.exports = glamorToCss

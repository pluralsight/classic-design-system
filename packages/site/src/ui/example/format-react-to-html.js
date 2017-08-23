import React from 'react'
import ReactDOMServer from 'react-dom/server'

const rmCssModuleHashes = src => src.replace(/___\S{5}/g, '')

const toHtml = reactElement => ReactDOMServer.renderToStaticMarkup(reactElement)

export const formatHtml = str => {
  if (!str) return ''

  const tabs = count => '  '.repeat(count)

  const formatTag = bit => '<' + bit + '>'

  const stripTag = bit => bit.replace(/^<?([^<>]+)>?$/, '$1')

  const isClosingTag = bit => bit[0] === '/'

  const isSelfClosingTag = bit => bit[bit.length - 1] === '/'

  const isTagClosingOverText = bit => bit.match(/<\//)

  let depth = 0
  return str.split('><').map(stripTag).reduce((html, bit) => {
    if (isClosingTag(bit)) {
      --depth
      html += '\n' + tabs(depth) + formatTag(bit)
    } else {
      html += (html ? '\n' : '') + tabs(depth) + formatTag(bit)

      if (!isSelfClosingTag(bit) && !isTagClosingOverText(bit)) ++depth
    }
    return html
  }, '')
}

export default component => formatHtml(rmCssModuleHashes(toHtml(component)))

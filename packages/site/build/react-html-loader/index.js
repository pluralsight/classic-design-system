'use strict'

const _eval = require('eval')
const ReactDOMServer = require('react-dom/server')

const css = require('./css')

module.exports = function(content) {
  this.cacheable && this.cacheable()

  content = css.replaceCssImportsWithModules(content, this.resourcePath)
  const output = _eval(content, true)
  const react = ReactDOMServer.renderToStaticMarkup(output.default({}))
  return react
}

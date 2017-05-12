'use strict'

const _eval = require('eval')
const ReactDOMServer = require('react-dom/server')

const css = require('./css')

module.exports = function(content) {
  this.cacheable && this.cacheable()

  // TODO: add replacement for `@pluralsight/ds-util` imports, which seem to
  // not work with this loader -- possibly because they're sym linked
  // or not in the context where the node_modules are that count
  content = css.replaceCssImportsWithModules(content, this.resourcePath)
  const output = _eval(content, this.resourcePath, {}, true)
  const react = ReactDOMServer.renderToStaticMarkup(
    output.default(output.default.defaultProps)
  )
  return react
}

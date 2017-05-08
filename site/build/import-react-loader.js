module.exports = function importReactLoader(source) {
  this.cacheable && this.cacheable()

  return "import React from 'react'; export default props => " + source
}

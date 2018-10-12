const Icon = require('./react').default
const register = require('web-react-components').register

const IconWebComponent = register(
  Icon,
  'ps-icon',
  ['icon', 'color'],
  {},
  { useShadowDOM: true, inheritStyles: true }
)

module.exports = IconWebComponent

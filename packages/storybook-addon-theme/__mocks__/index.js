var React = require('react')

const MockTheme = props => React.createElement(React.Fragment, props)

module.exports = () => storyFn =>
  React.createElement(MockTheme, null, storyFn())

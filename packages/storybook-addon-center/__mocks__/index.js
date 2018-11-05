var React = require('react')

const MockCenter = props => React.createElement(React.Fragment, props)

module.exports = storyFn => React.createElement(MockCenter, null, storyFn())

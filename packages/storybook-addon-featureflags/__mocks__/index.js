const React = require('react')

const MockFeatureFlagDecorator = props => React.createElement(React.Fragment, props)

module.exports = storyFn => React.createElement(MockFeatureFlagDecorator, null, storyFn())

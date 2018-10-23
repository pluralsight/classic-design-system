var React = require('react')

const Center = props => {
  return React.createElement('div', {
    ...props,
    'test-decorator-center': true
  })
}

module.exports = storyFn => React.createElement(Center, null, storyFn())

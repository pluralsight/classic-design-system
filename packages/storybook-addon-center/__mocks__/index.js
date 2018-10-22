var React = require('react')

var CenterDecorator = props => {
  return React.createElement('div', {
    ...props,
    'data-storybook-center-decorator': true
  })
}

module.exports = CenterDecorator

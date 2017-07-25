const path = require('path')
const React = require('react')

const formatRequireExpression = filepath =>
  `require(${JSON.stringify(filepath)})`

const makeGloballyAvailable = deps =>
  Object.keys(deps).forEach(depName => {
    global[depName] = deps[depName]
  })

module.exports = function componentLoader() {
  this.cacheable && this.cacheable()

  return `
module.hot && module.hot.accept([])

const makeGloballyAvailable = ${makeGloballyAvailable}

const codeExampleDependencies = {
  React: ${formatRequireExpression('react')},
  Card: ${formatRequireExpression(
    '@pluralsight/ps-design-system-card/react'
  )}.default
}

makeGloballyAvailable(codeExampleDependencies)

module.exports = codeExampleDependencies
`
}

const {
  decorateConfig
} = require('@pluralsight/ps-design-system-build/webpack')
const path = require('path')

module.exports = (config, env) =>
  decorateConfig(config, {
    defaultInclude: [path.resolve('src'), path.resolve('public')],
    packageJson: require('./package.json')
  })

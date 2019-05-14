const baseConfig = require('../../jest/base.config.js')
const { name } = require('./package')

module.exports = {
  ...baseConfig,
  displayName: name,
  name: name,
  setupTestFrameworkScriptFile: require.resolve('./jest.setup.js'),
  testMatch: [`${__dirname}/**/*/?(*.)+(spec|test).js`]
}

const path = require('path')

const baseConfig = require('../../jest/base.config.js')
const { name } = require('./package.json')

module.exports = {
  ...baseConfig,
  displayName: name,
  name: name,
  testMatch: [path.join(__dirname, '/**/*/?(*.)+(spec|test).(js|ts|tsx)')]
}

const baseConfig = require('../jest/base.config.js')
const { name } = require('./package')

module.exports = {
  ...baseConfig,
  displayName: name,
  name: name,
  testMatch: [`${__dirname}/**/*/?(*.)+(spec|test).(ts|tsx)`],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/jest/__mocks__/cssModuleMock.js',
  },
}

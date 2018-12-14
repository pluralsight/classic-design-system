const path = require('path')

module.exports = {
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov'],
  modulePathIgnorePatterns: ['<rootDir>/scripts/', '<rootDir>/.*/__mocks__'],
  rootDir: path.resolve(__dirname, '..'),
  setupTestFrameworkScriptFile: '<rootDir>/jest/setup/index.js'
}

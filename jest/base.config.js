const path = require('path')

module.exports = {
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov'],
  modulePathIgnorePatterns: ['<rootDir>/scripts/', '<rootDir>/.*/__mocks__'],
  rootDir: path.resolve(__dirname, '..'),
  setupFilesAfterEnv: ['<rootDir>/jest/setup/index.js'],
  transform: {
    '^.+\\.js$': '<rootDir>/jest/babel-transformer.js'
  },
  // transformIgnorePatterns: ['node_modules', '__specs__'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}

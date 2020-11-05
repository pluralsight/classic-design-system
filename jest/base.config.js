const path = require('path')

module.exports = {
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov'],
  modulePathIgnorePatterns: ['<rootDir>/scripts/', '<rootDir>/.*/__mocks__'],
  rootDir: path.resolve(__dirname, '..'),
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-axe/extend-expect',
    '<rootDir>/jest/setup/index.js'
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/jest/babel-transformer.js',
    '^.+\\.tsx?$': '<rootDir>/jest/babel-transformer.js'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/.*/dist'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}

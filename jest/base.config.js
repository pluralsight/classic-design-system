const path = require('path')

module.exports = {
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov'],
  moduleNameMapper: {
    '@pluralsight/ps-design-system-normalize': 'identity-obj-proxy',
    '\\.(css)$': 'identity-obj-proxy'
  },
  modulePathIgnorePatterns: ['<rootDir>/scripts/', '<rootDir>/.*/__mocks__'],
  rootDir: path.resolve(__dirname, '..'),
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-axe/extend-expect',
    '<rootDir>/jest/setup/index.js'
  ],
  testEnvironment: 'jest-environment-jsdom-sixteen',
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

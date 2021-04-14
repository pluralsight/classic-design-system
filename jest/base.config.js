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
    '^.+\\.m?js$': [
      'babel-jest',
      { configFile: path.join(__dirname, 'babel.config.cjs') }
    ],
    '^.+\\.tsx?$': [
      'babel-jest',
      { configFile: path.join(__dirname, 'babel.config.cjs') }
    ]
  },
  transformIgnorePatterns: ['<rootDir>/node_modules'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}

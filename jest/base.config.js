const path = require('path')

module.exports = {
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov'],
  modulePathIgnorePatterns: ['<rootDir>/scripts/'],
  rootDir: path.resolve(__dirname, '..'),
  setupFiles: ['raf/polyfill', '<rootDir>/jest/setup.js']
}

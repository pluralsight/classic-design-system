const path = require('path')

module.exports = {
  modulePathIgnorePatterns: ['<rootDir>/scripts/'],
  rootDir: path.resolve(__dirname, '..'),
  setupFiles: ['raf/polyfill', '<rootDir>/jest/setup.js']
}

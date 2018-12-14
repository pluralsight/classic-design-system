const baseConfig = require('./jest/base.config.js')

module.exports = {
  ...baseConfig,
  collectCoverage: false,
  projects: ['<rootDir>/packages/*']
}

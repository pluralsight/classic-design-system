const baseConfig = require('./jest/base.config.js')

module.exports = {
  ...baseConfig,
  collectCoverage: true,
  projects: ['<rootDir>/packages/*']
}

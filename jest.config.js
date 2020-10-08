const baseConfig = require('./jest/base.config.js')

module.exports = {
  ...baseConfig,
  collectCoverage: false,
  testMatch: [`<rootDir>/packages/**/*/?(*.)+(spec|test).(js|ts|tsx)`]
}

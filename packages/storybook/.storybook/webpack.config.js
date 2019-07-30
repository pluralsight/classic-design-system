const path = require('path')
const { lstatSync, readdirSync, readFileSync } = require('fs')

const {
  PKGS_DIR_PATH,
  filterWebpackRules,
  getPackageNameToPathMap
} = require('./config-utils.js')

module.exports = ({ config }) => {
  const babelRules = filterWebpackRules(config, 'babel-loader')

  babelRules.forEach(rule => {
    rule.include = PKGS_DIR_PATH
    rule.exclude = /node_modules/
  })

  const nameToPathMap = getPackageNameToPathMap()
  Object.assign(config.resolve.alias, nameToPathMap)

  return config
}

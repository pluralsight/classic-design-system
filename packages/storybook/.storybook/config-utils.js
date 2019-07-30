const fs = require('fs')
const path = require('path')

const ROOT_PATH = path.resolve(__dirname, '../../../')
const PKGS_DIR_PATH = path.resolve(ROOT_PATH, 'packages')

const getPackageNameToPathMap = () => {
  const pkgDirectories = fs
    .readdirSync(PKGS_DIR_PATH)
    .filter(name => fs.lstatSync(path.join(PKGS_DIR_PATH, name)).isDirectory())

  return pkgDirectories.reduce((acc, dirName) => {
    const dirPath = path.join(PKGS_DIR_PATH, dirName)
    const pkgJsonPath = path.join(dirPath, 'package.json')

    const pkgJson = require(pkgJsonPath)

    return { ...acc, [pkgJson.name]: dirPath }
  }, {})
}

const filterWebpackRules = (config, loaderName) =>
  config.module.rules.filter(ruleIncludesLoader(loaderName))

const ruleIncludesLoader = loaderName => rule => {
  let isMatch = false

  if (rule.loader && rule.loader.includes(loaderName)) {
    isMatch = true
  }

  if (rule.use) {
    rule.use.forEach(use => {
      if (typeof use === 'string' && use.includes(loaderName)) {
        isMatch = true
      } else if (
        typeof use === 'object' &&
        use.loader &&
        use.loader.includes(loaderName)
      ) {
        isMatch = true
      }
    })
  }

  return isMatch
}

module.exports = {
  ROOT_PATH,
  PKGS_DIR_PATH,

  filterWebpackRules,
  getPackageNameToPathMap
}

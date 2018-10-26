const path = require('path')

const Repository = require('lerna/lib/Repository')
const PackageUtilities = require('lerna/lib/PackageUtilities')

const { smush, validateIsString } = require('./string')

const rootPath = path.resolve(__dirname, '..', '..')

const npmScope = '@pluralsight'
const packagePrefix = 'ps-design-system-'

const toPackageName = str => {
  validateIsString(str)
  return `${npmScope}/${packagePrefix}${smush(str)}`
}

const getPackages = () => {
  const repo = new Repository(rootPath)

  return PackageUtilities.getPackages({
    packageConfigs: repo.packageConfigs,
    rootPath
  }).reduce((acc, pkg) => ({ ...acc, [pkg.name]: pkg.version }), {})
}

module.exports = {
  toPackageName,
  getPackages
}

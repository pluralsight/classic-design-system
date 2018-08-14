const Repository = require('lerna/lib/Repository')
const PackageUtilities = require('lerna/lib/PackageUtilities')

function getPackageAbbreviations() {
  const cwd = process.cwd()
  const repo = new Repository(cwd)
  return PackageUtilities.getPackages({
    packageConfigs: repo.packageConfigs,
    rootPath: cwd
  })
    .map(pkg => pkg.name)
    .map(name => (name.charAt(0) === '@' ? name.split('/')[1] : name))
    .map(name => (/-/.test(name) ? name.split('-').pop() : name))
    .concat(['storybook-addon-theme'])
}

module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    lang: [0],
    'scope-enum': _ => [2, 'always', getPackageAbbreviations()]
  }
}

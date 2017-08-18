const Repository = require('lerna/lib/Repository')

function getPackageAbbreviations() {
  const repo = new Repository(process.cwd())
  return repo.packages
    .map(pkg => pkg.name)
    .map(name => (name.charAt(0) === '@' ? name.split('/')[1] : name))
    .map(name => (/-/.test(name) ? name.split('-').pop() : name))
}

module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    lang: [0],
    'scope-enum': _ => [2, 'always', getPackageAbbreviations()]
  }
}

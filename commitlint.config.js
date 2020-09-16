const scopes = require('@commitlint/config-lerna-scopes')

const prefix = 'ps-design-system-'

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': ctx =>
      scopes.rules['scope-enum'](ctx).then(([level, applicable, packages]) => [
        level,
        applicable,
        packages
          .map(pkg => (pkg.includes(prefix) ? pkg.replace(prefix, '') : pkg))
          .concat(['examples', 'docs', 'scripts'])
      ])
  }
}

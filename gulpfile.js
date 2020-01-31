const argv = require('yargs').argv
const bump = require('gulp-bump')
const gulp = require('gulp')
const octo = require('@octopusdeploy/gulp-octo')
const path = require('path')

function verifyApp() {
  if (!argv.app || !argv.pkgVersion) {
    throw new Error(
      'So which app and version did you want to publish then? Set with --app {name} --pkgVersion {semVer}'
    )
  }
}

gulp.task('bump', () => {
  verifyApp()

  return gulp
    .src(`${argv.app}/package.json`)
    .pipe(bump({ version: argv.pkgVersion }))
    .pipe(gulp.dest(argv.app))
})

gulp.task('octopus-publish', ['bump'], () => {
  verifyApp()
  if (!argv.host || !argv.apiKey) {
    throw new Error('Forgot to include --host or --apiKey')
  }

  const pkg = [
    `packages/${argv.app}/dist/**/*`,
    `packages/${argv.app}/src/**/*`,
    `packages/${argv.app}/build/**/*`,
    `packages/${argv.app}/node_modules/**/*`,
    `packages/${argv.app}/.env.example`,
    `packages/${argv.app}/.babelrc`,
    `packages/${argv.app}/.flowconfig`,
    `packages/${argv.app}/next.config.js`,
    `packages/${argv.app}/package-lock.json`,
    `packages/${argv.app}/package.json`,
    '!**/__specs__/**/*',
    '!**/test/**/*'
  ]
  return gulp
    .src(pkg, {
      base: path.join('packages', argv.app),
      nodir: true
    })
    .pipe(
      octo.pack({ id: 'design-system-' + argv.app, version: argv.pkgVersion })
    )
    .pipe(octo.push({ apiKey: argv.apiKey, host: argv.host, replace: true }))
})

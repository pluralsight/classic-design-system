async function lintCommits() {
  const lintConfig = require('@commitlint/config-conventional')
  const commitlint = require('danger-plugin-conventional-commitlint').default

  await commitlint(lintConfig.rules, { severity: 'fail' })
}

;(async function main() {
  try {
    await lintCommits()
  } catch (err) {
    console.error(err)
  }
})()

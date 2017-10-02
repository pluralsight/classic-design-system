import 'isomorphic-fetch'

import config from './config'
import GitHubApi from 'github'

import * as repos from './repos'
import * as deps from './deps'

const github = new GitHubApi({
  // debug: true
})
github.authenticate({
  type: 'oauth',
  token: config.githubToken
})
;(async _ => {
  const allRepos = await repos.getAllOrg(
    { org: 'ps-dev', per_page: 100 },
    github
  )
  allRepos.forEach(async repo => {
    const allDeps = await deps.getForRepo(
      { repo: repo.name, owner: repo.owner.login, path: '' },
      github
    )
    const packageJson = allDeps.find(dep => dep.name === 'package.json')
    if (packageJson) {
      const json = await deps.readJson(
        { token: config.githubToken },
        packageJson
      )
      const designSystemPackages = deps.filterDesignSystem(json)
      const count = Object.keys(designSystemPackages).length
      if (count > 0) {
        console.log('Found usages for repo', repo.full_name)
        console.log(designSystemPackages)
      } else {
        console.log('No usage in repo', repo.full_name)
      }
    }
  })
})()

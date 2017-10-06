// @flow
import 'isomorphic-fetch'

import type { GHApi, Usages } from './types'

import GitHubApi from 'github'

import config from './config'

import * as deps from './deps'
import * as packages from './packages'
import * as slack from './slack'
import * as repos from './repos'

const github: GHApi = new GitHubApi({
  debug: config.githubApiDebug
})
github.authenticate({
  type: 'oauth',
  token: config.githubToken
})
;(async _ => {
  const usages: Usages = {}
  const allRepos = await repos.getAllOrg(
    { org: 'ps-dev', per_page: 100 },
    github
  )
  await Promise.all(
    allRepos.map(async repo => {
      const allDeps = await deps.getForRepo(
        { repo: repo.name, owner: repo.owner.login, path: '' },
        github
      )

      const packageJson = allDeps.find(dep => dep.name === 'package.json')
      const packagesDir = allDeps.find(
        dep => dep.name === 'packages' && dep.size === 0
      )
      const lernaJson = allDeps.find(dep => dep.name === 'lerna.json')

      if (packagesDir && lernaJson) {
        const packageDirs = await deps.getForRepo(
          {
            repo: repo.name,
            owner: repo.owner.login,
            path: packagesDir.path
          },
          github
        )
        await Promise.all(
          packageDirs.map(async dirDep => {
            const pkgPackageJsonPath = dirDep.path + '/package.json'
            const pkgPackageJson = await deps.getForRepo(
              {
                repo: repo.name,
                owner: repo.owner.login,
                path: pkgPackageJsonPath
              },
              github
            )
            if (pkgPackageJson.length > 0) {
              const designSystemDeps = await deps.getDesignSystemDeps(
                pkgPackageJson[0]
              )
              if (designSystemDeps)
                usages[
                  `${repo.full_name}/${pkgPackageJsonPath}`
                ] = designSystemDeps
            }
          })
        )
      }

      if (packageJson) {
        const designSystemDeps = await deps.getDesignSystemDeps(packageJson)
        if (designSystemDeps)
          usages[`${repo.full_name}/package.json`] = designSystemDeps
      }

      return Promise.resolve()
    })
  )

  const latestPackages = await packages.getLatest()

  const summary = slack.formatUsage(
    packages.filterUpgradeOpps(latestPackages, usages),
    latestPackages
  )
  await slack.post(summary)
})()

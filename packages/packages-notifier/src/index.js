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
        // console.log('Found lerna.json and packages/. Recursing', repo.full_name)
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
              const json = await deps.readJson(
                { token: config.githubToken },
                pkgPackageJson[0]
              )
              if (json) {
                const designSystemPackages = deps.filterDesignSystem(json)
                const count = Object.keys(designSystemPackages).length
                if (count > 0) {
                  const path = `${repo.full_name}/${pkgPackageJsonPath}`
                  // console.log(`Found usages in ${path}`)
                  // console.log(designSystemPackages)
                  usages[path] = designSystemPackages
                } else {
                  // console.log(
                  //   'No usage in repo',
                  //   repo.full_name,
                  //   `in ${pkgPackageJsonPath}`
                  // )
                }
              }
            }
          })
        )
      }

      if (packageJson) {
        const json = await deps.readJson(
          { token: config.githubToken },
          packageJson
        )
        if (json) {
          const designSystemPackages = deps.filterDesignSystem(json)
          const count = Object.keys(designSystemPackages).length
          if (count > 0) {
            const path = `${repo.full_name}/package.json`
            // console.log(`Found usages in ${path}`)
            // console.log(designSystemPackages)
            usages[path] = designSystemPackages
          } else {
            // console.log('No usage in repo', repo.full_name, 'in /package.json')
          }
        }
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

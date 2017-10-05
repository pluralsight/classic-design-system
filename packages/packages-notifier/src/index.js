// @flow
import 'isomorphic-fetch'

import type { GHApi } from './github'

import GitHubApi from 'github'

import config from './config'

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

      packageDirs.forEach(async dirDep => {
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
              console.log(
                `Found usages in ${repo.full_name}/${pkgPackageJsonPath}`
              )
              console.log(designSystemPackages)
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
          console.log(`Found usages in ${repo.full_name}/package.json`)
          console.log(designSystemPackages)
        } else {
          // console.log('No usage in repo', repo.full_name, 'in /package.json')
        }
      }
    }
  })

  try {
    const res = await fetch(config.slackWebhookUrl, {
      method: 'POST',
      body: JSON.stringify({ text: 'Jake testing' })
    })

    if (res.ok) {
      console.log('posted usage to slack.')
    } else {
      const body = await res.json()
      console.log('failure to post to slack', res.status, body)
    }
  } catch (err) {
    console.log('failure to post to slack', err)
  }

  console.log('done.')
})()

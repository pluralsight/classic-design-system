// @flow
import { Packages, Usages } from './types'

import semverTruncate from 'semver-truncate'

import config from './config'

export const getLatest = async (): Promise<Packages> => {
  try {
    const res = await fetch(config.packagesApiUrl)
    const body = await res.json()
    return body.data
  } catch (err) {
    console.log('failure to retriev latest packages', err)
    return {}
  }
}

const formatRemoveRange = str =>
  str.charAt(0) === '^' || str.charAt(0) === '~' ? str.slice(1) : str

export const filterUpgradeOpps = (packages: Packages, usages: Usages) => {
  return Object.keys(usages).reduce((repos, repoName) => {
    const upgradeOpps = Object.keys(
      usages[repoName]
    ).reduce((deps, depName) => {
      if (
        semverTruncate(packages[depName], 'major') !==
        semverTruncate(formatRemoveRange(usages[repoName][depName]), 'major')
      ) {
        deps[depName] = usages[repoName][depName]
      }
      return deps
    }, {})
    if (Object.keys(upgradeOpps).length > 0) repos[repoName] = upgradeOpps
    return repos
  }, {})
}

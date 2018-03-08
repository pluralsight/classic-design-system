// @flow
import type { GHApi } from './types'

import GitHubApi from '@octokit/rest'

import config from './config'

const github: GHApi = new GitHubApi({
  debug: config.githubApiDebug
})
github.authenticate({
  type: 'oauth',
  token: config.githubToken
})

export default github

// @flow
import type {
  GHRepo,
  GHReposGetForOrgRes,
  GHApi,
  GHReposGetForOrgConfig
} from './github'

const getFirstOrgRepoPage = async (
  config: GHReposGetForOrgConfig,
  github: GHApi
): Promise<GHReposGetForOrgRes> => {
  try {
    const body = await github.repos.getForOrg(config)
    return body
  } catch (err) {
    console.log('failure on content read', err)
    return { data: [] }
  }
}

const getNextPage = async (
  body: GHReposGetForOrgRes,
  config: GHReposGetForOrgConfig,
  github: GHApi
): Promise<GHReposGetForOrgRes> => {
  return await github.getNextPage(body, config)
}

export const getAllOrg = async (
  config: GHReposGetForOrgConfig,
  github: GHApi
) => {
  let body = await getFirstOrgRepoPage(config, github)
  let repos = body.data
  let i = 0

  while (github.hasNextPage(body)) {
    // console.log('page #', i++)
    try {
      body = await getNextPage(body, config, github)
      repos = repos.concat(body.data)
    } catch (err) {
      console.log('err', err)
    }
  }
  return repos
}

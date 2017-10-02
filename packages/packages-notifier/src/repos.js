// @flow
type GHRepo = {
  full_name: string
}

type GHRes = {
  data: GHRepo[]
}

type GHApi = {
  repos: {
    getForOrg: GHConfig => GHRes
  },
  getNextPage: (GHRes, GHConfig) => GHRes,
  hasNextPage: GHRes => boolean
}

type GHConfig = {
  org: string,
  per_page?: number
}

const getFirstOrgRepoPage = async (
  config: GHConfig,
  github: GHApi
): Promise<GHRes> => {
  try {
    const body = await github.repos.getForOrg(config)
    return body
  } catch (err) {
    console.log('failure on content read', err)
    return { data: [] }
  }
}

const getNextPage = async (
  body: GHRes,
  config: GHConfig,
  github: GHApi
): Promise<GHRes> => {
  return await github.getNextPage(body, config)
}

export const getAllOrg = async (config: GHConfig, github: GHApi) => {
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

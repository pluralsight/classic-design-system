// resources
export type GHContent = {
  name: string,
  url: string,
  html_url: string,
  download_url: string
}
export type GHRepo = {
  full_name: string
}

// configs
export type GHHttpConfig = {
  token: string
}
export type GHReposGetContentConfig = {
  owner: string,
  path: string,
  repo: string
}
export type GHReposGetForOrgConfig = {
  org: string,
  per_page?: number
}

// responses
export type GHReposGetContentRes = {
  data: GHContent | GHContent[]
}
export type GHReposGetForOrgRes = {
  data: GHRepo[]
}

// apis
export type GHApi = {
  repos: {
    getContent: GHReposGetContentConfig => GHReposGetContentRes,
    getForOrg: GHReposGetForOrgConfig => GHReposGetForOrgRes
  },
  getNextPage: (T, C) => T,
  hasNextPage: T => boolean
}

export type Usages = {
  [path: string]: {
    [packageId: string]: string
  }
}

export type Packages = {
  [name: string]: string
}

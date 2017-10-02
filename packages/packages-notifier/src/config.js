// @flow
const dotenv = require('dotenv')

type Cache = {
  githubToken: string,
  env: string,
  port: number
}

const getVar = name => {
  if (!process.env[name]) throw new Error(`process.env.${name} required`)

  return process.env[name]
}

let cache: Cache = {
  githubToken: '',
  env: 'development',
  port: 3003
}

function loadFromEnv(seed: ?Cache): Cache {
  dotenv.config({ silent: true })

  cache = {
    ...cache,
    ...seed,
    ...{
      githubToken: getVar('GITHUB_TOKEN'),
      env: process.env.NODE_ENV || cache.env,
      port: parseInt(process.env.PORT, 10) || cache.port
    }
  }

  return cache
}

module.exports = loadFromEnv()

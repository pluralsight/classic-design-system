// @flow
const dotenv = require('dotenv')

type Cache = {
  cronPattern: string,
  env: string,
  githubApiDebug: boolean,
  githubToken: string,
  packagesApiUrl: string,
  port: number,
  slackChannelName: string,
  slackWebhookUrl: string
}

const getVar = name => {
  if (!process.env[name]) throw new Error(`process.env.${name} required`)

  return process.env[name]
}

let cache: Cache = {
  cronPattern: '0 8 * * 1',
  env: 'development',
  githubApiDebug: false,
  githubToken: '',
  packagesApiUrl: '',
  port: 3003,
  slackChannelName: '',
  slackWebhookUrl: ''
}

function loadFromEnv(seed: ?Cache): Cache {
  dotenv.config({ silent: true })

  cache = {
    ...cache,
    ...seed,
    ...{
      cronPattern: process.env.CRON_PATTERN || cache.cronPattern,
      env: process.env.NODE_ENV || cache.env,
      githubApiDebug:
        process.env.GITUB_API_DEBUG === 'true' || cache.githubApiDebug,
      githubToken: getVar('GITHUB_TOKEN'),
      packagesApiUrl: getVar('PACKAGES_API_URL'),
      port: parseInt(process.env.PORT, 10) || cache.port,
      slackChannelName: getVar('SLACK_CHANNEL_NAME'),
      slackWebhookUrl: getVar('SLACK_WEBHOOK_URL')
    }
  }

  return cache
}

module.exports = loadFromEnv()

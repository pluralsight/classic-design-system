import path from 'path'

import { LogLevel } from 'bunyan'
import * as dotenv from 'dotenv'

type NodeEnvOptions = 'development' | 'test' | 'production'

type Cache = {
  appName: string
  env: NodeEnvOptions
  host: string
  logLevel: LogLevel
  newRelicAppName: string
  newRelicEnabled: boolean
  newRelicLicenseKey?: string
  port: number
  publicDir: string
}

let cache: Cache

const defaults: Partial<Cache> = {
    appName: 'design-system-docs',
    host: '0.0.0.0',
    logLevel: 'info',
    port: 3000
  }

  // NOTE: create and load config as soon as this file is accessed
;(function loadFromEnv(seed?: Partial<Cache>): Cache {
  dotenv.config()

  const parsedEnsuredDefaulted = {
    appName: process.env.APP_NAME || defaults.appName,
    env: (process.env.NODE_ENV || defaults.env) as NodeEnvOptions,
    host: process.env.HOST || defaults.host,
    logLevel: (process.env.LOG_LEVEL || defaults.logLevel) as LogLevel,
    newRelicAppName: ensureVar('NEW_RELIC_APP_NAME'),
    newRelicEnabled: process.env.NEW_RELIC_ENABLED
      ? parseBoolean(process.env.NEW_RELIC_ENABLED)
      : false,
    newRelicLicenseKey: process.env.NEW_RELIC_LICENSE_KEY,
    port: parseInt(process.env.PORT, 10) || defaults.port,
    publicDir: path.join(__dirname, '..', '..', 'public')
  }

  const config = { ...parsedEnsuredDefaulted, ...seed }
  cache = config

  return config
})()

export function getConfig(): Cache {
  return cache
}

function ensureVar(name: string) {
  if (!process.env[name]) throw new Error(`process.env.${name} required`)
  return process.env[name]
}

function parseBoolean(val: string): boolean {
  return val === 'true'
}

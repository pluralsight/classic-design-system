import * as dotenv from 'dotenv'

let cache

const defaults = {
  logDirectory: '/var/log',
  logFileEnabled: false,
  logFileName: 'application.log',
  logLevel: 'debug'
}

// NOTE: create and load config as soon as this file is accessed
;(function loadFromEnv(seed) {
  dotenv.config()

  // TODO: add other process vars to config
  const parsedEnsuredDefaulted = {
    logDirectory: defaults.logDirectory,
    logFileEnabled: defaults.logFileEnabled,
    logFileName: defaults.logFileName,
    logLevel: process.env.LOG_LEVEL || defaults.logLevel
  }

  const config = {
    ...parsedEnsuredDefaulted,
    ...seed
  }

  cache = config

  return config
})()

export function getConfig() {
  return cache
}

function ensureVar(name) {
  if (!process.env[name]) throw new Error(`process.env.${name} required`)

  return process.env[name]
}

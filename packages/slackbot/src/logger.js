import CjsShenanigans, { BaseSerializers } from '@pluralsight/ps-logging-node'
import { v4 as uuid } from 'uuid'

import { getConfig } from './config.js'

const Logger = CjsShenanigans.default

export { Logger }

export const createLogger = (
  name = 'design-system-slackbot',
  config = createLoggerConfig()
) => {
  const logger = new Logger({ name, serializers: BaseSerializers }, config)

  logger.boltGlobalMiddleware = async ({ context, next }) => {
    context.logger = logger.child({ id: uuid() })

    await next()
  }

  return logger
}

export const createLoggerConfig = (overrides = {}) => {
  const config = getConfig()

  const defaults = {
    logDirectory: config.logDirectory,
    logFileEnabled: config.logFileEnabled,
    logFileName: config.logFileName,
    logLevel: config.logLevel
  }

  const loggerConfig = Object.assign({}, defaults, overrides)

  return loggerConfig
}

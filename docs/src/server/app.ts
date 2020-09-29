import path from 'path'

import * as bodyParser from 'body-parser'
import express, { Application } from 'express'
import helmet from 'helmet'
import responseTime from 'response-time'
import favicon from 'serve-favicon'

import * as correlationIds from './correlation-ids'
import { getConfig } from './config'
import { errorsMiddleware } from './errors'
import { LoggerModule, createLogger } from './logger'

import * as health from './health'
import * as gatsby from './gatsby'

const config = getConfig()

export async function createApp(
  logger: LoggerModule = createLogger(config.appName)
): Promise<Application> {
  const app: Application = express()

  app.use(bodyParser.json())

  app.use(correlationIds.middleware())

  app.use(helmet({ contentSecurityPolicy: false }))
  app.use(responseTime())

  app.use(express.static(config.publicDir))
  app.use(favicon(path.join(config.publicDir, 'favicon.ico')))

  app.use(logger.requestMiddleware)

  app.use('/', health.controller, gatsby.controller)

  app.use(errorsMiddleware())

  return app
}

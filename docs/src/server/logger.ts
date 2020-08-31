import { NextFunction, Request, Response } from 'express'

import Logger, { LoggerOptions, stdSerializers } from 'bunyan'

import { getConfig } from './config'

declare module 'express-serve-static-core' {
  interface Request {
    logger: Logger
  }
}

export interface LoggerModule extends Logger {
  requestMiddleware: (req: Request, res: Response, next: NextFunction) => void
}

export { Logger }

const serializers = {
  ...stdSerializers,
  data: JSON.stringify,
  payload: JSON.stringify,
  req: serializeRequest,
}

export function createLogger(name): LoggerModule {
  const { logLevel: level } = getConfig()
  const opts: LoggerOptions = { level, name, serializers }

  const logger = Logger.createLogger(opts) as LoggerModule

  logger.requestMiddleware = function request(req, res, next) {
    req.logger = logger.child({ correlationId: req.correlationId, id: req.id })
    req.logger.info({ req }, `Request ${req.method} ${req.originalUrl}`)

    res.on('finish', function () {
      req.logger.info({ res }, `Response ${req.method} ${req.originalUrl}`)
    })

    next()
  }

  return logger
}

function serializeRequest(req: Request) {
  if (!req || !req.connection) return req

  return {
    url: req.url,
    method: req.method,
    remoteAddress: req.connection.remoteAddress,
    remotePort: req.connection.remotePort,
    headers: {
      host: req.headers.host,
      origin: req.headers.origin,
      referer: req.headers.referer,
      userAgent: req.headers['user-agent'],
    },
    bodyData: JSON.stringify(req.body || {}),
  }
}

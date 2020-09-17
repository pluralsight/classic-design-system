import { NextFunction, Request, Response } from 'express'
import { HttpError } from 'http-errors'

import { noticeError } from './newrelic'

export function errorsMiddleware() {
  return function(
    err: HttpError,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    req.logger.error(
      { err, req, res },
      `Request error ${req.method} ${req.originalUrl}`
    )

    noticeError(err)

    res.set('Cache-Control', null)

    if (!res.headersSent) res.status(err.status || 500)

    if (err.expose) res.send({ errors: [{ title: err.message }] })

    next()
  }
}

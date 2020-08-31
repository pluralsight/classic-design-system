import { NextFunction, Request, Response } from 'express'
import { v4 as uuid } from 'uuid'

declare module 'express-serve-static-core' {
  interface Request {
    correlationId: string
    id: string
  }
}

export function middleware() {
  return (req: Request, res: Response, next: NextFunction) => {
    req.correlationId = (req.headers['x-correlation-id'] as string) || uuid()
    res.setHeader('x-correlation-id', req.correlationId)

    req.id = uuid()
    res.setHeader('x-request-id', req.id)

    next()
  }
}

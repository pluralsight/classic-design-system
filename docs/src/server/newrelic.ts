import Logger from 'bunyan'
import { HttpError } from 'http-errors'

import { getConfig } from './config'

const { newRelicEnabled: enabled } = getConfig()

const newrelic = enabled ? require('newrelic') : undefined

export default newrelic

export function interceptCrashes(logger: Logger, ps: NodeJS.Process = process) {
  ps.on('uncaughtException', handleUncaughtError)
  ps.on('unhandledRejection', handleUncaughtError)

  function handleUncaughtError(err: Error) {
    logger.fatal({ err }, 'Uncaught error')

    if (!enabled || !newrelic) {
      process.nextTick(() => process.exit(1))
      return
    }

    newrelic.noticeError(err)
    newrelic.shutdown({ collectPendingData: true }, handleShutdown)
  }

  function handleShutdown(err: Error) {
    if (err) logger.error({ err }, 'Error shutting down newrelic agent')

    process.exit(1)
  }
}

export function noticeError(err: Error | HttpError) {
  if (!enabled || !newrelic) return
  if (err instanceof HttpError && isClientError(err)) return

  newrelic.noticeError(err)
}

export function isClientError(err: HttpError): boolean {
  return inRange(err.status, 400, 499)
}

export function inRange(x: number, min: number, max: number): boolean {
  return (x - min) * (x - max) <= 0
}

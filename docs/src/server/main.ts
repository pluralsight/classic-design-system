// NOTE: must be first line/import
import { interceptCrashes } from './newrelic'

import http from 'http'
import { AddressInfo } from 'net'

import { createApp } from './app'
import { getConfig } from './config'
import { createLogger } from './logger'

async function main() {
  const config = getConfig()
  const logger = createLogger(config.appName)

  interceptCrashes(logger)

  const app = await createApp(logger)
  const server = http.createServer(app)

  server.listen(config.port, config.host, () => {
    const { address, port } = server.address() as AddressInfo

    logger.info({}, `Listening at http://${address}:${port}/`)
  })
}

void main()

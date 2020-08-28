/* eslint-disable */
'use strict'

exports.config = {
  agent_enabled: process.env.NEW_RELIC_ENABLED,
  allow_all_headers: true,
  app_name: process.env.NEW_RELIC_APP_NAME,
  attributes: {
    exclude: [
      'request.headers.authorization',
      'request.headers.cookie',
      'response.headers.authorization',
      'response.headers.cookie',
    ],
  },
  capture_params: true,
  error_collector: {
    ignore_status_codes: ['400', '401', '403', '404'],
  },
  license_key: process.env.NEW_RELIC_LICENSE_KEY,
  logging: {
    filepath: 'stdout',
    level: 'info',
  },
  rules: {
    ignore: ['^/health-check'],
  },
}

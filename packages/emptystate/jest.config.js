import * as path from 'path'
import readPkgUp from 'read-pkg-up'
import { fileURLToPath } from 'url'

import baseConfig from '../../jest/base.config.js'

const { name } = readPkgUp.sync()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  ...baseConfig,
  displayName: name,
  name,
  testMatch: [path.join(__dirname, '/**/*/?(*.)+(spec|test).(js|ts|tsx)')]
}

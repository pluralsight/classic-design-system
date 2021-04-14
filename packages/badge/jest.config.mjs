import * as path from 'path'
import readPkg from 'read-pkg-up'
import { fileURLToPath } from 'url'

import baseConfig from '../../jest/base.config.js'
const {
  packageJson: { name }
} = readPkg.sync()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  ...baseConfig,
  displayName: name,
  name: name,
  testMatch: [path.join(__dirname, '/**/*/?(*.)+(spec|test).(js|ts|tsx)')]
}

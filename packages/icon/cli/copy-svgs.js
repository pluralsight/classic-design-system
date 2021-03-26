import ncpModule from 'ncp'
import * as path from 'path'
import { fileURLToPath } from 'url'

const ncp = ncpModule.ncp
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const src = path.resolve(__dirname, path.join('..', 'src', 'svg'))
const dest = path.resolve(__dirname, path.join('..', 'dist', 'svg'))

ncp.limit = 16

ncp(src, dest, function (err) {
  if (err) {
    return console.error(err)
  }
  console.log('done!')
})

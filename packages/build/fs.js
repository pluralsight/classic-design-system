const { promisify } = require('util')

const fs = require('fs')
const ifs = require('idempotent-fs')

module.exports = {
  copyFile: promisify(fs.copyFile),
  mkdir: promisify(ifs.mkdir),
  readFile: promisify(fs.readFile),
  writeFile: promisify(fs.writeFile)
}

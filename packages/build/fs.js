// TODO: upgrade node 8, rm this for util.promisify
const promisify = require('promisify-node')

const fs = require('fs')
const ifs = require('idempotent-fs')

module.exports = {
  mkdir: promisify(ifs.mkdir),
  readFile: promisify(fs.readFile),
  writeFile: promisify(fs.writeFile)
}

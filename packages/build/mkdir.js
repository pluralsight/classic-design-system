// TODO: consolidate into ./fs.js
const { promisify } = require('util')

const fs = require('idempotent-fs')

module.exports = promisify(fs.mkdir)

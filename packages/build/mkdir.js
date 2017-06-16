// TODO: upgrade node 8, rm this for util.promisify
const promisify = require('promisify-node')

const fs = require('idempotent-fs')

module.exports = promisify(fs.mkdir)

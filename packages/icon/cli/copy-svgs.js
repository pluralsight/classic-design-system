const ncp = require('ncp').ncp
const path = require('path')

const src = path.resolve(__dirname, '../src/svg')
const dest = path.resolve(__dirname, '../dist/svg')

ncp.limit = 16

ncp(src, dest, function (err) {
  if (err) {
    return console.error(err)
  }
  console.log('done!')
})

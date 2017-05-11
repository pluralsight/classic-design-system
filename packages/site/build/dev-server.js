const koa = require('koa')
const mount = require('koa-mount')
const path = require('path')
const serve = require('koa-static')

const app = new koa()

const generatedSiteDir = path.resolve(path.join(__dirname, '..', '..', '..', 'docs'))

app.use(mount('/roboto', serve(generatedSiteDir)))

app.listen(1337)

console.log('Dev server listening at http://localhost:1337 ...')

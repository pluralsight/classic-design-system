module.exports = require('./dist/cjs/react/index.js')

const vars = require('./dist/cjs/vars/index.js')
Object.keys(vars).forEach(key => (exports[key] = vars[key]))

const js = require('./dist/cjs/js/index.js')
Object.keys(js).forEach(key => (exports[key] = js[key]))

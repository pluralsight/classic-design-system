module.exports = require('./dist/cjs/react/index.js')

const vars = require('./dist/cjs/vars/index.js')
Object.keys(vars).forEach(key => (exports[key] = vars[key]))

const icons = require('./dist/cjs/react/icons/index.js')
Object.keys(icons).forEach(key => (exports[key] = icons[key]))

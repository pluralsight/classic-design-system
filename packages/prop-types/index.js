const isProd = process && process.env && process.env.NODE_ENV === 'production'
module.exports = isProd ? require('./dist/stubs') : require('./dist')

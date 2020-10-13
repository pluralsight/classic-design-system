module.exports =
  process.env.NODE_ENV === 'production'
    ? require('./dist/stubs/index.js')
    : require('./dist/index.js')

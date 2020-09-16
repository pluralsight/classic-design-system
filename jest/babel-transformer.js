module.exports = require('babel-jest').createTransformer({
  rootMode: 'upward',
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript'
      ]
    }
  }
})

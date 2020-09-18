module.exports = async ({ config }) => {
  config.module.rules.push({
    exclude: /node_modules/,
    loader: 'babel-loader',
    test: /\.(ts|js)x?$/
  })

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}

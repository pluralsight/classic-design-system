const path = require('path')

const error = msg => {
  throw new Error(msg)
}

const validateOptions = options => {
  if (!(options && options.packageJson))
    error(
      "#decorateConfig requires `options.packageJson` to be populated. For example: { packageJson: require('./package.json') }"
    )
}

const validateRules = config =>
  config.module.rules.forEach(rules => {
    if (!rules.include) {
      error(
        'The following rules config is missing an "include" value: ${rules.test}. This is required by #decorateConfig in order to avoid rules clashes. See https://webpack.github.io/docs/configuration.html#module-loaders'
      )
    }
  })

const commonRules = include => [
  {
    test: /\.js/,
    use: [require.resolve('babel-loader')],
    include
  },
  {
    test: /\.module\.css$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[local]___[hash:base64:5]'
        }
      },
      require.resolve('postcss-loader')
    ],
    include
  }
]

const prepForDecoration = config => {
  config.module = config.module || {}
  config.module.rules = config.module.rules || []
  return config
}

const getDependencies = pkgJson =>
  Object.keys(pkgJson.devDependencies || []).concat(
    Object.keys(pkgJson.dependences || [])
  )

const relatedToDesignSystem = dep => /^@pluralsight\/ps-.*$/.test(dep)

const dependencyDirName = dep => path.dirname(require.resolve(dep))

const decorateRules = (config, options) => {
  const designSystemPaths = getDependencies(options.packageJson)
    .filter(relatedToDesignSystem)
    .map(dependencyDirName)

  config.module.rules = config.module.rules.concat(
    commonRules(designSystemPaths)
  )
  return config
}

const decorateConfig = (config, options) => {
  // TODO: handle extracttextplugin initialization

  validateOptions(options)
  validateRules(config)

  config = decorateRules(config, options)

  // TODO: decorate plugins for extracttextplugin

  return config
}

module.exports = {
  decorateConfig
}

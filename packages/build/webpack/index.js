const path = require('path')
const chalk = require('chalk')

const error = msg => {
  throw new Error(msg)
}

const info = msg => console.log(chalk.dim(msg))

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

const browserlist = ['Last 2 versions', 'IE >= 10']

const defaultOptions = {
  autoprefixer: browserlist,
  postcssCssnext: { browsers: browserlist }
}

const commonRules = (options, include) => [
  {
    test: /\.js/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          presets: [
            require.resolve('babel-preset-react'),
            require.resolve('babel-preset-stage-2'),
            [
              require.resolve('babel-preset-env'),
              { targets: { browsers: browserlist } }
            ]
          ]
        }
      }
    ],
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
      {
        loader: require.resolve('postcss-loader'),
        options: {
          plugins: _ => [
            require('postcss-import')(),
            require('postcss-cssnext')(options.postcssCssnext)
          ]
        }
      }
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

  designSystemPaths
    .map(p => `ps-design-system-build: module.rule.include ${p}`)
    .map(info)

  config.module.rules = config.module.rules.concat(
    commonRules(options, designSystemPaths)
  )
  return config
}

const decorateConfig = (config, options) => {
  // TODO: handle extracttextplugin initialization
  options = Object.assign({}, defaultOptions, options)

  validateOptions(options)
  validateRules(config)

  config = decorateRules(config, options)

  // TODO: decorate plugins for extracttextplugin

  return config
}

module.exports = {
  decorateConfig
}

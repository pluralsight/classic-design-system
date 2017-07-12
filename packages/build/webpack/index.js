const path = require('path')
const chalk = require('chalk')

const error = msg => {
  throw new Error(err(msg))
}

const fmt = msg => `ps-design-system-build: ${msg}`
const info = msg => console.log(chalk.dim(fmt(msg)))
const warn = msg => console.log(chalk.yellow(fmt(msg)))
const err = msg => console.log(chalk.red(fmt(msg)))

const validateOptions = options => {
  if (!(options && options.packageJson))
    error(
      "#decorateConfig requires `options.packageJson` to be populated. For example: { packageJson: require('./package.json') }"
    )
}

const validateRules = (config, options) =>
  config.module.rules.forEach(rules => {
    if (!rules.include) {
      if (rules.exclude) {
        warn(
          `module.rule ${rules.test} uses "exclude". This may be fine. "include" is recommended as a safer alternative to avoid clashing rules with the design system. See https://webpack.js.org/configuration/module/#rule-include`
        )
      } else if (!options.defaultInclude) {
        error(
          `module.rule {$rules.test} is missing an "include" property and no "defaultInclude" options has been given to #decorateConfig.  Please implement one or the other avoid rule clashes with the design system. See https://webpack.js.org/configuration/module/#rule-include`
        )
      }
    }
  })

const browserlist = ['Last 2 versions', 'IE >= 10']

const defaultOptions = {
  defaultInclude: null,
  extraInclude: [],
  extractTextPlugin: null,
  postcssCssnext: { browsers: browserlist }
}

const decorateStyleLoaders = options =>
  options.extractTextPlugin
    ? loaders =>
        options.extractTextPlugin.extract({
          fallback: require.resolve('style-loader'),
          use: loaders
        })
    : loaders => [require.resolve('style-loader'), ...loaders]

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
    use: decorateStyleLoaders(options)([
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
    ]),
    include
  },
  {
    test: /\.svg$/,
    use: [
      require.resolve('babel-loader'),
      {
        loader: require.resolve('string-replace-loader'),
        options: {
          multiple: [
            {
              search: ' {...this.props}',
              replace: ''
            },
            {
              search: 'className=(\'|")([^\'"]+)(\'|")',
              replace: "className={(this.props.css || {})['$2']}",
              flags: 'g'
            }
          ]
        }
      },
      require.resolve('react-svg-loader')
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
    Object.keys(pkgJson.dependencies || [])
  )

const relatedToDesignSystem = dep => /^@pluralsight\/ps-.*$/.test(dep)

const dependencyDirName = dep => path.dirname(require.resolve(dep))

const decorateRules = (config, options) => {
  const designSystemPaths = getDependencies(options.packageJson)
    .filter(relatedToDesignSystem)
    .map(dependencyDirName)
    .concat(options.extraInclude)

  designSystemPaths.map(p => info(`module.rule.include ${p}`))

  config.module.rules = config.module.rules.concat(
    commonRules(options, designSystemPaths)
  )

  config.module.rules = config.module.rules.map(r => {
    if (!(r.exclude || r.include)) {
      r.include = options.defaultInclude
    }
    return r
  })

  return config
}

const decorateConfig = (config, options) => {
  options = Object.assign({}, defaultOptions, options)
  prepForDecoration(config)

  validateOptions(options)
  validateRules(config, options)

  config = decorateRules(config, options)

  return config
}

module.exports = {
  decorateConfig
}

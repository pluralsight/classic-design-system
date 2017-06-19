const {
  decorateConfig
} = require('@pluralsight/ps-design-system-build/webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackTemplate = require('html-webpack-template')
const path = require('path')

module.exports = decorateConfig(
  {
    entry: './src/index.js',
    module: {
      rules: [
        {
          // NOTE: you'll still rarely get out of building your app react code
          test: /\.js/,
          use: ['babel-loader'],
          include: [path.resolve('src')]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: htmlWebpackTemplate,
        appMountId: 'app',
        // NOTE: get your non-component css some old-fashioned way
        links: [
          'node_modules/@pluralsight/ps-design-system-normalize/index.css',
          'node_modules/@pluralsight/ps-design-system-core/dist/index.css',
          'src/app.css'
        ]
      })
    ]
  },
  { packageJson: require('./package.json') }
)

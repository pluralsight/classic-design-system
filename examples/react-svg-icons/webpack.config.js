const {
  decorateConfig
} = require('@pluralsight/ps-design-system-build/webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackTemplate = require('html-webpack-template')
const path = require('path')

module.exports = decorateConfig(
  {
    entry: './src/index.js',
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: htmlWebpackTemplate,
        appMountId: 'app'
      })
    ]
  },
  {
    extraInclude: [path.resolve('src')],
    packageJson: require('./package.json')
  }
)

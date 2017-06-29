const {
  decorateConfig
} = require('@pluralsight/ps-design-system-build/webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackTemplate = require('html-webpack-template')
const path = require('path')

const extractTextPlugin = new ExtractTextPlugin({
  filename: '[name].[hash].css'
})

module.exports = decorateConfig(
  {
    entry: './src/index.js',
    output: {
      path: path.resolve('dist'),
      filename: '[name].[hash].js'
    },
    plugins: [
      extractTextPlugin,
      new HtmlWebpackPlugin({
        inject: false,
        template: htmlWebpackTemplate,
        appMountId: 'app'
      })
    ]
  },
  {
    extractTextPlugin,
    extraInclude: [path.resolve('src')],
    packageJson: require('./package.json')
  }
)

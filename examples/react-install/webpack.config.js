const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackTemplate = require('html-webpack-template')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          {
            loader: 'babel-loader',
            options: { babelrc: false, presets: ['es2015', 'react'] }
          }
        ],
        include: path.resolve('src')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: htmlWebpackTemplate,
      appMountId: 'app',
      links: [
        'https://cloud.typography.com/6966154/691568/css/fonts.css',
        'node_modules/@pluralsight/ps-design-system-normalize/dist/index.css',
        'src/app.css'
      ]
    })
  ]
}

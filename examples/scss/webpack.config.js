const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackTemplate = require('html-webpack-template')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: { babelrc: false, presets: ['react', 'es2015'] }
          }
        ],
        include: [path.resolve('src')]
      },
      {
        test: /\.module\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          'sass-loader'
        ],
        include: [path.resolve('src')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: htmlWebpackTemplate,
      appMountId: 'app',
      // NOTE: because sass importing is weird
      links: [
        'https://cloud.typography.com/6966154/691568/css/fonts.css',
        'node_modules/@pluralsight/ps-design-system-normalize/index.css'
      ]
    })
  ]
}

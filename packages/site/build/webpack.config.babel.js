const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

module.exports = {
  entry: {
    index: path.join(__dirname, '..', 'index.js')
  },

  output: {
    filename: 'index.js',
    path: path.resolve(path.join(__dirname, '..', '..', '..', 'docs')),
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'react-svg-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'import-react-loader',
          'react-styleable-classname-loader',
          'rename-jsx-attributes-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[local]___[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new StaticSiteGeneratorPlugin({
      basename: '/design-system',
      crawl: true
    })
  ],

  resolveLoader: {
    alias: {
      'import-react-loader': path.join(__dirname, 'import-react-loader.js'),
      'react-html-loader': path.join(__dirname, 'react-html-loader/index.js'),
      'react-markdown-loader': path.join(
        __dirname,
        'react-markdown-loader/index.js'
      ),
      'react-styleable-classname-loader': path.join(
        __dirname,
        'react-styleable-classname-loader.js'
      ),
      'rename-jsx-attributes-loader': path.join(
        __dirname,
        'rename-jsx-attributes-loader.js'
      )
    }
  }
}

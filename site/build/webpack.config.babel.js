const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['react', 'stage-2']
  }
}

module.exports = {
  entry: {
    index: path.join(__dirname, '..', 'index.js')
  },

  output: {
    filename: 'index.js',
    path: path.resolve('docs'),
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [babelLoader]
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: [babelLoader, 'react-markdown-loader']
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          babelLoader,
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
          use: {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new StaticSiteGeneratorPlugin({
      crawl: true
    })
  ],

  resolveLoader: {
    alias: {
      'import-react-loader': path.join(__dirname, 'import-react-loader.js'),
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

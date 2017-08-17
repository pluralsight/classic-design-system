const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackTemplate = require('html-webpack-template')
const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

const extractTextPlugin = new ExtractTextPlugin('styles.css')

const isProd = process.NODE_ENV === 'production'

const plugins = [extractTextPlugin]

if (isProd) {
  plugins.push(
    new StaticSiteGeneratorPlugin({
      basename: '/design-system',
      crawl: true
    })
  )
} else {
  plugins.push(
    new HtmlWebpackPlugin({
      inject: false,
      template: htmlWebpackTemplate,
      title: 'Pluralsight Design System',
      appMountId: 'app'
    })
  )
}

module.exports = {
  entry: {
    index: path.join(__dirname, '..', 'src', 'index.js')
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
        use: [
          'babel-loader',
          {
            loader: 'string-replace-loader',
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
          'react-svg-loader'
        ]
      },
      // TODO: put src into subdir so can use build/webpack/decorateConfig to also run over site src
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
        test: /\.module\.css$/,
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
      },
      {
        test: /^(?!.*?\.module).*\.css$/,
        include: /codemirror/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }
    ]
  },
  plugins,
  devServer: {
    port: 1337
  },
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
      ),
      'code-example-dependencies-loader': path.join(
        __dirname,
        'code-example-dependencies-loader.js'
      )
    }
  }
}

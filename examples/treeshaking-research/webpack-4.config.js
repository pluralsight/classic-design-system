const webpack = require('webpack');
const path = require('path');

const config = {
  devtool: false,
  externals: {
    react: 'react',
    'glamor': 'glamor',
    'react-dom': 'react-dom'
  },
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build-webpack-4'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
};

module.exports = config;
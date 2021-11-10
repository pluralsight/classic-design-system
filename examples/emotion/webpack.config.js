const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules', '@pluralsight'),
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.css', '.ts', '.tsx', '.js' ]
  }
}

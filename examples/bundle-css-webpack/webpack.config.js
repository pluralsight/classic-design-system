const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.js$/, use: [{ loader: 'babel-loader' }] },
      {
        test: /\.css/,
        sideEffects: true, // temp test until sideeffects added to avatar
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules', '@pluralsight'),
        ],
      },
    ],
  },
}

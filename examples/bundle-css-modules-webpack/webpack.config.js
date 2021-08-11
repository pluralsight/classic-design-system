const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
    clean: true,
    publicPath: '/',
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      { test: /\.js$/, use: [{ loader: 'babel-loader' }] },
      {
        test: /\.css/,
        sideEffects: true, // temp test until sideeffects added to avatar
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            modules: {
              mode: (resourcePath) => {
                if (resourcePath.includes('@pluralsight/ps-design-system')) {
                  return "global";
                }
                return "local";
              },
              localIdentName: '[local]__[hash:base64:5]',
            },
          },
        }, 'postcss-loader'],
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules', '@pluralsight'),
        ],
      },
    ],
  },
}

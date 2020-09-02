/* eslint-env node */
/* eslint-disable */

const presetEnvPlugin = require('postcss-preset-env')
const importPlugin = require('postcss-import')

module.exports = {
  plugins: [
    importPlugin(),
    presetEnvPlugin({
      browsers: ['Last 2 versions', 'IE >= 11'],
      stage: 2,
    }),
  ],
}

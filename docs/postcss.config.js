/* eslint-env node */
/* eslint-disable */

const mediaPlugin = require('postcss-custom-media')
const presetEnvPlugin = require('postcss-preset-env')
const importPlugin = require('postcss-import')

module.exports = {
  plugins: [
    importPlugin(),
    mediaPlugin(),
    presetEnvPlugin({
      browsers: ['Last 2 versions', 'IE >= 11'],
      stage: 1,
    }),
  ],
}

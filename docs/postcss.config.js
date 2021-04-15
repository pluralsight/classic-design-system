/* eslint-env node */
/* eslint-disable */

const presetEnvPlugin = require('postcss-preset-env')
const importPlugin = require('postcss-import')

module.exports = {
  plugins: [
    importPlugin(),
    presetEnvPlugin({
      browsers: 'last 2 versions',
      features: {
        'nesting-rules': true
      },
      stage: 1
    })
  ]
}

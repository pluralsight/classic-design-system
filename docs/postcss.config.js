/* eslint-env node */
/* eslint-disable */

const core = require('@pluralsight/ps-design-system-core')
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
      importFrom: [
        {
          customMedia: {
            '--breakpoint-x-small': `(width >= ${core.breakpoints.xSmall})`,
            '--breakpoint-small': `(width >= ${core.breakpoints.small})`,
            '--breakpoint-medium': `(width >= ${core.breakpoints.medium})`,
            '--breakpoint-large': `(width >= ${core.breakpoints.large})`,
            '--breakpoint-xLarge': `(width >= ${core.breakpoints.xLarge})`
          }
        }
      ],
      stage: 1
    })
  ]
}

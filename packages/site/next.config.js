const { parsed: localEnv } = require('dotenv').config()

const path = require('path')
const util = require('util')

const glob = require('glob')
const globAsync = util.promisify(glob)
const webpack = require('webpack')

module.exports = {
  exportPathMap: async function (defaultPathMap) {
    const files = await globAsync(`pages/**/*.js`)
    const matchExtension = /\.[^/.]+$/

    const pathMap = files
      .map(filename => filename.replace('pages', ''))
      .map(filename => filename.replace(matchExtension, ''))
      .map(filename => filename.replace(/^\/index/i, '/')) // home page
      .map(filename => filename.replace('/index', '')) // strip trailing file path from dir index
      .filter(filename => !filename.startsWith('/_')) // remove nextjs template overrides
      .reduce(
        (acc, filename) => ({ ...acc, [filename]: { page: filename } }),
        {}
      )

    return pathMap
  },

  webpack(config, options) {
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()
      if (entries['main.js']) {
        entries['main.js'].unshift('./src/polyfills.js')
      }
      return entries
    }

    config.plugins = config.plugins
      .filter(
        plugin =>
          plugin &&
          plugin.constructor &&
          plugin.constructor.name !== 'UglifyJsPlugin'
      )
      .concat([new webpack.EnvironmentPlugin(localEnv)])

    config.resolve = Object.assign({}, config.resolve, {
      alias: Object.assign({}, (config.resolve || {}).alias, {
        react: path.resolve(
          __dirname,
          '..',
          '..',
          'node_modules',
          'react',
          'index.js'
        ),
        'react-dom': path.resolve(
          __dirname,
          '..',
          '..',
          'node_modules',
          'react-dom',
          'index.js'
        )
      })
    })

    return config
  }
}

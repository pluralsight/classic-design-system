const path = require('path')
const postcssCssNext = require('postcss-cssnext')
const postcssDiscardComments = require('postcss-discard-comments')
const postcssImport = require('postcss-import')

const mkdir = require('../mkdir')
const postcss = require('../postcss')

const defaultOptions = {
  src: path.join('css', 'index.module.css'),
  output: path.join('dist', 'index.css')
}

const autoprefixerOptions = { browsers: 'last 4 versions' }

module.exports = async options => {
  options = Object.assign({}, defaultOptions, options)

  await mkdir(options.output.split('/')[0])

  // TODO: remove file writing from this function so we can minify then write
  postcss.transform(options.src, options.output, [
    postcssImport,
    postcssDiscardComments,
    postcssCssNext(autoprefixerOptions)
  ])
}

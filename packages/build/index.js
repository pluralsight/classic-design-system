const buildComponentCss = require('./components/build-css')
const buildComponentJs = require('./components/build-js')
const mkdir = require('./mkdir')
const postcss = require('./postcss')

module.exports = {
  buildComponentCss,
  buildComponentJs,
  mkdir,
  postcss
}

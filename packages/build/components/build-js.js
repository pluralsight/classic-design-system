const babel = require('babel-core')
const babelPresetEs2015 = require('babel-preset-es2015')
const babelPresetReact = require('babel-preset-react')
const babelPresetStage2 = require('babel-preset-stage-2')
const path = require('path')
const promisify = require('promisify-node')

const fs = require('../fs')

const transformFile = promisify(babel.transformFile)

const defaultOptions = {
  plugins: [],
  presets: [babelPresetEs2015, babelPresetReact, babelPresetStage2],
  src: path.join('react', 'index.js'),
  output: path.join('dist', 'react.js')
}

module.exports = async options => {
  options = Object.assign({}, defaultOptions, options)

  // TODO: use path.dirname
  await fs.mkdir(options.output.split('/')[0])

  try {
    const { code } = await transformFile(options.src, {
      babelrc: false,
      plugins: [],
      presets: options.presets
    })

    await fs.writeFile(options.output, code)
  } catch (err) {
    console.error('babel: Error transforming js', err)
  }
}

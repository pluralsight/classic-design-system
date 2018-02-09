const path = require('path')

const jsToCss = require('./js-to-css')
const fs = require('../fs')

module.exports = (js, { outputDir }) => {
  try {
    const outputCss = jsToCss(js)

    const cssOutputPath = path.join(outputDir, 'index.css')
    const scssOutputPath = path.join(outputDir, 'index.scss')

    fs.writeFile(cssOutputPath, outputCss)
    fs.writeFile(scssOutputPath, outputCss)
  } catch (err) {
    console.log('css from js generation failed', err)
  }
}

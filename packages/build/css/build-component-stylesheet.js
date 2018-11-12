const fs = require('../fs')
const path = require('path')

const glamorToCss = require('./glamor-to-css')
const jsToCss = require('./js-to-css')

module.exports = (js, { outputDir, useGlamor = false }) => {
  try {
    const outputCss = useGlamor ? glamorToCss(js) : jsToCss(js)

    const cssOutputPath = path.join(outputDir, 'index.css')
    const scssOutputPath = path.join(outputDir, 'index.scss')

    fs.writeFile(cssOutputPath, outputCss)
    fs.writeFile(scssOutputPath, outputCss)
  } catch (err) {
    console.log('css from js generation failed', err)
  }
}

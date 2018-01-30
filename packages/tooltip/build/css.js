const path = require('path')
const { fs, css } = require('@pluralsight/ps-design-system-build')

const js = require('../dist/css/index').default

try {
  const outputCss = css.jsToCss(js)

  const cssOutputPath = path.join(__dirname, '..', 'dist', 'css', 'index.css')
  const scssOutputPath = path.join(__dirname, '..', 'dist', 'css', 'index.scss')

  fs.writeFile(cssOutputPath, outputCss)
  fs.writeFile(scssOutputPath, outputCss)
} catch (err) {
  console.log('css from js generation failed', err)
}

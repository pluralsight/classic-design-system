const path = require('path')

const { fs, css } = require('@pluralsight/ps-design-system-build')
const js = require('../dist/css/index').default

const outputPath = path.join(__dirname, '..', 'dist', 'css', 'index.css')
fs.writeFile(outputPath, css.jsToCss(js))

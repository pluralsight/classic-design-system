const path = require('path')
const { fs, postcss } = require('@pluralsight/ps-design-system-build')

;(async _ => {
  await fs.mkdir('dist')

  const src = path.join('css', 'index.css')

  postcss.transform(src, path.join('dist', 'index.css'), [
    require('postcss-import'),
    require('postcss-cssnext')({ browsers: ['Last 2 versions', 'IE >= 11'] }),
    require('cssnano')
  ])
})()

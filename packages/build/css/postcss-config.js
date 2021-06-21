const path = require('path')

module.exports = {
  plugins: [
    require('postcss-nesting'),
    require('postcss-preset-env')({
      browsers: ['Last 2 versions', 'IE >= 11'],
      importFrom: [
        coreCssPathTo('breakpoints.module.css'),
        coreCssPathTo('colors.module.css'),
        coreCssPathTo('layers.module.css'),
        coreCssPathTo('layout.module.css'),
        coreCssPathTo('type.module.css'),
        coreCssPathTo('motion.module.css')
      ]
    })
  ]
}

function coreCssPathTo(filename) {
  path.join(__dirname, '..', '..', 'core', 'src', 'css', filename)
}

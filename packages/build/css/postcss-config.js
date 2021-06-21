module.exports = {
  plugins: [
    require('postcss-nesting'),
    require('postcss-preset-env')({
      browsers: ['Last 2 versions', 'IE >= 11'],
      importFrom: [
        '../core/dist/css/breakpoints.module.css',
        '../core/dist/css/colors.module.css',
        '../core/dist/css/layers.module.css',
        '../core/dist/css/layout.module.css',
        '../core/dist/css/type.module.css',
        '../core/dist/css/motion.module.css'
      ]
    })
  ]
}

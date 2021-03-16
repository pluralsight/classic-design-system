module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nesting'),
    require('postcss-custom-properties')({
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

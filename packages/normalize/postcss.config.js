module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: '2',
      preserve: true,
      features: { 'nesting-rules': true }
    }),
    require('cssnano')()
  ]
}

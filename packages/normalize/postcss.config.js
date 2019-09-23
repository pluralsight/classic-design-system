module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      browsers: 'last 2 versions, IE <= 10',
      stage: '2',
      preserve: true,
      features: { 'nesting-rules': true }
    }),
    require('cssnano')()
  ]
}

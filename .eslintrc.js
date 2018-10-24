module.exports = {
  extends: ['standard', 'standard-react', 'plugin:jest/recommended'],
  plugins: ['jest'],
  env: {
    'jest/globals': true
  },
  overrides: [
    {
      files: ['*.spec.js', '*.story.js'],
      rules: {
        'no-unused-vars': 'warning'
      }
    }
  ]
}

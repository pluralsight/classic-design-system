const IGNORE = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  extends: ['standard', 'standard-react', 'plugin:jest/recommended'],
  plugins: ['jest'],
  env: {
    'jest/globals': true
  }
}

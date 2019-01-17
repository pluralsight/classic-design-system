const IGNORE = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
    'plugin:jest/recommended'
  ],
  plugins: ['jest'],
  env: {
    'jest/globals': true
  },
  rules: {
    'react/jsx-no-bind': [IGNORE]
  }
}

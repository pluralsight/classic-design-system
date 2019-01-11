const IGNORE = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  env: {
    es6: true,
    'jest/globals': true
  },
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
    'plugin:jest/recommended',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  plugins: ['jest', 'react']
}

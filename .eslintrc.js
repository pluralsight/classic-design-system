const IGNORE = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'standard',
    'standard-react',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard'
  ],
  plugins: ['jest', 'react', 'react-hooks', 'prettier'],
  rules: {
    'import/extensions': [WARNING, 'always', { ignorePackages: true }],
    'react-hooks/exhaustive-deps': WARNING,
    'react-hooks/rules-of-hooks': ERROR,
    'react/display-name': WARNING,
    'react/jsx-no-bind': IGNORE,
    'react/jsx-pascal-case': IGNORE,
    'react/no-unescaped-entities': WARNING
  },
  overrides: [
    {
      files: ['packages/site/pages/**/*.js', '**/__stories__/*.js'],
      rules: {
        'react/jsx-key': [IGNORE]
      }
    }
  ]
}

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
    'plugin:jest/recommended'
  ],
  plugins: ['jest', 'react', 'react-hooks'],
  env: {
    'jest/globals': true
  },
  rules: {
    'import/extensions': [WARNING, 'always', { ignorePackages: true }],
    'react-hooks/exhaustive-deps': WARNING,
    'react-hooks/rules-of-hooks': ERROR,
    'react/jsx-no-bind': [IGNORE]
  },
  overrides: [
    {
      files: ['packages/site/pages/**/*.js', '**/__stories__/*.js'],
      rules: {
        'react/jsx-key': [WARNING]
      }
    }
  ]
}

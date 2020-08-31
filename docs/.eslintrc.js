/* eslint-env node */

const IGNORE = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  root: true,
  env: {
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': IGNORE,
    '@typescript-eslint/interface-name-prefix': IGNORE,
    '@typescript-eslint/no-empty-function': WARNING,
    '@typescript-eslint/no-empty-interface': IGNORE,
    '@typescript-eslint/no-non-null-assertion': IGNORE,
    '@typescript-eslint/no-unsafe-assignment': IGNORE,
    '@typescript-eslint/no-unsafe-call': IGNORE,
    '@typescript-eslint/no-unsafe-member-access': IGNORE,
    '@typescript-eslint/no-use-before-define': [
      ERROR,
      { classes: false, functions: false, variables: false },
    ],
    '@typescript-eslint/no-unused-vars': [ERROR, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/require-await': WARNING,
    'prettier/prettier': ERROR,
  },
}

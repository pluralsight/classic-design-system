const IGNORE = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'standard',
    'standard-react',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/standard',
    'prettier/react',
    'prettier/flowtype',
    'prettier/@typescript-eslint',

    // NOTE: this must be the last item in the array
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'jest', 'react', 'react-hooks', 'prettier'],
  rules: {
    'import/extensions': [WARNING, 'always', { ignorePackages: true }],
    '@typescript-eslint/explicit-function-return-type': IGNORE,
    '@typescript-eslint/explicit-module-boundary-types': IGNORE,
    '@typescript-eslint/interface-name-prefix': IGNORE,
    '@typescript-eslint/no-empty-function': WARNING,
    '@typescript-eslint/no-empty-interface': IGNORE,
    '@typescript-eslint/no-non-null-assertion': IGNORE,
    '@typescript-eslint/no-this-alias': WARNING,
    '@typescript-eslint/no-unsafe-assignment': IGNORE,
    '@typescript-eslint/no-unsafe-call': IGNORE,
    '@typescript-eslint/no-unsafe-member-access': IGNORE,
    '@typescript-eslint/no-unsafe-return': IGNORE,
    '@typescript-eslint/no-use-before-define': [
      ERROR,
      { classes: false, functions: false, variables: false },
    ],
    '@typescript-eslint/no-extra-semi': IGNORE,
    '@typescript-eslint/no-floating-promises': IGNORE,
    '@typescript-eslint/no-unused-vars': [WARNING, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-var-requires': IGNORE,
    '@typescript-eslint/require-await': IGNORE,
    '@typescript-eslint/restrict-plus-operands': WARNING,
    '@typescript-eslint/restrict-template-expressions': WARNING,
    '@typescript-eslint/unbound-method': WARNING,
    'no-unused-expressions': IGNORE,
    'no-use-before-define': IGNORE,
    'prettier/prettier': ERROR,
    'react-hooks/exhaustive-deps': WARNING,
    'react-hooks/rules-of-hooks': ERROR,
    'react/display-name': IGNORE,
    'react/jsx-no-bind': IGNORE,
    'react/jsx-pascal-case': IGNORE,
    'react/no-unescaped-entities': WARNING,
    'react/prop-types': IGNORE,
  },
  overrides: [
    {
      files: ['packages/site/pages/**/*.js', '**/__stories__/*.js'],
      rules: {
        'react/jsx-key': IGNORE,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/extensions': IGNORE,
        'react/display-name': IGNORE,
        'react/prop-types': IGNORE,
      },
    },
    {
      files: ['*.json'],
      rules: {
        'no-unused-expressions': IGNORE,
      },
    },
  ],
}

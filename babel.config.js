const { packages } = require('./lerna.json')
const esm = process.env.ESM
module.exports = api => {
  const isTest = api.env('test')

  let ignore = ['**/dist/']

  if (!isTest) ignore = ignore.concat(['**/__specs__/', '**/__stories__/'])

  return {
    babelrcRoots: ['.', ...packages],

    ignore,

    presets: [
      '@babel/preset-react',
      esm ? ['@babel/preset-env', { modules: false }] : '@babel/preset-env'
    ],

    plugins: [
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-json-strings',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      'macros'
    ]
  }
}

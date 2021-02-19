const path = require('path')

const presetEnv = require('postcss-preset-env')
const atImport = require('postcss-import')

const { fs, postcss } = require('@pluralsight/ps-design-system-build')

async function main() {
  await fs.mkdir('dist')

  await buildCssOutput()
  await buildSassOutput()
}

main()

async function buildCssOutput() {
  const input = path.join('src', 'css', 'index.css')
  const output = path.join('dist', 'index.css')

  const propNameTests = [
    { match: /psMotion/, props: ['transition-duration'] },
    { match: /psTypeFontFamily/, props: ['font-family'] },
    { match: /psTypeFontSize/, props: ['font-size'] },
    { match: /psTypeLetterSpacing/, props: ['letter-spacing'] },
    { match: /psTypeFontWeight/, props: ['font-weight'] },
    { match: /psTypeLineHeight/, props: ['line-height'] },
    {
      match: /psLayoutSpacing/,
      props: [
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left'
      ]
    },
    { match: /psColors/, props: ['color', 'background-color'] }
  ]

  const transforms = [
    atImport(),
    presetEnv({
      stage: '2',
      preserve: true,
      features: { 'nesting-rules': true }
    }),
    postcss.postcssCssVarSelectors({ propNameTests })
  ]

  postcss.transform(input, output, transforms)
}

async function buildSassOutput() {
  const input = path.join('src', 'css', 'index.css')
  const output = path.join('dist', 'index.module.scss')

  const transforms = [
    atImport(),
    presetEnv({
      stage: '2',
      preserve: true,
      features: { 'nesting-rules': true }
    }),
    postcss.postcssCssVarSassVar()
  ]

  postcss.transform(input, output, transforms)
}

import { fs, postcss } from '@pluralsight/ps-design-system-build'
import globby from 'globby'
import * as path from 'path'
import presetEnv from 'postcss-preset-env'
import atImport from 'postcss-import'

async function main() {
  await fs.mkdir('dist')

  await copyCssModuleSrc()
  await buildCssUtilityOutput()
  await buildSassOutput()
}

main()

async function copyCssModuleSrc() {
  await fs.mkdir(path.join('dist', 'css'))
  const paths = await globby(path.join('src', 'css', '**', '*.css'))

  for (const path of paths) {
    const destPath = path.replace('src', 'dist')
    await fs.copyFile(path, destPath)
  }
}

async function buildCssUtilityOutput() {
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

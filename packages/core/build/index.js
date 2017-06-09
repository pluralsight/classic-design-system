// TODO: upgrade node 8, rm this for util.promisify
const promisify = require('promisify-node')

const autoprefixer = require('autoprefixer')
const fs = promisify('fs')
const path = require('path')
const { postcss } = require('@pluralsight/ps-design-system-build')
const postcssImport = require('postcss-import')

const autoprefixerOptions = { browsers: 'last 4 versions' }
const propNameTests = [
  { match: /psMotion/, prop: 'transition-duration' },
  { match: /psTypeLineHeight/, prop: 'line-height' },
  { match: /psTypeFontWeight/, prop: 'font-weight' },
  { match: /psTypeLetterSpacing/, prop: 'letter-spacing' },
  { match: /psTypeFontSize/, prop: 'font-size' },
  { match: /psLayoutSpacing/, prop: 'margin' },
  { match: /psColorsGradient/, prop: 'background-color' }
]
const postcssCssVarSelectorsOptions = { propNameTests }
;(async _ => {
  await fs.mkdir('dist')

  const src = path.join('css', 'index.css')
  postcss.transform(src, path.join('dist', 'index.css'), [
    postcssImport,
    postcss.postcssCssVarSelectors(postcssCssVarSelectorsOptions),
    autoprefixer(autoprefixerOptions)
  ])

  postcss.transform(src, path.join('dist', 'index.sass'), [
    postcssImport,
    postcss.postcssCssVarSassVar(),
    autoprefixer(autoprefixerOptions)
  ])
})()

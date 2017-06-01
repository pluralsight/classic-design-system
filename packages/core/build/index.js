const promisify = require('promisify-node')

const autoprefixer = require('autoprefixer')
const fs = promisify('fs')
const path = require('path')
const postcss = require('postcss')
const postcssImport = require('postcss-import')

const postcssCssVarSelectors = require('./postcss-css-var-selectors')

const transformPropName = name => {
  const tests = [
    { match: /psMotion/, prop: 'transition-duration' },
    { match: /psTypeLineHeight/, prop: 'line-height' },
    { match: /psTypeFontWeight/, prop: 'font-weight' },
    { match: /psTypeLetterSpacing/, prop: 'letter-spacing' },
    { match: /psTypeFontSize/, prop: 'font-size' },
    { match: /psLayoutSpacing/, prop: 'margin' },
    { match: /psColorsGradient/, prop: 'background-color' }
  ]

  const match = tests.find(t => t.match.test(name))
  return match ? match.prop : 'color'
}

const autoprefixerOptions = { browsers: 'last 4 versions' }
const postcssCssVarSelectorsOptions = { transformPropName }
const postcssTransformChain = [
  postcssImport,
  postcssCssVarSelectors(postcssCssVarSelectorsOptions),
  autoprefixer(autoprefixerOptions)
]
;(async _ => {
  let css
  try {
    css = await fs.readFile(path.join('css', 'index.css'), 'utf8')
  } catch (err) {
    console.error('Error reading source css: ', err)
    return process.exit(1)
  }

  try {
    const result = await postcss(postcssTransformChain).process(css, {
      from: path.join('css', 'index.css'),
      to: path.join('dist', 'index.css')
    })

    await fs.mkdir('dist')
    await fs.writeFile(path.join('dist', 'index.css'), result.css)

    if (result.map)
      await fs.writeFile(path.join('dist', 'index.css.map'), result.map)
  } catch (err) {
    console.error('Error processing css', err)
    process.exit(1)
  }
})()

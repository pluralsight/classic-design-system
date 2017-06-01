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

const transform = async (src, dest, postcssTransforms) => {
  let css
  try {
    css = await fs.readFile(src, 'utf8')
  } catch (err) {
    console.error('Error reading source css: ', src, err)
    return process.exit(1)
  }

  try {
    const result = await postcss(postcssTransforms).process(css, {
      from: src,
      to: dest
    })

    await fs.writeFile(dest, result.css)

    if (result.map) await fs.writeFile(dest + '.map', result.map)
  } catch (err) {
    console.error('Error processing css', err)
    process.exit(1)
  }
}
;(async _ => {
  await fs.mkdir('dist')

  const src = path.join('css', 'index.css')
  transform(src, path.join('dist', 'index.css'), [
    postcssImport,
    postcssCssVarSelectors(postcssCssVarSelectorsOptions),
    autoprefixer(autoprefixerOptions)
  ])
})()

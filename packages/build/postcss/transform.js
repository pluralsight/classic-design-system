const fs = require('fs')
const { promisify } = require('util')
const postcss = require('postcss')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

module.exports = async function transform(src, dest, postcssTransforms) {
  let css
  try {
    css = await readFile(src, 'utf8')
  } catch (err) {
    console.error('postcss: Error reading source css: ', src, err)
    return Promise.reject(err)
  }

  try {
    const result = await postcss(postcssTransforms).process(css, {
      from: src,
      to: dest
    })

    await writeFile(dest, result.css)

    if (result.map) await writeFile(dest + '.map', result.map)
  } catch (err) {
    console.error('postcss: Error processing css', err)
    return Promise.reject(err)
  }
}

// TODO: upgrade node 8, rm this for util.promisify
const promisify = require('promisify-node')

const fs = promisify('fs')
const postcss = require('postcss')

module.exports = async function transform(src, dest, postcssTransforms) {
  let css
  try {
    css = await fs.readFile(src, 'utf8')
  } catch (err) {
    console.error('postcss: Error reading source css: ', src, err)
    return Promise.reject(err)
  }

  try {
    const result = await postcss(postcssTransforms).process(css, {
      from: src,
      to: dest
    })

    await fs.writeFile(dest, result.css)

    if (result.map) await fs.writeFile(dest + '.map', result.map)
  } catch (err) {
    console.error('postcss: Error processing css', err)
    return Promise.reject(err)
  }

  return Promise.resolve(result.css)
}

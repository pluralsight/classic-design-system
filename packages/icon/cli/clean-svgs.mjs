import { promises as fs } from 'fs'
import fg from 'fast-glob'
import path from 'path'
import SVGO from 'svgo'

const svgo = new SVGO({
  plugins: [
    { removeXMLNS: true },
    { removeDimensions: true },
    { removeAttrs: { attrs: '(stroke|fill)' } }
  ]
})

const ariaLabelRegEx = /aria-label=(?:"|')([\w ]+)(?:"|')/

const addAria = (svg, name) => {
  return ariaLabelRegEx.test(svg)
    ? svg
    : svg.replace(/<svg/, `<svg aria-label="${name} icon"`)
}

const dashCaseToLower = str => str.split('-').join(' ').toLowerCase()

export const cleanSvgs = async ({ src, dest = src }) => {
  try {
    await fs.mkdir(dest, { recursive: true })
    const files = await fg([`${src}/*.svg`])
    await Promise.all(
      files.map(async file => {
        const name = dashCaseToLower(path.basename(file, '.svg').split('.')[0])
        const svg = await fs.readFile(file, 'utf8')
        const { data } = await svgo.optimize(svg)
        await fs.writeFile(file, addAria(data, name))
      })
    )
  } catch (err) {
    console.error(err)
  }
}

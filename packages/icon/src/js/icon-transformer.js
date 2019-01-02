// @preval

const babel = require('babel-core')
const camelize = require('camelize')
const fs = require('fs')
const path = require('path')

const dirPath = path.join(__dirname, '..', 'svg')
const fileNames = fs.readdirSync(dirPath)

const pascalize = str => {
  const trimmed = str.trim()
  return trimmed.substr(0, 1).toUpperCase() + camelize(trimmed.substr(1))
}

const insertAfterChar = (str, char, content) => {
  const charIndex = str.indexOf(char)

  if (charIndex === -1) return str

  const offset = charIndex + 1
  return str.slice(0, offset) + content + str.slice(offset)
}

const insertBeforeChar = (str, char, content) => {
  const charIndex = str.indexOf(char)

  if (charIndex === -1) return str

  return str.slice(0, charIndex) + content + str.slice(charIndex)
}

const transformFile = filePath => {
  let content = babel.transformFileSync(filePath, {
    presets: ['react', 'stage-2']
  }).code

  content = content.replace('"use strict";', '')
  content = content.replace(';', '')
  content = insertBeforeChar(content, '{', 'Object.assign(')
  content = insertAfterChar(
    content,
    '}',
    ", filterReactProps(props, { tagName: 'svg' }))"
  )

  content = content.replace('fill-rule', 'fillRule')

  return content
}

const buildComponentFile = (filePath, { componentName }) => `
module.exports = function(React, filterReactProps) {
  return function ${componentName}(props) {
    return (${transformFile(filePath)})
  }
}
`

module.exports = fileNames
  .filter(fileName => path.extname(fileName) === '.svg')
  .reduce((acc, fileName) => {
    const name = fileName.split('.')[0]
    const componentName = `${pascalize(name)}Icon`
    const id = camelize(name)

    const filePath = path.join(dirPath, fileName)
    const outputFileName = fileName + '.dist.js'
    const outputFilePath = path.join(__dirname, 'icons', outputFileName)

    fs.writeFileSync(
      outputFilePath,
      buildComponentFile(filePath, { componentName })
    )

    acc[id] = require(`./icons/${outputFileName}`)

    return acc
  }, {})

// @preval

const camelize = require('camelize')
const fs = require('fs')
const path = require('path')

const dirPath = path.join(__dirname, '..', 'svg')
const fileNames = fs.readdirSync(dirPath)

const pascalize = str => {
  const trimmed = str.trim()
  return trimmed.substr(0, 1).toUpperCase() + camelize(trimmed.substr(1))
}

const insertBeforeChar = (str, char, content) => {
  const charIndex = str.indexOf(char)

  if (charIndex === -1) return str

  return [str.slice(0, charIndex), content, str.slice(charIndex)].join('')
}

const buildComponentFile = (filePath, { componentName }) => {
  const svg = fs.readFileSync(filePath)
  const content = insertBeforeChar(svg, '>', '{...filterReactProps(props)}')

  return `
import React from 'react'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

const ${componentName} = (props) => ${content}

export default ${componentName}
  `
}

module.exports = fileNames
  .filter(fileName => path.extname(fileName) === '.svg')
  .reduce((acc, fileName) => {
    const name = fileName.split('.')[0]
    const componentName = `${pascalize(name)}Icon`
    const id = camelize(name)

    const filePath = path.join(dirPath, fileName)
    const outputFileName = fileName + '.js'
    const outputFilePath = path.join(__dirname, 'icons', outputFileName)

    fs.writeFileSync(
      outputFilePath,
      buildComponentFile(filePath, { componentName })
    )

    acc[id] = outputFileName
    return acc
  }, {})

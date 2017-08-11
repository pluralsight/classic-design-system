// TODO: move into icons.js as a part of the build (not requiring separate script run)
const fs = require('fs')
const HTMLtoJSX = require('@tsuyoshiwada/htmltojsx')
const path = require('path')
const optimize = require('./svg-optimize')

const dirPath = path.join(__dirname, '..', 'src', 'svg')
const fileNames = fs.readdirSync(dirPath)

const converter = new HTMLtoJSX({ createClass: false })

fileNames.forEach(function(fileName) {
  if (path.extname(fileName) !== '.svg') return

  const filePath = path.join(dirPath, fileName)

  const origSvgStr = fs.readFileSync(filePath, 'utf8')

  const result = optimize(origSvgStr)

  const jsx = converter.convert(result.data)

  fs.writeFileSync(filePath, jsx)
})

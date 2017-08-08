// @preval

const babel = require('babel-core')
const camelize = require('camelize')
const fs = require('fs')
const path = require('path')
const React = require('react')

const dirPath = path.join(__dirname, '..', 'svg')
const fileNames = fs.readdirSync(dirPath)

const jsx = str => ({ __html: str })

module.exports = fileNames.reduce((acc, fileName) => {
  const filePath = path.join(dirPath, fileName)
  const id = camelize(fileName.split('.')[0])
  acc[id] = fs.readFileSync(filePath, 'utf8')
  const outputFileName = fileName + '.dist.js'
  const outputFilePath = path.join(__dirname, outputFileName)
  fs.writeFileSync(
    outputFilePath,
    'module.exports = function (React) { return (' +
      babel
        .transformFileSync(filePath, { presets: ['react'] })
        .code.replace('"use strict";', '')
        .replace(';', '') +
      ') }'
  )
  acc[id] = require('./' + outputFileName)
  return acc
}, {})

#!/usr/bin/env node

const chalk = require('chalk')
const program = require('commander')
const path = require('path')

const { css } = require('../index')
const defaultInputFilePath = path.join(process.cwd(), 'dist', 'css', 'index.js')
const defaultOutputDirectoryPath = path.join(process.cwd(), 'dist', 'css')

const prefix = '[build-css] '
const log = str => console.log(chalk.dim(prefix + str))
const logError = str => console.log(chalk.red(prefix + str))
const logSuccess = str => console.log(chalk.green(prefix + str))

program
  .version(require('../package.json').version)
  .option('-i, --input [filePath]', 'Provide an input file')
  .option('-o, --output [directoryPath]', 'Provide an output directory')
  .parse(process.argv)

const inputFilePath = program.input || defaultInputFilePath
const outputDirectoryPath = program.output || defaultOutputDirectoryPath

log('Building css...')
log(`Using input:  "${inputFilePath}"`)
log(`Using output: "${outputDirectoryPath}"`)

let js = null
try {
  js = require(inputFilePath).default
} catch (e) {
  logError('Input error')
  logError(e)
  return process.exit(1)
}

try {
  css.buildComponentStylesheet(js, { outputDir: outputDirectoryPath })
} catch (e) {
  logError('Output error')
  logError(e)
  return process.exit(1)
}

logSuccess('Success.')

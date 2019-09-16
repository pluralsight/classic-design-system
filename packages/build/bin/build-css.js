#!/usr/bin/env node
// eslint-disable-next-line no-global-assign
require = require('esm')(module)
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
  .option(
    '-i, --input [filePath]',
    'Provide an input file',
    defaultInputFilePath
  )
  .option(
    '-o, --output [directoryPath]',
    'Provide an output directory',
    defaultOutputDirectoryPath
  )
  .option('-g, --useGlamor', 'Compile css using glamor', false)
  .parse(process.argv)

const inputFilePath = program.input
const outputDirectoryPath = program.output

log('Building css...')
log(`Using input:  "${inputFilePath}"`)
log(`Using output: "${outputDirectoryPath}"`)

let js = null
try {
  js = require(inputFilePath).default
} catch (e) {
  logError('Input error')
  logError(e)
  process.exit(1)
}

try {
  css.buildComponentStylesheet(js, {
    outputDir: outputDirectoryPath,
    useGlamor: program.useGlamor
  })
} catch (e) {
  logError('Output error')
  logError(e)
  process.exit(1)
}

logSuccess('Success.')

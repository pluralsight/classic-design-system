#!/usr/bin/env node

import chalk from 'chalk'
import program from 'commander'
import * as path from 'path'
import readPkgUp from 'read-pkg-up'

import index from '../index.js'

const DEFAULT_INPUT_PATH = path.join('src', 'css', 'index.css')
const DEFAULT_OUTPUT_PATHS = [
  path.join('dist', 'index.css'),
  path.join('dist', 'index.scss')
]

const prefix = '[postcss-compile] '
const log = str => console.log(chalk.dim(prefix + str))
const logError = str => console.log(chalk.red(prefix + str))
const logSuccess = str => console.log(chalk.green(prefix + str))

const { packageJson } = readPkgUp.sync()

;(async function main() {
  program
    .version(packageJson.version)
    .option(
      '-i, --input [filePath]',
      'Provide an input file',
      DEFAULT_INPUT_PATH
    )
    .option(
      '-o, --output [directoryPaths]',
      'Provide a CSV of output directories',
      DEFAULT_OUTPUT_PATHS.join(',')
    )
    .parse(process.argv)

  const inputFilePath = path.join(process.cwd(), program.input)
  const outputDirectoryPaths = program.output
    .split(',')
    .map(outputPath => path.join(process.cwd(), outputPath))

  log('Compiling postcss...')
  log(`Using input:  "${inputFilePath}"`)
  log(`Using output: "${outputDirectoryPaths}"`)

  try {
    index.css.postcssCompile(inputFilePath, outputDirectoryPaths)
  } catch (e) {
    logError('Output error')
    logError(e)
    process.exit(1)
  }

  logSuccess('Success.')
})()

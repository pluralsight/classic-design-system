#!/usr/bin/env node

import chalk from 'chalk'
import program from 'commander'
import * as path from 'path'
import readPkgUp from 'read-pkg-up'

import index from '../index.js'

const defaultInputFilePath = path.join('dist', 'css', 'index.js')
const defaultOutputDirectoryPath = path.join('dist')

const prefix = '[build-css] '
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
      defaultInputFilePath
    )
    .option(
      '-o, --output [directoryPath]',
      'Provide an output directory',
      defaultOutputDirectoryPath
    )
    .option('-g, --useGlamor', 'Compile css using glamor', false)
    .parse(process.argv)

  const inputFilePath = path.join(process.cwd(), program.input)
  const outputDirectoryPath = path.join(process.cwd(), program.output)

  log('Building css...')
  log(`Using input:  "${inputFilePath}"`)
  log(`Using output: "${outputDirectoryPath}"`)

  let js = null
  try {
    const { default: defaultExport } = await import(inputFilePath)
    js = defaultExport
  } catch (e) {
    logError('Input error')
    logError(e)
    process.exit(1)
  }

  try {
    index.css.buildComponentStylesheet(js, {
      outputDir: outputDirectoryPath,
      useGlamor: program.useGlamor
    })
  } catch (e) {
    logError('Output error')
    logError(e)
    process.exit(1)
  }

  logSuccess('Success.')
})()

const { execSync } = require('child_process')
const path = require('path')

const { mkdir } = require('../fs')

module.exports = async function postcssCompile(inputPath, outputPaths) {
  await ensureDistDir()
  const firstOutputPath = outputPaths[0]

  exec(`postcss ${inputPath} -o ${firstOutputPath}`)
  outputPaths.slice(1).forEach(path => {
    exec(`cp ${firstOutputPath} ${path}`)
  })
}

function exec(cmd) {
  execSync(cmd, { stdio: 'inherit', cwd: process.cwd() })
}

async function ensureDistDir() {
  try {
    await mkdir(path.join(__dirname, 'dist'))
  } catch (err) {
    return console.error(err)
  }
}

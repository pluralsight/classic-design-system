const { execSync } = require('child_process')
const { resolve, join } = require('path')
const { promises: fs } = require('fs')

const root = resolve(__dirname)
const run = cmd => execSync(cmd, { stdio: 'inherit', cwd: root })
const build = async () => {
  try {
    await fs.mkdir(join(__dirname, './dist/cjs/css/'), { recursive: true })
    console.log('Directory created successfully!')
  } catch (err) {
    return console.error(err)
  }

  run('postcss src/css/index.css -o dist/esm/css/index.css')
  run('cp dist/esm/css/index.css dist/cjs/css/index.css ')
  run(
    'postcss src/css/index.css -o dist/css/index.css && cp dist/css/index.css dist/css/index.scss'
  )
}
build()

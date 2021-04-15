import * as fs from 'fs'
import * as path from 'path'

const filePath = path.join('dist', 'esm', 'react', 'illustrations', 'index.mjs')
const data = fs.readFileSync(filePath, 'utf8')
const newData = data.replace(/\.mjs/g, '.dist.mjs')
fs.writeFileSync(filePath, newData)

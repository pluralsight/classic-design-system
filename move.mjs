import * as fs from 'fs'
import glob from 'glob'

glob('packages/**/jest.config.js', (err, files) => {
  files
    .filter(filePath => !/node_modules/.test(filePath))
    .forEach(filePath => {
      fs.renameSync(filePath, filePath.replace('.js', '.mjs'))
    })
})

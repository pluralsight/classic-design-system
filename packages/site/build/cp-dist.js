const copy = require('recursive-copy')
const rimraf = require('rimraf')
const path = require('path')

const docsDir = path.join(__dirname, '..', '..', '..', 'docs')
rimraf(docsDir, err => {
  if (err) throw err

  copy(path.join(__dirname, '..', 'dist'), docsDir, (err, results) => {
    if (err) throw err
    console.log('copied dist to docs')
  })
})

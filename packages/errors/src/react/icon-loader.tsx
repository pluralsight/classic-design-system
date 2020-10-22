import camelize from 'camelize'
import importAll from 'import-all.macro'

const imported = importAll.sync('./icons/*.dist.js')

const convertToIconId = filePath => {
  const trimmed = filePath.replace('./icons/', '').replace('-icon.dist.js', '')
  return camelize(trimmed)
}

export default Object.keys(imported).reduce((acc, filePath) => {
  const value = imported[filePath].default
  const id = convertToIconId(filePath)

  return { ...acc, [id]: value }
}, {})

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import camelize from 'camelize'
// @ts-ignore
import importAll from 'import-all.macro'

const imported = importAll.sync('./icons/*.dist.js')

const convertToIconId = (filePath: string) => {
  const trimmed = filePath.replace('./icons/', '').replace('-icon.dist.js', '')
  return camelize(trimmed)
}

export interface IconComponents {
  cloud: () => React.ReactNode
  eyeball: () => React.ReactNode
  search: () => React.ReactNode
  spyglass: () => React.ReactNode
}

const icons = Object.keys(imported).reduce((acc, filePath) => {
  const value = imported[filePath].default
  const id = convertToIconId(filePath)

  return { ...acc, [id]: value }
}, {}) as IconComponents

export default icons

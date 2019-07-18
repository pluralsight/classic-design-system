import camelize from 'camelize'
import importAll from 'import-all.macro'

import core from '@pluralsight/ps-design-system-core'

const imported = importAll.sync('../react/icons/*.dist.js')

const convertToIconId = filePath => {
  const trimmed = filePath
    .replace('../react/icons/', '')
    .replace('-icon.dist.js', '')

  return camelize(trimmed)
}

export const ids = Object.keys(imported).reduce((acc, filePath) => {
  const id = convertToIconId(filePath)
  return { ...acc, [id]: id }
}, {})

export const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

export const widths = {
  small: '16px',
  medium: '24px',
  large: '48px'
}

export const colors = Object.keys(core.colors)
  .filter(c => !/gradient/.test(c))
  .reduce((acc, c) => {
    acc[c] = c
    return acc
  }, {})

import core from '@pluralsight/ps-design-system-core'

import icons from '../js/icons'

export const ids = Object.keys(icons).reduce((acc, id) => {
  acc[id] = `${id}`
  return acc
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

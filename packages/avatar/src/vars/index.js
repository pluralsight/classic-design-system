import {
  colorsBlue,
  colorsTeal,
  colorsGreen,
  colorsOrange,
  colorsRed,
  colorsPink,
  colorsPurple
} from '@pluralsight/ps-design-system-core'
export const sizes = {
  xSmall: 'xSmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
  xLarge: 'xLarge'
}

const colors = [
  colorsBlue[7],
  colorsTeal[7],
  colorsGreen[7],
  colorsOrange[7],
  colorsRed[7],
  colorsPink[7],
  colorsPurple[7]
]

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export const colorByLetter = letters.reduce((map, letter, i) => {
  map[letter] = colors[i % colors.length]
  return map
}, {})

export const fallbackPixel =
  'https://s3-us-west-2.amazonaws.com/ps-cdn/design-system/assets/transparent.gif'

export const widths = {
  xSmall: '32px',
  small: '48px',
  medium: '72px',
  large: '96px',
  xLarge: '160px'
}

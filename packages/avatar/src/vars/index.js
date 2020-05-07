import {
  colorsBlue,
  colorsPurple,
  colorsGreen,
  colorsRed,
  colorsTeal,
  colorsPink,
  colorsLime,
  colorsOrange,
  colorsYellow
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
  colorsPurple[7],
  colorsGreen[7],
  colorsRed[7],
  colorsTeal[8],
  colorsPink[7],
  colorsLime[8],
  colorsOrange[8],
  colorsYellow[9]
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

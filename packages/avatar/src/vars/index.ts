import * as core from '@pluralsight/ps-design-system-core'
import { keyMirror } from '@pluralsight/ps-design-system-util'

export const sizes = keyMirror('xSmall', 'small', 'medium', 'large', 'xLarge')

export const colors = [
  core.colorsBlue[7],
  core.colorsPurple[7],
  core.colorsGreen[7],
  core.colorsRed[7],
  core.colorsTeal[8],
  core.colorsPink[7],
  core.colorsLime[8],
  core.colorsOrange[8],
  core.colorsYellow[9]
]

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export const colorByLetter = letters.reduce((map, letter, i) => {
  map[letter] = colors[i % colors.length]
  return map
}, {} as Record<string, unknown>)

export const fallbackPixel =
  'https://s3-us-west-2.amazonaws.com/ps-cdn/design-system/assets/transparent.gif'

export const widths = {
  xSmall: '32px',
  small: '48px',
  medium: '72px',
  large: '96px',
  xLarge: '160px'
}

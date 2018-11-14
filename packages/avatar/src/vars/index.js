export const sizes = {
  xSmall: 'xSmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
  xLarge: 'xLarge'
}

const colors = [
  '#49897C',
  '#9A171B',
  '#1F964E',
  '#076F84',
  '#BE344B',
  '#2D4E82',
  '#6D8C36',
  '#AE8018',
  '#82214E'
]

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export const colorByLetter = letters.reduce((map, letter, i) => {
  map[letter] = colors[i % colors.length]
  return map
}, {})

export const fallbackPixel =
  '//s3-us-west-2.amazonaws.com/ps-cdn/design-system/assets/transparent.gif'

export const widths = {
  xSmall: '32px',
  small: '48px',
  medium: '72px',
  large: '96px',
  xLarge: '160px'
}

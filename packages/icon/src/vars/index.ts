import { keyMirror } from '@pluralsight/ps-design-system-util'

export const sizes = keyMirror('small', 'medium', 'large')

export const widths = {
  small: '16px',
  medium: '24px',
  large: '48px'
}

export const colors = keyMirror(
  'textIconHighOnDark',
  'textIconLowOnDark',
  'textIconHighOnLight',
  'textIconLowOnLight',
  'red',
  'blue',
  'green',
  'yellow'
)

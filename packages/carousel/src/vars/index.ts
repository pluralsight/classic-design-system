import { keyMirror } from '@pluralsight/ps-design-system-util'

export const constraints = {
  narrow: { gutter: 16, minWidth: 160, maxWidth: 335 },
  wide: { gutter: 16, minWidth: 240, maxWidth: 495 }
}

export const controlDirections = keyMirror('prev', 'next')

export const sizes = keyMirror('narrow', 'wide')

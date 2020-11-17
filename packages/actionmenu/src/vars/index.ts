import { layout } from '@pluralsight/ps-design-system-core'
import { keyMirror } from '@pluralsight/ps-design-system-util'

export const origins = keyMirror(
  'topLeft',
  'topRight',
  'bottomRight',
  'bottomLeft'
)

export const style = {
  menuPaddingVert: layout.spacingXXSmall,
  nestedMenuHorzOverlap: 0 // 3
}

export const tagName = keyMirror('a', 'button')

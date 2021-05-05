import { layout } from '../../core'
import { keyMirror } from '../../util'

const xSmallIconWidth = '24px'

export const sizes = keyMirror('small', 'medium')

export const style = {
  overlaysWidth: '96px',
  overlaysMarginRight: layout.spacingLarge,
  actionBarActionWidth: xSmallIconWidth,
  actionBarActionMarginLeft: layout.spacingXSmall
}

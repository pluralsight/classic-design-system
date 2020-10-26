import { layout } from '@pluralsight/ps-design-system-core'
import { keyMirror } from '@pluralsight/ps-design-system-util'

const xSmallIconWidth = '24px'

export const sizes = keyMirror('small', 'medium')

export const style = {
  overlaysWidth: '96px',
  overlaysMarginRight: layout.spacingLarge,
  actionBarActionWidth: xSmallIconWidth,
  actionBarActionMarginLeft: layout.spacingXSmall
}

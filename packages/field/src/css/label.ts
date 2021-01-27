import {
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'

import { dark, light } from './shared'

export default {
  '.psds-label': {
    label: 'label',

    display: 'block',
    fontSize: type.fontSize100,
    fontWeight: type.fontWeight500,
    marginBottom: layout.spacingXXSmall
  },
  [`.psds-label${dark.className}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-label${light.className}`]: {
    color: colorsTextIcon.highOnLight
  }
}

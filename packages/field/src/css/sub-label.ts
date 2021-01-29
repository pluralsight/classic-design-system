import {
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'

import { dark, light } from './shared'

export default {
  '.psds-field__sub-label': {
    label: 'field__sub-label',

    fontSize: type.fontSize100,
    fontWeight: type.fontWeightDefault,
    marginTop: layout.spacingXXSmall
  },
  [`.psds-field__sub-label${dark.className}`]: {
    color: colorsTextIcon.lowOnDark
  },
  [`.psds-field__sub-label${light.className}`]: {
    color: colorsTextIcon.lowOnLight
  }
}

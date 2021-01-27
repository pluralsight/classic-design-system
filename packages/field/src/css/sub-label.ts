import {
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'

import { dark, light } from './shared'

export default {
  '.psds-sub-label': {
    label: 'sub-label',

    fontSize: type.fontSize100,
    fontWeight: type.fontWeightDefault,
    marginTop: layout.spacingXXSmall
  },
  [`.psds-sub-label${dark.className}`]: {
    color: colorsTextIcon.lowOnDark
  },
  [`.psds-sub-label${light.className}`]: {
    color: colorsTextIcon.lowOnLight
  }
}

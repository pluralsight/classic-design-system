import { colorsTextIcon, layout, type } from '../../core'

import { dark, light } from './shared'

export default {
  '.psds-field__label': {
    label: 'field__label',

    display: 'block',
    fontSize: type.fontSize100,
    fontWeight: type.fontWeight500,
    marginBottom: layout.spacingXXSmall
  },
  [`.psds-field__label${dark.className}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-field__label${light.className}`]: {
    color: colorsTextIcon.highOnLight
  }
}

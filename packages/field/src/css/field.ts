import {
  colorsBackgroundLight,
  colorsBorder,
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'

import { dark, light } from './shared'

export default {
  '.psds-field__container': {
    label: 'field__container'
  },
  [`.psds-field__container${dark.className}`]: {},
  [`.psds-field__container${light.className}`]: {},

  '.psds-field': {
    label: 'field',

    alignItems: 'center',
    background: colorsBackgroundLight[3],
    border: `1px solid ${colorsBorder.highOnLight}`,
    borderRadius: '2px',
    color: colorsTextIcon.highOnLight,
    display: 'flex',
    fontWeight: type.fontWeightDefault,
    height: '40px',
    minWidth: '192px',
    padding: layout.spacingXSmall,
    position: 'relative',
    width: '100%'
  }
}

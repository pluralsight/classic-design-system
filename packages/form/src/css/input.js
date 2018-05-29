import core from '@pluralsight/ps-design-system-core'

import { Input as vars } from '../vars'

export default {
  '.psds-form-input': {
    height: '40px',
    minWidth: '192px',
    borderRadius: '2px',
    background: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    fontWeight: core.type.fontWeightBook,
    color: core.colors.gray03,
    padding: `${core.layout.spacingXSmall} ${core.layout.spacingMedium}`,
    border: 'none'
  },
  [`.psds-form-input--appearance-${vars.appearances.subtle}`]: {
    color: core.colors.gray01,
    background: core.colors.gray06,
    border: `1px solid ${core.colors.gray03}`
  },
  '.psds-form-input__label': {
    color: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: '16px',
    fontWeight: core.type.fontWeightMedium,
    paddingBottom: core.layout.spacingXSmall
  },
  '.psds-form-input__sub-label': {
    color: core.colors.gray02,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: '16px',
    fontWeight: core.type.fontWeightMedium,
    paddingTop: core.layout.spacingXSmall
  }
}

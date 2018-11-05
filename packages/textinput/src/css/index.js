import core from '@pluralsight/ps-design-system-core'
import * as iconVars from '@pluralsight/ps-design-system-icon/vars'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

import * as vars from '../vars'

export default {
  '.psds-text-input': {
    display: 'inline-block'
  },
  '.psds-text-input--disabled': {
    opacity: 0.5
  },

  // __field
  '.psds-text-input__field': {
    position: 'relative',
    height: '40px',
    minWidth: '192px',
    width: '100%',
    borderRadius: '2px',
    background: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    fontWeight: core.type.fontWeightBook,
    color: core.colors.gray03,
    padding: `${core.layout.spacingXSmall} ${core.layout.spacingMedium}`,
    border: 'none'
  },
  '.psds-text-input__field:focus': {
    outline: 'none'
  },
  [`.psds-text-input__field.psds-theme--${themeNames.light}:focus`]: {
    border: '1px solid transparent'
  },
  [`.psds-text-input__field--error.psds-theme--${themeNames.light}`]: {
    border: '1px solid transparent'
  },
  [`.psds-text-input__field.psds-theme--${themeNames.light}`]: {
    background: core.colors.white,
    border: `1px solid ${core.colors.gray02}`
  },
  [`.psds-text-input__field--appearance-${vars.appearances.subtle}`]: {
    color: core.colors.gray01,
    background: core.colors.gray06,
    border: `1px solid ${core.colors.gray03}`
  },
  [`.psds-text-input__field--icon-align-${vars.iconAligns.left}`]: {
    padding: `0 ${core.layout.spacingMedium} 0 calc(${
      core.layout.spacingXSmall
    } + ${iconVars.widths.medium} + ${core.layout.spacingXSmall})`
  },
  [`.psds-text-input__field--icon-align-${vars.iconAligns.right}`]: {
    padding: `0 calc(${core.layout.spacingXSmall} + ${
      iconVars.widths.medium
    } + ${core.layout.spacingXSmall}) 0 ${core.layout.spacingMedium}`
  },

  // __field-container
  '.psds-text-input__field-container': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minWidth: `calc(192px + ${core.layout.spacingXSmall})`
  },

  // __icon
  '.psds-text-input__icon': {
    position: 'absolute',
    left: core.layout.spacingXSmall,
    display: 'flex',
    alignItems: 'center',
    color: core.colors.gray03
  },
  [`.psds-text-input__icon.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray02
  },
  [`.psds-text-input__icon--icon-align-${vars.iconAligns.right}`]: {
    left: 'auto',
    right: core.layout.spacingXSmall
  },
  [`.psds-text-input__icon--appearance-${vars.appearances.subtle}`]: {
    color: core.colors.gray02
  },

  // __label
  '.psds-text-input__label': {
    color: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: '16px',
    fontWeight: core.type.fontWeightMedium,
    paddingBottom: core.layout.spacingXSmall
  },
  [`.psds-text-input__label.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray05
  },

  // __sub-label
  '.psds-text-input__sub-label': {
    color: core.colors.gray02,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: '16px',
    fontWeight: core.type.fontWeightMedium,
    paddingTop: core.layout.spacingXSmall
  },
  [`.psds-text-input__sub-label.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },

  // __error
  '.psds-text-input__error': {
    position: 'absolute',
    right: `calc(-1 * (${iconVars.widths.medium} + ${
      core.layout.spacingXSmall
    }))`,
    display: 'flex',
    alignItems: 'center',
    color: core.colors.red,
    marginLeft: core.layout.spacingXSmall
  }
}

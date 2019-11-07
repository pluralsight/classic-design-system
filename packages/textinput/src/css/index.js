import {colors, layout, type} from '@pluralsight/ps-design-system-core'
import { widths as iconWidths } from '@pluralsight/ps-design-system-icon'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars/index.js'

export default {
  '.psds-text-input': {
    display: 'inline-block'
  },
  '.psds-text-input--disabled': {
    opacity: 0.5
  },

  // __field
  '.psds-text-input__field': {
    alignItems: 'center',
    background: colors.bone,
    borderRadius: '2px',
    color: colors.gray03,
    display: 'flex',
    fontWeight: type.fontWeightBook,
    height: '40px',
    minWidth: '192px',
    padding: `${layout.spacingXSmall} ${layout.spacingMedium}`,
    position: 'relative',
    width: '100%'
  },
  '.psds-text-input__field.psds-text-input--small': {
    height: '32px',
    padding: `6px ${layout.spacingXSmall}`
  },
  '.psds-text-input__field--w-after': {
    paddingRight: 0
  },
  '.psds-text-input__field-input': {
    width: '100%',
    background: 'none',
    border: 'none',
    color: 'inherit',
    fontSize: type.fontSizeSmall,
    lineHeight: type.lineHeightStandard,
    outline: 'none',
    padding: 0,

    '&:focus': {
      outline: 'none'
    }
  },
  [`.psds-text-input__field.psds-theme--${themeNames.light}`]: {
    background: colors.white,
    border: `1px solid ${colors.gray02}`,

    '&:focus': {
      border: '1px solid transparent'
    }
  },

  [`.psds-text-input__field--error.psds-theme--${themeNames.light}`]: {
    border: '1px solid transparent'
  },
  [`.psds-text-input__field--appearance-${vars.appearances.subtle}`]: {
    color: colors.gray01,
    background: colors.gray06,
    border: `1px solid ${colors.gray03}`
  },
  [`.psds-text-input__field--appearance-${vars.appearances.subtle}.psds-theme--${themeNames.light}`]: {
    color: colors.gray05
  },
  [`.psds-text-input__field--icon-align-${vars.iconAligns.left}`]: {
    padding: `0 ${layout.spacingMedium} 0 calc(${layout.spacingXSmall} + ${iconWidths.medium} + ${layout.spacingXSmall})`
  },
  [`.psds-text-input__field--icon-align-${vars.iconAligns.right}`]: {
    padding: `0 calc(${layout.spacingXSmall} + ${iconWidths.medium} + ${layout.spacingXSmall}) 0 ${layout.spacingMedium}`
  },
  [`.psds-text-input__field--icon-align-${vars.iconAligns.left}.psds-text-input--small`]: {
    padding: `0 ${layout.spacingXSmall} 0 ${parseInt(
      layout.spacingMedium,
      10
    ) + parseInt(iconWidths.medium, 10)}px`
  },
  [`.psds-text-input__field--icon-align-${vars.iconAligns.right}.psds-text-input--small`]: {
    padding: `0 ${parseInt(layout.spacingMedium, 10) +
      parseInt(iconWidths.medium, 10)}px 0 ${layout.spacingXSmall}`
  },

  // __field-container
  '.psds-text-input__field-container': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minWidth: `calc(192px + ${layout.spacingXSmall})`
  },

  // __icon
  '.psds-text-input__icon': {
    position: 'absolute',
    left: layout.spacingXSmall,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    color: colors.gray03
  },
  [`.psds-text-input__icon.psds-theme--${themeNames.light}`]: {
    color: colors.gray02
  },
  [`.psds-text-input__icon--icon-align-${vars.iconAligns.right}`]: {
    left: 'auto',
    right: layout.spacingXSmall
  },
  [`.psds-text-input__icon--appearance-${vars.appearances.subtle}`]: {
    color: colors.gray02
  },

  // __label
  '.psds-text-input__label': {
    color: colors.bone,
    fontSize: type.fontSizeSmall,
    lineHeight: '16px',
    fontWeight: type.fontWeightMedium,
    paddingBottom: layout.spacingXSmall
  },
  [`.psds-text-input__label.psds-theme--${themeNames.light}`]: {
    color: colors.gray05
  },

  // __sub-label
  '.psds-text-input__sub-label': {
    color: colors.gray02,
    fontSize: type.fontSizeXSmall,
    lineHeight: '16px',
    fontWeight: type.fontWeightMedium,
    paddingTop: layout.spacingXSmall
  },
  [`.psds-text-input__sub-label.psds-theme--${themeNames.light}`]: {
    color: colors.gray03
  },

  // __error
  '.psds-text-input__error': {
    position: 'absolute',
    right: `calc(-1 * (${iconWidths.medium} + ${layout.spacingXSmall}))`,
    display: 'flex',
    alignItems: 'center',
    color: colors.red,
    marginLeft: layout.spacingXSmall
  }
}

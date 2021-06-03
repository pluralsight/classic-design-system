import {
  colorsBackgroundDark,
  colorsBackgroundLight,
  colorsBorder,
  colorsStatus,
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'
import { widths as iconWidths } from '@pluralsight/ps-design-system-icon'
import { themeNames } from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars/index'

export default {
  '.psds-text-input': {
    display: 'inline-block'
  },
  '.psds-text-input--disabled': {
    opacity: 0.5,
    cursor: 'not-allowed'
  },

  // __field
  '.psds-text-input__field': {
    alignItems: 'center',
    background: colorsBackgroundLight[3],
    border: `1px solid ${colorsBorder.highOnLight}`,
    borderRadius: '2px',
    color: colorsTextIcon.highOnLight,
    display: 'flex',
    fontWeight: type.fontWeightDefault,
    height: '40px',
    minWidth: '192px',
    padding: `${layout.spacingXSmall} ${layout.spacingMedium}`,
    position: 'relative',
    width: '100%'
  },
  [`.psds-text-input__field.psds-theme--${themeNames.light}`]: {
    background: colorsBackgroundLight[3],
    border: `1px solid ${colorsBorder.highOnLight}`
  },
  '.psds-text-input__field.psds-text-input--small': {
    height: '32px',
    padding: `6px ${layout.spacingXSmall}`
  },
  '.psds-text-input__field--w-after': {
    paddingRight: layout.spacingXSmall
  },
  '.psds-text-input__field-input': {
    width: '100%',
    background: 'none',
    border: 'none',
    color: 'inherit',
    fontSize: type.fontSize200,
    lineHeight: type.lineHeightStandard,
    outline: 'none',
    padding: 0,

    '&:focus': { outline: 'none' },
    '&::placeholder': { color: colorsTextIcon.lowOnLight },
    '&:disabled': {
      cursor: 'not-allowed'
    }
  },
  [`.psds-text-input__field-input--appearance-${vars.appearances.subtle}`]: {
    '&::placeholder': { color: colorsTextIcon.lowOnDark }
  },
  [`.psds-text-input__field-input.psds-theme--${themeNames.light}`]: {
    '&::placeholder': { color: colorsTextIcon.lowOnLight }
  },

  [`.psds-text-input__field--error.psds-theme--${themeNames.light}`]: {
    border: '1px solid transparent'
  },
  [`.psds-text-input__field--appearance-${vars.appearances.subtle}`]: {
    color: colorsTextIcon.highOnDark,
    background: colorsBackgroundDark[1],
    border: `1px solid ${colorsBorder.highOnDark}`
  },
  [`.psds-text-input__field--appearance-${vars.appearances.subtle}.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-text-input__field--icon-align-${vars.iconAligns.left}`]: {
    padding: `0 ${layout.spacingMedium} 0 calc(${layout.spacingXSmall} + ${iconWidths.medium} + ${layout.spacingXSmall})`
  },
  [`.psds-text-input__field--icon-align-${vars.iconAligns.right}`]: {
    padding: `0 calc(${layout.spacingXSmall} + ${iconWidths.medium} + ${layout.spacingXSmall}) 0 ${layout.spacingMedium}`
  },
  [`.psds-text-input__field--icon-align-${vars.iconAligns.left}.psds-text-input--small`]: {
    padding: `0 ${layout.spacingXSmall} 0 ${
      parseInt(layout.spacingMedium, 10) + parseInt(iconWidths.medium, 10)
    }px`
  },
  [`.psds-text-input__field--icon-align-${vars.iconAligns.right}.psds-text-input--small`]: {
    padding: `0 ${
      parseInt(layout.spacingMedium, 10) + parseInt(iconWidths.medium, 10)
    }px 0 ${layout.spacingXSmall}`
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
    color: colorsTextIcon.lowOnLight
  },
  [`.psds-text-input__icon.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },

  [`.psds-text-input__icon--icon-align-${vars.iconAligns.right}`]: {
    left: 'auto',
    right: layout.spacingXSmall
  },
  [`.psds-text-input__icon--appearance-${vars.appearances.subtle}`]: {
    color: colorsTextIcon.lowOnDark
  },

  // __label
  '.psds-text-input__label': {
    color: colorsTextIcon.highOnDark,
    fontSize: type.fontSize100,
    fontWeight: type.fontWeight500,
    marginBottom: layout.spacingXXSmall
  },
  [`.psds-text-input__label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },

  // __sub-label
  '.psds-text-input__sub-label': {
    color: colorsTextIcon.lowOnDark,
    fontSize: type.fontSize100,
    fontWeight: type.fontWeightDefault,
    marginTop: layout.spacingXXSmall
  },
  [`.psds-text-input__sub-label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },

  // __error
  '.psds-text-input__error': {
    position: 'absolute',
    right: `calc(-1 * (${iconWidths.medium} + ${layout.spacingXSmall}))`,
    display: 'flex',
    alignItems: 'center',
    color: colorsStatus.error,
    marginLeft: layout.spacingXSmall
  }
}

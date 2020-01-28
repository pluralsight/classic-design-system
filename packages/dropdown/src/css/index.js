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
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars/index.js'

export default {
  '.psds-dropdown': {
    display: 'inline-block',
    position: 'relative'
  },
  '.psds-dropdown--disabled': {
    opacity: 0.5
  },

  // __field
  '.psds-dropdown__field': {
    position: 'relative',
    height: '40px',
    width: '100%',
    border: `1px solid ${colorsBorder.highOnDark}`,
    borderRadius: '2px',
    background: colorsBackgroundLight[3],
    fontSize: type.fontSizeSmall,
    lineHeight: type.lineHeightStandard,
    fontWeight: type.fontWeightMedium,
    color: colorsTextIcon.highOnLight,
    textAlign: 'left',
    cursor: 'pointer',

    '&:focus': {
      outline: 'none'
    }
  },
  '.psds-dropdown__field.psds-dropdown--small': {
    height: '32px',
    padding: `0 calc(${layout.spacingXSmall} + ${iconWidths.medium} + ${layout.spacingXSmall}) 0 ${layout.spacingXSmall}`
  },
  [`.psds-dropdown__field.psds-theme--${themeNames.light}`]: {
    border: `1px solid ${colorsBorder.highOnLight}`,

    '&:focus': {
      border: '1px solid transparent'
    }
  },
  [`.psds-dropdown__field--error.psds-theme--${themeNames.light}`]: {
    border: '1px solid transparent'
  },
  [`.psds-dropdown__field--appearance-${vars.appearances.subtle}`]: {
    color: colorsTextIcon.highOnDark,
    background: colorsBackgroundDark[1],
    border: `1px solid ${colorsBorder.highOnDark}`
  },

  // __field-container
  '.psds-dropdown__field-container': {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    minWidth: `calc(${iconWidths.medium} + ${layout.spacingXSmall})`,
    maxWidth: '100%'
  },
  '.psds-dropdown__field-aligner': {
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '100%'
  },

  // __icon
  '.psds-dropdown__icon': {
    position: 'absolute',
    left: 'auto',
    right: layout.spacingXSmall,
    display: 'flex',
    alignItems: 'center',
    color: colorsTextIcon.lowOnLight,
    cursor: 'pointer'
  },
  [`.psds-dropdown__icon--appearance-${vars.appearances.subtle}`]: {
    color: colorsTextIcon.lowOnDark
  },

  // __label
  '.psds-dropdown__label': {
    color: colorsTextIcon.highOnDark,
    fontSize: type.fontSizeSmall,
    lineHeight: '16px',
    fontWeight: type.fontWeightMedium,
    paddingBottom: layout.spacingXSmall
  },
  [`.psds-dropdown__label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },

  // __sub-label
  '.psds-dropdown__sub-label': {
    color: colorsTextIcon.lowOnDark,
    fontSize: type.fontSizeXSmall,
    lineHeight: '16px',
    fontWeight: type.fontWeightMedium,
    paddingTop: layout.spacingXSmall
  },
  [`.psds-dropdown__sub-label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },

  // __error
  '.psds-dropdown__error': {
    position: 'absolute',
    right: `calc(-1 * (${iconWidths.medium} + ${layout.spacingXSmall}))`,
    display: 'flex',
    alignItems: 'center',
    color: colorsStatus.error,
    marginLeft: layout.spacingXSmall
  },

  // __placeholder
  '.psds-dropdown__placeholder': {
    padding: `0 calc(${layout.spacingXSmall} + ${iconWidths.medium} + ${layout.spacingXSmall}) 0 ${layout.spacingMedium}`,
    position: 'absolute',
    top: layout.spacingXSmall,
    left: 0,
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  '.psds-dropdown__placeholder.psds-dropdown--small': {
    left: layout.spacingXSmall,
    top: layout.spacingXXSmall
  },

  // __button-sizer
  '.psds-dropdown__button-sizer': {
    visibility: 'hidden',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    padding: `0 calc(${layout.spacingXSmall} + ${iconWidths.medium} + ${layout.spacingXSmall}) 0 ${layout.spacingMedium}`
  },

  // __menu
  '.psds-dropdown__menu': {
    position: 'absolute',
    zIndex: 980,
    marginTop: layout.spacingXXSmall
  },

  // __page-overlay
  '.psds-dropdown__page-overlay': {
    position: 'fixed',
    zIndex: 970,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  '.psds-dropdown__field-halo': {
    maxWidth: '100%'
  }
}

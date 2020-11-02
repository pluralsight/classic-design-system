import {
  colorsBackgroundUtility,
  colorsBackgroundLight,
  colorsBlue,
  colorsBorder,
  colorsStatus,
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'
import { widths as iconWidths } from '@pluralsight/ps-design-system-icon'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars'

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
    fontWeight: type.fontWeightBook,
    color: colorsTextIcon.highOnLight,
    textAlign: 'left',
    cursor: 'pointer',
    padding: `0 ${layout.spacingSmall}`,
    '&:focus': {
      outline: 'none'
    }
  },
  '.psds-dropdown__field.psds-dropdown--small': {
    height: '32px',
    padding: `0 ${layout.spacingXSmall}`
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
    backgroundColor: colorsBackgroundUtility[30],
    border: `none`
  },
  '.psds-dropdown__field-inner': {
    position: 'relative',
    height: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    textAlign: 'left',
    minWidth: 0,
    width: '100%'
  },

  // __field-container
  '.psds-dropdown__field-container': {
    position: 'relative',
    display: 'inline-block',
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
    top: '50%',
    transform: 'translateY(-50%)',
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
    fontSize: type.fontSizeXSmall,
    fontWeight: type.fontWeightMedium,
    marginBottom: layout.spacingXXSmall
  },
  [`.psds-dropdown__label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },

  // __sub-label
  '.psds-dropdown__sub-label': {
    color: colorsTextIcon.lowOnDark,
    fontSize: type.fontSizeXSmall,
    fontWeight: type.fontWeightBook,
    marginTop: layout.spacingXXSmall
  },
  [`.psds-dropdown__sub-label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },

  // __error
  '.psds-dropdown__error': {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: `translate(calc(100% + ${layout.spacingXSmall}), -50%)`,
    display: 'flex',
    alignItems: 'center',
    color: colorsStatus.error,
    marginLeft: layout.spacingXSmall
  },

  // __placeholder
  '.psds-dropdown__placeholder': {
    padding: `0 calc(${layout.spacingXSmall} + ${iconWidths.medium} + ${layout.spacingXSmall}) 0 0`,
    position: 'absolute',
    top: layout.spacingXSmall,
    left: 0,
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  '.psds-dropdown__placeholder--color': {
    color: colorsTextIcon.lowOnLight
  },
  [`.psds-dropdown__field--appearance-${vars.appearances.subtle}.psds-dropdown__placeholder--color`]: {
    color: colorsTextIcon.lowOnDark
  },
  '.psds-dropdown__placeholder.psds-dropdown--small': {
    top: layout.spacingXXSmall
  },

  // __button-sizer
  '.psds-dropdown__button-sizer': {
    visibility: 'hidden',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    padding: `0 calc(${layout.spacingXSmall} + ${iconWidths.medium} + ${layout.spacingXSmall}) 0 0`
  },

  // __menu
  '.psds-dropdown__menu': {
    position: 'fixed',
    zIndex: 980,
    marginTop: layout.spacingXXSmall,
    maxHeight: 400,
    overflowY: 'auto'
  },

  '.psds-dropdown__field-halo': {
    maxWidth: '100%',
    width: '100%',
    display: 'block'
  },

  '.psds-dropdown--selected-icon': {
    marginLeft: 'auto',
    color: colorsBlue[7]
  },

  '.psds-dropdown--item-text': {
    '&:not(:last-child)': {
      marginRight: layout.spacingXSmall
    }
  }
}

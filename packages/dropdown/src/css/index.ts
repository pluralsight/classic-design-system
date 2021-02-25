import {
  colorsBackgroundUtility,
  colorsBackgroundLight,
  colorsBlue,
  colorsBorder,
  colorsStatus,
  colorsTextIcon,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'
import { widths as iconWidths } from '@pluralsight/ps-design-system-icon'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars'

export default {
  '@keyframes psds-dropdown__menu__keyframes__slide': {
    '100%': {
      transform: 'translate(0,0)',
      opacity: 1
    }
  },

  '.psds-dropdown': {
    display: 'inline-flex',
    flexDirection: 'column',
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
    fontSize: type.fontSize200,
    lineHeight: type.lineHeightStandard,
    fontWeight: type.fontWeightDefault,
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

  '.psds-dropdown__divider': {
    height: '1px',
    width: '100%',
    backgroundColor: colorsBorder.lowOnLight,
    margin: `${layout.spacingXXSmall} 0`
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
    fontSize: type.fontSize100,
    fontWeight: type.fontWeight500,
    marginBottom: layout.spacingXXSmall
  },
  [`.psds-dropdown__label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },

  // __sub-label
  '.psds-dropdown__sub-label': {
    color: colorsTextIcon.lowOnDark,
    fontSize: type.fontSize100,
    fontWeight: type.fontWeightDefault,
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
  '.psds-dropdown__menu-wrapper': {
    position: 'fixed',
    // TODO: use layers when in core
    zIndex: 980,
    marginTop: layout.spacingXXSmall
  },
  '.psds-dropdown__menu': {
    maxHeight: 400,
    overflowY: 'auto',
    display: 'block',
    background: colorsBackgroundLight[3],
    borderRadius: '2px',
    padding: `${layout.spacingXXSmall} 0`,
    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`,
    fontSize: type.fontSize200,
    opacity: 0,
    transform: `translate(0, calc(-1 * ${layout.spacingXSmall}))`,
    right: 0,
    top: 0
  },
  '.psds-dropdown__menu__animation': ({ slide }: { slide: string }) => ({
    animation: `${slide || 'psds-dropdown__menu__keyframes__slide'} ${
      motion.speedNormal
    } forwards`
  }),

  '.psds-dropdown__field-halo': {
    maxWidth: '100%',
    width: '100%',
    display: 'block'
  },

  '.psds-dropdown__item': {
    label: 'dropdown__item',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    width: '100%',
    transition: `background ${motion.speedXFast}`,
    color: colorsTextIcon.highOnLight,
    lineHeight: type.lineHeightExtra,
    fontWeight: type.fontWeight500,
    cursor: 'pointer',
    border: 'none',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: layout.spacingMedium,
    paddingRight: layout.spacingMedium,
    background: 'none',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      outline: 'none'
    },
    '&:hover:not(:disabled)': {
      background: colorsBackgroundUtility[25],
      color: colorsTextIcon.highOnLight
    }
  },
  '.psds-dropdown__item--disabled': {
    opacity: '50%',
    cursor: 'not-allowed',
    outline: 'none',
    pointerEvents: 'none'
  },
  '.psds-dropdown__item--active': {
    '&:not(:disabled)': {
      background: colorsBackgroundUtility[25],
      color: colorsTextIcon.highOnLight
    }
  },
  '.psds-dropdown__item-icon': {
    display: 'inline-flex',
    alignItems: 'center',
    marginRight: layout.spacingXSmall
  },
  '.psds-dropdown__item-text': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '&:not(:last-child)': {
      marginRight: layout.spacingXSmall
    }
  },
  '.psds-dropdown__item-selected-icon': {
    marginLeft: 'auto',
    color: colorsBlue[7]
  }
}

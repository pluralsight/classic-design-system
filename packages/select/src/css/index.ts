import {
  colorsBackgroundUtility,
  colorsBackgroundLight,
  colorsBorder,
  colorsStatus,
  colorsTextIcon,
  layers,
  layout,
  type
} from '@pluralsight/ps-design-system-core'
import { widths as iconWidths } from '@pluralsight/ps-design-system-icon'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'
export default {
  // __button
  '.psds-select__button': {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    minWidth: `calc(${iconWidths.medium} + ${layout.spacingXSmall})`,
    maxWidth: '100%',
    cursor: 'pointer',
    background: 'none',
    outline: 'none',
    boxShadow: 'none',
    height: '40px',
    border: `1px solid ${colorsBorder.highOnLight}`,
    padding: `0 ${layout.spacingSmall} 0 ${layout.spacingMedium}`,
    '&:focus': {
      borderRadius: '3px',
      border: `3px solid ${colorsStatus.info}`
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '50%'
    }
  },
  [`.psds-select__button--error`]: {
    borderRadius: '3px',
    border: `3px solid ${colorsStatus.error}`,
    '&:focus': {
      borderColor: colorsStatus.error
    }
  },
  '.psds-select__button--small': {
    height: '32px',
    padding: `0 ${layout.spacingXSmall}`
  },
  [`.psds-select__button.psds-theme--${themeNames.light}`]: {
    background: colorsBackgroundLight[3],
    color: colorsTextIcon.highOnLight
  },
  [`.psds-select__button.psds-theme--${themeNames.dark}`]: {
    background: colorsBackgroundUtility[25],
    color: colorsTextIcon.highOnDark
  },
  [`.psds-select__button--is-open.psds-theme--${themeNames.light}`]: {
    background: colorsBackgroundLight[2]
  },
  [`.psds-select__button--is-open.psds-theme--${themeNames.dark}`]: {
    background: colorsBackgroundUtility[40]
  },
  // __button-inner
  '.psds-select__button-inner': {
    display: 'inline-flex',
    alignItems: 'center',
    textAlign: 'left',
    minWidth: 0,
    width: '100%',
    fontSize: type.fontSize200,
    lineHeight: type.lineHeightStandard,
    fontWeight: type.fontWeightDefault
  },
  // __error-icon
  '.psds-select__error': {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: `translate(calc(100% + ${layout.spacingXSmall}), -50%)`,
    display: 'flex',
    alignItems: 'center',
    color: colorsStatus.error,
    marginLeft: layout.spacingXSmall
  },
  // __selected
  '.psds-select__selected': {
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  [`.psds-select__placeholder.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },
  [`.psds-select__placeholder.psds-theme--${themeNames.dark}`]: {
    color: colorsTextIcon.lowOnDark
  },
  // icon
  '.psds-select__icon': {
    marginLeft: layout.spacingXSmall,
    display: 'flex',
    alignItems: 'center'
  },
  [`.psds-select__icon.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },
  [`.psds-select__icon.psds-theme--${themeNames.dark}`]: {
    color: colorsTextIcon.lowOnDark
  },
  // menu
  '.psds-select__menu': {
    zIndex: layers.globalDropdown
  }
}

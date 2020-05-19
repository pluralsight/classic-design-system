import {
  colorsBlue,
  colorsWhite,
  colorsBackgroundDark,
  colorsBackgroundLight,
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

export default {
  '.psds-radio-group': {
    '&:focus': { outline: 'none' }
  },
  '.psds-radio-group--disabled': {
    opacity: '0.5'
  },

  '.psds-radio-group__button-container': {
    padding: `${layout.spacingXXSmall} 0`
  },

  '.psds-radio-group__label': {
    color: colorsTextIcon.highOnDark,
    fontSize: type.fontSizeXSmall,
    fontWeight: type.fontWeightMedium,
    marginBottom: layout.spacingXXSmall
  },
  [`.psds-radio-group__label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },

  '.psds-radio-group__sub-label': {
    color: colorsTextIcon.lowOnDark,
    fontSize: type.fontSizeXSmall,
    fontWeight: type.fontWeightBook,
    marginTop: layout.spacingXXSmall
  },
  [`.psds-radio-group__sub-label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },

  '.psds-radio-button': {
    display: 'flex',
    alignItems: 'center',
    padding: `${layout.spacingXXSmall} 0`,
    cursor: 'pointer'
  },

  '.psds-radio-button__halo': {
    transform: 'translateY(3px)'
  },

  '.psds-radio-button__circle-outer': {
    width: '16px',
    marginRight: layout.spacingSmall,
    pointerEvents: 'none'
  },

  '.psds-radio-button__circle': {
    position: 'relative',
    display: 'inline-block',
    height: '16px',
    width: '16px',
    borderRadius: '50%',
    border: `2px solid ${colorsTextIcon.lowOnDark}`,
    background: colorsBackgroundDark[1],

    '&:focus': { outline: 'none' }
  },
  [`.psds-radio-button__circle.psds-theme--${themeNames.light}`]: {
    background: colorsBackgroundLight[3],
    borderColor: colorsTextIcon.lowOnLight
  },
  '.psds-radio-button__circle--checked': {
    borderColor: colorsBlue.base,
    background: colorsBlue.base
  },

  '.psds-radio-button__circle-inner': {
    display: 'block',
    height: 'calc(100% - 6px)',
    width: 'calc(100% - 6px)',
    margin: '3px',
    borderRadius: '50%',
    background: colorsWhite
  },

  '.psds-radio-button__input': {
    opacity: 0,
    width: 0,
    height: 0,
    '&:focus': {
      outline: 'none'
    }
  },

  '.psds-radio-button__label': {
    color: colorsTextIcon.highOnDark,
    fontSize: type.fontSizeSmall,
    lineHeight: type.lineHeightStandard,
    fontWeight: type.fontWeightBook
  },
  [`.psds-radio-button__label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  }
}

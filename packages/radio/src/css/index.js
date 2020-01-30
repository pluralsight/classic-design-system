import * as core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

export default {
  '.psds-radio-group': {
    '&:focus': { outline: 'none' }
  },
  '.psds-radio-group--disabled': {
    opacity: '0.5'
  },

  '.psds-radio-group__button-container': {
    padding: `${core.layout.spacingXXSmall} 0`
  },

  '.psds-radio-button': {
    display: 'flex',
    alignItems: 'center',
    padding: `${core.layout.spacingXXSmall} 0`,
    cursor: 'pointer'
  },

  '.psds-radio-button__halo': {
    transform: 'translateY(3px)'
  },

  '.psds-radio-button__circle-outer': {
    width: '16px',
    marginRight: core.layout.spacingSmall
  },

  '.psds-radio-button__circle': {
    position: 'relative',
    display: 'inline-block',
    height: '16px',
    width: '16px',
    borderRadius: '50%',
    border: `2px solid ${core.colorsTextIcon.lowOnDark}`,
    background: core.colorsBackgroundDark[1],

    '&:focus': { outline: 'none' }
  },
  [`.psds-radio-button__circle.psds-theme--${themeNames.light}`]: {
    background: core.colorsBackgroundLight[3],
    borderColor: core.colorsTextIcon.lowOnLight
  },
  '.psds-radio-button__circle--checked': {
    borderColor: core.colorsBlue.base
  },

  '.psds-radio-button__circle-inner': {
    display: 'block',
    height: 'calc(100% - 4px)',
    width: 'calc(100% - 4px)',
    margin: '2px',
    borderRadius: '50%',
    background: core.colorsBlue.base
  },

  '.psds-radio-button__input': {
    display: 'none'
  },

  '.psds-radio-button__label': {
    color: core.colorsTextIcon.highOnDark,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    fontWeight: core.type.fontWeightMedium
  },
  [`.psds-radio-button__label.psds-theme--${themeNames.light}`]: {
    color: core.colorsTextIcon.highOnLight
  }
}

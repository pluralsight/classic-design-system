import core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

export default {
  // group

  '.psds-radio-group:focus': {
    outline: 'none'
  },
  '.psds-radio-group--disabled': {
    opacity: '0.5'
  },

  // __button-container
  '.psds-radio-group__button-container': {
    padding: `${core.layout.spacingXXSmall} 0`
  },

  // button
  '.psds-radio-button': {
    display: 'flex',
    alignItems: 'center',
    padding: `${core.layout.spacingXXSmall} 0`,
    cursor: 'pointer'
  },

  // __circle
  '.psds-radio-button__circle': {
    position: 'relative',
    display: 'inline-block',
    height: '16px',
    width: '16px',
    borderRadius: '50%',
    border: `2px solid ${core.colors.gray02}`,
    background: core.colors.gray05
  },
  [`.psds-radio-button__circle.psds-theme--${themeNames.light}`]: {
    background: core.colors.white,
    borderColor: core.colors.gray04
  },
  '.psds-radio-button__circle:focus': {
    outline: 'none'
  },
  '.psds-radio-button__circle--checked': {
    borderColor: core.colors.blue
  },

  // __circle-inner
  '.psds-radio-button__circle-inner': {
    display: 'block',
    height: 'calc(100% - 4px)',
    width: 'calc(100% - 4px)',
    margin: '2px',
    borderRadius: '50%',
    background: core.colors.blue
  },

  // __input
  '.psds-radio-button__input': {
    display: 'none'
  },

  // __label
  '.psds-radio-button__label': {
    marginLeft: core.layout.spacingSmall,
    color: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    fontWeight: core.type.fontWeightMedium
  },
  [`.psds-radio-button__label.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray04
  }
}

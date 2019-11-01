import * as core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

export default {
  '.psds-checkbox': {
    display: 'flex',
    alignItems: 'center',
    padding: `${core.layout.spacingXXSmall} 0`,
    cursor: 'pointer'
  },
  '.psds-checkbox--disabled': {
    opacity: '0.5'
  },

  // __square
  '.psds-checkbox__square': {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    height: '16px',
    width: '16px',
    borderRadius: '2px',
    border: `2px solid ${core.colors.gray02}`,
    background: core.colors.gray05,
    color: core.colors.white
  },
  [`.psds-checkbox__square.psds-theme--${themeNames.light}`]: {
    background: core.colors.white,
    borderColor: core.colors.gray04,

    '&:focus': { outline: 'none' }
  },
  '.psds-checkbox__square:focus:before .psds-checkbox__square--error:before': {
    content: ' ',
    position: 'absolute',
    top: '-3px',
    left: '-3px',
    right: '-3px',
    bottom: '-3px',
    zIndex: '-1',
    borderRadius: '2px'
  },
  [`.psds-checkbox__square.psds-theme--${themeNames.light}:focus:before .psds-checkbox__square--error.psds-theme--${themeNames.light}:before`]: {
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px'
  },
  '.psds-checkbox__square:focus:after .psds-checkbox__square--error:after': {
    content: ' ',
    position: 'absolute',
    top: '-6px',
    left: '-6px',
    right: '-6px',
    bottom: '-6px',
    zIndex: '-2',
    borderRadius: '4px'
  },
  [`.psds-checkbox__square.psds-theme--${themeNames.light}:focus:after .psds-checkbox__square--error.psds-theme--${themeNames.light}:after`]: {
    top: '-7px',
    left: '-7px',
    right: '-7px',
    bottom: '-7px'
  },
  '.psds-checkbox__square:focus:before': {
    background: core.colors.gray05
  },
  '.psds-checkbox__square:focus:after': {
    background: core.colors.blue
  },
  [`.psds-checkbox__square.psds-theme--${themeNames.light}:focus:before`]: {
    background: core.colors.bone
  },
  '.psds-checkbox__square--error:before': {
    background: core.colors.gray05
  },
  [`.psds-checkbox__square--error.psds-theme--${themeNames.light}:before`]: {
    background: core.colors.bone
  },
  '.psds-checkbox__square--error:after': {
    background: core.colors.red
  },
  '.psds-checkbox__square--active': {
    background: core.colors.blue,
    border: 'none'
  },
  '.psds-checkbox__square--active:focus:before, .psds-checkbox__square--active--error:before': {
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px'
  },
  [`.psds-checkbox__square--active.psds-theme--${themeNames.light}:focus:before, .psds-checkbox__square--active--error.psds-theme--${themeNames.light}:before`]: {
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px'
  },
  '.psds-checkbox__square--active:focus:after, .psds-checkbox__square--active--error:after': {
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px'
  },
  [`.psds-checkbox__square--active.psds-theme--${themeNames.light}:focus:after, .psds-checkbox__square--active--error.psds-theme--${themeNames.light}:after`]: {
    top: '-5px',
    left: '-5px',
    right: '-5px',
    bottom: '-5px'
  },

  // __icon
  '.psds-checkbox__icon': {
    height: '100%',
    width: '100%',
    fill: core.colors.white
  },

  // __input
  '.psds-checkbox__input': {
    display: 'none'
  },

  // __label
  '.psds-checkbox__label': {
    marginLeft: core.layout.spacingSmall,
    color: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    fontWeight: core.type.fontWeightMedium
  },
  [`.psds-checkbox__label.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray04
  }
}

import core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/vars'

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
    display: 'inline-block',
    height: '16px',
    width: '16px',
    borderRadius: '2px',
    border: `2px solid ${core.colors.gray04}`,
    background: core.colors.gray04,
    color: core.colors.white
  },
  [`.psds-checkbox__square.psds-theme--${themeNames.light}`]: {
    background: core.colors.white
  },
  '.psds-checkbox__square:focus': {
    outline: 'none'
  },
  '.psds-checkbox__square:focus:before': {
    content: ' ',
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    background: core.colors.gray05,
    zIndex: '-1',
    borderRadius: '2px'
  },
  '.psds-checkbox__square:focus:after': {
    content: ' ',
    position: 'absolute',
    top: '-7px',
    left: '-7px',
    right: '-7px',
    bottom: '-7px',
    background: core.colors.blue,
    zIndex: '-2',
    borderRadius: '4px'
  },
  [`.psds-checkbox__square.psds-theme--${themeNames.light}:focus:before`]: {
    background: core.colors.bone
  },
  '.psds-checkbox__square--error:before': {
    content: ' ',
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    background: core.colors.gray05,
    zIndex: '-1',
    borderRadius: '2px'
  },
  [`.psds-checkbox__square--error.psds-theme--${themeNames.light}:before`]: {
    background: core.colors.bone
  },
  '.psds-checkbox__square--error:after': {
    content: ' ',
    position: 'absolute',
    top: '-7px',
    left: '-7px',
    right: '-7px',
    bottom: '-7px',
    background: core.colors.red,
    zIndex: '-2',
    borderRadius: '4px'
  },
  '.psds-checkbox__square--checked': {
    background: core.colors.blue,
    border: 'none'
  },
  '.psds-checkbox__square--checked:focus:before, .psds-checkbox__square--checked--error:before': {
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px'
  },
  '.psds-checkbox__square--checked:focus:after, .psds-checkbox__square--checked--error:after': {
    top: '-5px',
    left: '-5px',
    right: '-5px',
    bottom: '-5px'
  },

  // __checkmark
  '.psds-checkbox__checkmark': {
    display: 'block',
    height: '100%',
    width: '100%',
    background: core.colors.blue,
    color: core.colors.white
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

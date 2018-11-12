import core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

import * as vars from '../vars'

const hover = {
  backgroundColor: core.colors.gray02,
  color: core.colors.black,
  cursor: 'pointer',
  outline: 'none'
}
const accent = {
  color: core.colors.white,
  backgroundColor: core.colors.blue
}

export default {
  '.psds-tag': {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '16px',
    fontWeight: core.type.fontWeightMedium,
    textDecoration: 'none',
    border: 'none',
    transition: `background-color ${core.motion.speedXFast} linear, color ${
      core.motion.speedXFast
    } linear`
  },

  // --clickable
  '.psds-tag--clickable:hover': hover,
  '.psds-tag--clickable:focus': hover,
  '.psds-tag--clickable:focus:before, .psds-tag--clickable.psds-tag--error:before': {
    content: ' ',
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    background: core.colors.black,
    zIndex: '-1',
    borderRadius: '16px'
  },
  [`.psds-tag--clickable.psds-theme--${
    themeNames.light
  }:focus:before, .psds-tag--clickable.psds-tag--error.psds-theme--${
    themeNames.light
  }:before`]: {
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    background: core.colors.bone
  },
  '.psds-tag--clickable:focus:after, .psds-tag--clickable.psds-tag--error:after': {
    content: ' ',
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    zIndex: '-2',
    borderRadius: '18px'
  },
  [`.psds-tag--clickable.psds-theme--${
    themeNames.light
  }:focus:after, .psds-tag--clickable.psds-tag--error.psds-theme--${
    themeNames.light
  }:after`]: {
    top: '-5px',
    left: '-5px',
    right: '-5px',
    bottom: '-5px',
    borderRadius: '20px'
  },
  '.psds-tag--clickable:focus:after': {
    background: core.colors.blue
  },
  '.psds-tag--clickable.psds-tag--error:after': {
    background: core.colors.red
  },

  // --appearance
  [`.psds-tag--appearance-${vars.appearances.accent}`]: accent,
  [`.psds-tag--appearance-${vars.appearances.basic}`]: {
    color: core.colors.bone,
    backgroundColor: core.colors.gray03
  },
  [`.psds-tag--appearance-${vars.appearances.bright}`]: {
    color: core.colors.gray06,
    backgroundColor: core.colors.white,
    border: `1px solid ${core.colors.gray02}`
  },
  // --size
  [`.psds-tag--size-${vars.sizes.small}`]: {
    height: '24px',
    padding: `0 ${core.layout.spacingSmall}`,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: core.type.lineHeightStandard
  },
  [`.psds-tag--size-${vars.sizes.medium}`]: {
    height: '32px',
    padding: `0 ${core.layout.spacingMedium}`,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightExtra
  },
  // --icon
  '.psds-tag--icon': {
    paddingRight: core.layout.spacingXXSmall
  },
  // --isPressed
  '.psds-tag--isPressed': accent,
  // __label
  '.psds-tag__label': {
    display: 'inline-block',
    maxWidth: '160px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  // __label--icon
  '.psds-tag__label--icon': {
    marginRight: core.layout.spacingXXSmall
  }
}

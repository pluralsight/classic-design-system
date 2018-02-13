import core from '@pluralsight/ps-design-system-core'

import * as vars from '../vars'

const hover = {
  backgroundColor: core.colors.gray02,
  color: core.colors.black,
  cursor: 'pointer'
}
const accent = {
  color: core.colors.white,
  backgroundColor: core.colors.blue
}

export default {
  '.psds-tag': {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '16px',
    fontWeight: core.type.fontWeightMedium,
    textDecoration: 'none',
    border: 'none',
    overflow: 'hidden',
    transition: `background-color ${core.motion.speedXFast} linear, color ${
      core.motion.speedXFast
    } linear`
  },
  // --clickable
  '.psds-tag--clickable:hover': hover,
  '.psds-tag--clickable:focus': hover,
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

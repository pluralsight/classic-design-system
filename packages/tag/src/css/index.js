import * as core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars/index.js'

const base = '.psds-tag'

export default {
  [base]: {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '16px',
    fontWeight: core.type.fontWeightMedium,
    textDecoration: 'none',
    border: '1px solid transparent',
    color: core.colors.bone,
    backgroundColor: core.colors.gray03,
    transition: `background-color ${core.motion.speedXFast} linear, color ${core.motion.speedXFast} linear`
  },
  [base + '.psds-theme--' + themeNames.light]: {
    backgroundColor: core.colors.white,
    borderColor: core.colors.gray02,
    color: core.colors.gray06
  },

  [base + '--clickable']: {
    '&:hover, &:focus': {
      backgroundColor: core.colors.gray02,
      color: core.colors.black,
      cursor: 'pointer',
      outline: 'none'
    }
  },
  [base + '--clickable' + '.psds-theme--' + themeNames.light]: {
    '&:hover, &:focus': {
      backgroundColor: core.colors.bone,
      borderColor: core.colors.gray03
    }
  },

  [`${base}--size-${vars.sizes.small}`]: {
    height: '24px',
    padding: `0 ${core.layout.spacingSmall}`,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: core.type.lineHeightStandard
  },
  [`${base}--size-${vars.sizes.medium}`]: {
    height: '32px',
    padding: `0 ${core.layout.spacingMedium}`,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightExtra
  },

  [base + '--icon']: {
    paddingRight: core.layout.spacingXXSmall
  },

  [base + '--isPressed']: {
    color: core.colors.white,
    backgroundColor: core.colors.blue,
    borderColor: 'transparent'
  },

  [base + '__label']: {
    display: 'inline-block',
    maxWidth: '160px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  [base + '__label--icon']: {
    marginRight: core.layout.spacingXXSmall
  }
}

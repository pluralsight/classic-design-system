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
    color: core.colorsTextIcon.highOnDark,
    backgroundColor: core.colorsBackgroundUtility[25],
    transition: `background-color ${core.motion.speedXFast} linear, color ${core.motion.speedXFast} linear`
  },
  [base + '.psds-theme--' + themeNames.light]: {
    color: core.colorsTextIcon.highOnLight
  },

  [base + '--clickable']: {
    '&:hover, &:focus': {
      backgroundColor: core.colorsBackgroundUtility[30],
      color: core.colorsTextIcon.highOnDark,
      cursor: 'pointer',
      outline: 'none'
    }
  },
  [base + '--clickable' + '.psds-theme--' + themeNames.light]: {
    '&:hover, &:focus': {
      backgroundColor: core.colorsBackgroundUtility[30],
      color: core.colorsTextIcon.highOnLight
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
    color: core.colorsTextIcon.highOnDark,
    backgroundColor: core.colorsPrimaryAction.background
  },

  [base + '--isPressed' + base + '--clickable']: {
    '&:hover, &:focus': {
      backgroundColor: core.colorsBlue[5],
      color: core.colorsTextIcon.highOnDark
    }
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

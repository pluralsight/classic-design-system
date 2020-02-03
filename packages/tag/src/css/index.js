import {
  colorsBackgroundUtility,
  colorsBlue,
  colorsPrimaryAction,
  colorsTextIcon,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'
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
    fontWeight: type.fontWeightMedium,
    textDecoration: 'none',
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsBackgroundUtility[25],
    transition: `background-color ${motion.speedXFast} linear, color ${motion.speedXFast} linear`
  },
  [base + '.psds-theme--' + themeNames.light]: {
    color: colorsTextIcon.highOnLight
  },

  [base + '--clickable']: {
    '&:hover, &:focus': {
      backgroundColor: colorsBackgroundUtility[30],
      color: colorsTextIcon.highOnDark,
      cursor: 'pointer',
      outline: 'none'
    }
  },
  [base + '--clickable' + '.psds-theme--' + themeNames.light]: {
    '&:hover, &:focus': {
      backgroundColor: colorsBackgroundUtility[30],
      color: colorsTextIcon.highOnLight
    }
  },

  [`${base}--size-${vars.sizes.small}`]: {
    height: '24px',
    padding: `0 ${layout.spacingSmall}`,
    fontSize: type.fontSizeXSmall,
    lineHeight: type.lineHeightStandard
  },
  [`${base}--size-${vars.sizes.medium}`]: {
    height: '32px',
    padding: `0 ${layout.spacingMedium}`,
    fontSize: type.fontSizeSmall,
    lineHeight: type.lineHeightExtra
  },

  [base + '--icon']: {
    paddingRight: layout.spacingXXSmall
  },

  [base + '--isPressed']: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsPrimaryAction.background
  },

  [base + '--isPressed' + base + '--clickable']: {
    '&:hover, &:focus': {
      backgroundColor: colorsBlue[5],
      color: colorsTextIcon.highOnDark
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
    marginRight: layout.spacingXXSmall
  }
}

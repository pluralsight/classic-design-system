import {
  colorsBackgroundUtility,
  colorsTextIcon,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'
import { themeNames } from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars/index'

const option = {
  display: 'inline-block',
  maxWidth: '160px',
  height: '32px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  lineHeight: '20px',
  fontSize: '14px',
  fontWeight: type.fontWeight500,
  padding: `0 ${layout.spacingSmall}`,
  border: 'none',
  borderRadius: `3px`,
  cursor: 'pointer',
  transition: `all ${motion.speedNormal}`
}

export default {
  '.psds-viewtoggle': {
    position: 'relative',
    display: 'inline-flex',
    margin: 0,
    padding: '0',
    height: '32px',
    background: colorsBackgroundUtility[25],
    borderRadius: `3px`
  },
  [`.psds-viewtoggle.psds-theme--${themeNames.light}`]: {
    background: colorsBackgroundUtility[20]
  },

  // __option
  '.psds-viewtoggle__option': {
    ...option,
    position: 'relative',
    background: 'none',
    color: colorsTextIcon.lowOnDark,
    '&:hover, &:focus': {
      color: colorsTextIcon.highOnDark
    }
  },
  [`.psds-viewtoggle__option.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight,
    '&:hover, &:focus': {
      color: colorsTextIcon.highOnLight
    }
  },

  '.psds-viewtoggle__option--active': {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-viewtoggle__option--active.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },

  // __option-bg
  '.psds-viewtoggle__option-bg': {
    ...option,
    position: 'absolute',
    top: '0',
    background: colorsBackgroundUtility[40]
  },
  [`.psds-viewtoggle__option-bg.psds-theme--${themeNames.light}`]: {
    background: colorsBackgroundUtility[30]
  },

  // __option-bg__spacer
  '.psds-viewtoggle__option-bg__spacer': {
    opacity: 0
  }
}

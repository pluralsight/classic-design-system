import {
  colorsBackgroundUtility,
  colorsBorder,
  colorsTextIcon,
  colorsWhite,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars/index'

const option = {
  display: 'inline-block',
  maxWidth: '160px',
  height: vars.style.innerHeight,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  lineHeight: `calc(${vars.style.innerHeight} - 1px)`,
  fontSize: '10px',
  fontWeight: type.fontWeight500,
  padding: `0 ${layout.spacingSmall}`,
  border: 'none',
  borderRadius: `calc(${vars.style.innerHeight} / 2)`,
  cursor: 'pointer',
  transition: `all ${motion.speedNormal}`
}

export default {
  '.psds-viewtoggle': {
    position: 'relative',
    display: 'inline-flex',
    margin: 0,
    padding: '2px 3px',
    height: vars.style.outerHeight,
    background: colorsBackgroundUtility[25],
    border: `1px solid ${colorsBorder.lowOnDark}`,
    borderRadius: `calc(${vars.style.outerHeight} / 2)`,
    overflow: 'hidden'
  },
  [`.psds-viewtoggle.psds-theme--${themeNames.light}`]: {
    borderColor: colorsBorder.lowOnLight
  },

  // __option
  '.psds-viewtoggle__option': {
    ...option,
    position: 'relative',
    background: 'none',
    color: colorsTextIcon.highOnDark
  },
  [`.psds-viewtoggle__option.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  '.psds-viewtoggle__option--active': {
    color: colorsTextIcon.highOnLight
  },

  // __option-bg
  '.psds-viewtoggle__option-bg': {
    ...option,
    position: 'absolute',
    top: '1px',
    background: colorsWhite
  },
  [`.psds-viewtoggle__option-bg.psds-theme--${themeNames.light}`]: {
    border: `1px solid ${colorsBorder.lowOnLight}`
  },

  // __option-bg__spacer
  '.psds-viewtoggle__option-bg__spacer': {
    opacity: 0
  }
}

import * as core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars/index.js'

const option = {
  display: 'inline-block',
  maxWidth: '160px',
  height: vars.style.innerHeight,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  lineHeight: `calc(${vars.style.innerHeight} - 1px)`,
  fontSize: '10px',
  fontWeight: core.type.fontWeightMedium,
  padding: `0 ${core.layout.spacingSmall}`,
  border: 'none',
  borderRadius: `calc(${vars.style.innerHeight} / 2)`,
  cursor: 'pointer',
  transition: `all ${core.motion.speedNormal}`
}

export default {
  '.psds-viewtoggle': {
    position: 'relative',
    display: 'inline-flex',
    margin: 0,
    padding: '2px 3px',
    height: vars.style.outerHeight,
    background: core.colorsBackgroundUtility[25],
    border: `1px solid ${core.colorsBorder.lowOnDark}`,
    borderRadius: `calc(${vars.style.outerHeight} / 2)`,
    overflow: 'hidden'
  },
  [`.psds-viewtoggle.psds-theme--${themeNames.light}`]: {
    borderColor: core.colorsBorder.lowOnLight
  },

  // __option
  '.psds-viewtoggle__option': {
    ...option,
    position: 'relative',
    background: 'none',
    color: core.colorsTextIcon.highOnDark
  },
  [`.psds-viewtoggle__option.psds-theme--${themeNames.light}`]: {
    color: core.colorsTextIcon.highOnLight
  },
  '.psds-viewtoggle__option--active': {
    color: core.colorsTextIcon.highOnLight
  },

  // __option-bg
  '.psds-viewtoggle__option-bg': {
    ...option,
    position: 'absolute',
    top: '1px',
    background: core.colors.white
  },
  [`.psds-viewtoggle__option-bg.psds-theme--${themeNames.light}`]: {
    border: `1px solid ${core.colorsBorder.lowOnLight}`
  },

  // __option-bg__spacer
  '.psds-viewtoggle__option-bg__spacer': {
    opacity: 0
  }
}

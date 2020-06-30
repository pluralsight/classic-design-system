import * as core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

const vars = {
  handleWidth: 9,
  nativeScrollWidth: 18
}

export default {
  '.psds-scrollable__outer': {
    label: 'scrollable__outer',

    display: 'block'
  },
  '.psds-scrollable__outer--screen': {
    position: 'relative'
  },

  '.psds-scrollable__inner': {
    label: 'scrollable__inner',

    height: '100%',
    overflow: 'hidden'
  },

  '.psds-scrollable__content': {
    label: 'scrollable__content',

    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    paddingRight: vars.nativeScrollWidth,
    width: `calc(100% + ${vars.nativeScrollWidth}px)`
  },

  '.psds-scrollable__handle': {
    label: 'scrollable__handle',

    borderRadius: '4px',
    cursor: 'pointer',
    opacity: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    transition: `all ${core.motion.speedFast} ease-in-out`,
    transitionProperty: 'opacity, background, right',
    width: vars.handleWidth,

    '[data-scrollable]:active >  &, [data-scrollable]:hover > &': { opacity: 1 }
  },
  [`.psds-scrollable__handle.psds-theme--${themeNames.dark}`]: {
    backgroundColor: core.colorsBackgroundDark[2],
    '&:active, &:hover': { backgroundColor: core.colorsBackgroundDark[3] }
  },
  [`.psds-scrollable__handle.psds-theme--${themeNames.light}`]: {
    backgroundColor: core.colorsBackgroundLight[2],
    '&:active, &:hover': { backgroundColor: core.colorsBackgroundLight[3] }
  },
  '.psds-scrollable__handle--grabbed': {
    label: 'scrollable__handle--grabbed',

    userSelect: 'none'
  }
}

import {
  colorsBackgroundDark,
  colorsBackgroundLight,
  colorsBorder,
  layout,
  motion
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import { breakpoints, sidenavStates } from '../vars/index.js'

const layers = {
  content: 0,
  sidenav: 930,
  topnav: 950,
  skipBanner: 1600
}

const sidenavMinimizedWidth = '72px'
const sidenavWidth = '240px'
const topnavHeight = '56px'

export default {
  '.psds-frame': {
    display: 'flex',
    flexDirection: 'column',
    left: 0,
    minHeight: '100vh',
    position: 'absolute',
    top: 0
  },

  [`.psds-frame.psds-theme--${themeNames.dark}`]: {
    background: colorsBackgroundDark[1]
  },
  [`.psds-frame.psds-theme--${themeNames.light}`]: {
    background: colorsBackgroundLight[1]
  },

  '.psds-frame__skip-banner': {
    top: 0,
    left: '50%',
    padding: ` ${layout.spacingSmall}`,
    position: 'fixed',
    transform: 'translate(-50%, -300px)',
    transition: 'transform 1s ease-out',
    zIndex: layers.skipBanner,

    '&:focus-within, &[focus-within]': {
      opacity: 1,
      transform: `translate(-50%, 0)`,
      transition: 'top 0.1s ease-in'
    },

    '@media print ': { display: 'none' }
  },

  '.psds-frame__container': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

    [`@media (min-width: ${breakpoints.medium})`]: {
      flexDirection: 'row'
    }
  },
  '.psds-frame__content': {
    flex: 1,
    width: '100vw',
    zIndex: layers.content
  },
  '.psds-frame__sidenav': {
    backgroundColor: colorsBackgroundDark[2],
    borderRight: `1px solid ${colorsBorder.lowOnDark}`,
    flexDirection: 'row',
    height: `calc(100vh - ${topnavHeight})`,
    position: 'fixed',
    overflow: 'hidden',
    zIndex: layers.sidenav,
    width: sidenavWidth,

    transition: `all ${motion.speedFast} ease-in-out`,
    transitionProperty: 'boxShadow, transform, width',

    '&::after': {
      content: ' ',
      display: 'block',
      height: '100%',
      left: 0,
      position: 'fixed',
      top: 0,
      transition: `box-shadow ${motion.speedFast} ease-in-out`,
      width: '100%'
    },

    [`@media (min-width: ${breakpoints.medium})`]: {
      position: 'static'
    }
  },

  [`.psds-frame__sidenav--${sidenavStates.open}`]: {
    transform: 'translate(0, 0)',

    '&::after': {
      boxShadow: '50px 0 100px rgba(0, 0, 0, .8)',

      [`@media (min-width: ${breakpoints.medium})`]: {
        boxShadow: 'none'
      }
    },

    [`@media (min-width: ${breakpoints.medium})`]: {}
  },
  [`.psds-frame__sidenav--${sidenavStates.closed}`]: {
    transform: 'translate(-100%, 0)',

    '&::after': { boxShadow: '0 0 0 rgba(0, 0, 0, .8)' },

    [`@media (min-width: ${breakpoints.medium})`]: {
      transform: 'translate(0, 0)',
      width: 0
    }
  },
  [`.psds-frame__sidenav--${sidenavStates.minimized}`]: {
    width: sidenavMinimizedWidth
  },

  '.psds-frame__sidenav__inner': {
    height: '100%',
    minWidth: sidenavWidth,

    '&:before, &:after': {
      display: 'block',
      content: ' ',
      height: 1
    }
  },

  '.psds-frame__topnav': {
    height: topnavHeight,
    width: '100vw',
    zIndex: layers.topnav
  }
}

import {
  colorsBackgroundDark,
  colorsBackgroundLight,
  colorsBorder,
  layout,
  motion
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import { breakpoints, sidenavVariants } from '../vars/index.js'

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
    label: 'frame'
  },

  [`.psds-frame.psds-theme--${themeNames.dark}`]: {
    background: colorsBackgroundDark[1]
  },
  [`.psds-frame.psds-theme--${themeNames.light}`]: {
    background: colorsBackgroundLight[1]
  },

  '.psds-frame__skip-banner': {
    label: 'frame__skip-banner',

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
    label: 'frame__container',

    minHeight: '100vh',
    transition: `all ${motion.speedFast} ease-in-out`,
    transitionProperty: 'padding-left'
  },
  [`.psds-frame__container--${sidenavVariants.open}`]: {
    [`@media (min-width: ${breakpoints.medium})`]: {
      paddingLeft: sidenavWidth
    }
  },
  [`.psds-frame__container--${sidenavVariants.overlay}`]: {
    paddingLeft: sidenavMinimizedWidth
  },
  [`.psds-frame__container--${sidenavVariants.minimized}`]: {
    paddingLeft: sidenavMinimizedWidth
  },

  '.psds-frame__content': {
    label: 'frame__content',

    paddingBottom: 1,
    paddingTop: topnavHeight,
    zIndex: layers.content
  },

  '.psds-frame__sidenav': {
    label: 'frame__sidenav',

    backgroundColor: colorsBackgroundDark[2],
    borderRight: `1px solid ${colorsBorder.lowOnDark}`,
    flexDirection: 'row',
    height: `calc(100vh - ${topnavHeight})`,
    left: 0,
    position: 'fixed',
    top: topnavHeight,
    transition: `all ${motion.speedFast} ease-in-out`,
    transitionProperty: 'transform, width',
    width: sidenavWidth,
    zIndex: layers.sidenav,

    '&::after': {
      content: ' ',
      display: 'block',
      height: '100%',
      left: 0,
      pointerEvents: 'none',
      position: 'fixed',
      top: 0,
      transition: `box-shadow ${motion.speedFast} ease-in-out`,
      width: '100%'
    }
  },

  [`.psds-frame__sidenav--${sidenavVariants.overlay}`]: {
    transform: 'translate(0, 0)',

    '&::after': { boxShadow: '50px 0 100px rgba(0, 0, 0, .8)' }
  },
  [`.psds-frame__sidenav--${sidenavVariants.closed}`]: {
    transform: 'translate(-100%, 0)',

    '&::after': { boxShadow: '0 0 0 rgba(0, 0, 0, .8)' },

    [`@media (min-width: ${breakpoints.medium})`]: {
      transform: 'translate(0, 0)',
      width: 0
    }
  },
  [`.psds-frame__sidenav--${sidenavVariants.minimized}`]: {
    width: sidenavMinimizedWidth
  },

  '.psds-frame__sidenav__overflow-mask': {
    label: 'frame__sidenav__overflow-mask',

    overflow: 'hidden'
  },

  '.psds-frame__sidenav__inner': {
    label: 'frame__sidenav__inner',

    height: '100%',
    minWidth: sidenavWidth,

    '&:before, &:after': {
      display: 'block',
      content: ' ',
      height: 1
    }
  },

  '.psds-frame__topnav': {
    label: 'frame__topnav',

    height: topnavHeight,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    width: '100vw',
    zIndex: layers.topnav
  }
}

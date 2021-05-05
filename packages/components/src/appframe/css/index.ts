import {
  breakpoints,
  colorsBackgroundDark,
  colorsBackgroundLight,
  colorsBorder,
  layout,
  motion
} from '../../core'
import { themeNames } from '../../theme'

import { sidenavVariants } from '../vars/index'

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
  '.psds-appframe': {
    label: 'appframe'
  },

  [`.psds-appframe.psds-theme--${themeNames.dark}`]: {
    background: colorsBackgroundDark[1]
  },
  [`.psds-appframe.psds-theme--${themeNames.light}`]: {
    background: colorsBackgroundLight[1]
  },

  '.psds-appframe__skip-banner': {
    label: 'appframe__skip-banner',

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

  '.psds-appframe__container': {
    label: 'appframe__container',

    minHeight: '100vh',
    transition: `all ${motion.speedFast} ease-in-out`,
    transitionProperty: 'padding-left'
  },
  [`.psds-appframe__container--${sidenavVariants.open}`]: {
    paddingLeft: sidenavWidth
  },
  [`.psds-appframe__container--${sidenavVariants.overlay}`]: {
    [`@media (min-width: ${breakpoints.small})`]: {
      paddingLeft: sidenavMinimizedWidth
    }
  },
  [`.psds-appframe__container--${sidenavVariants.minimized}`]: {
    paddingLeft: sidenavMinimizedWidth
  },

  '.psds-appframe__content': {
    label: 'appframe__content',

    paddingBottom: 1,
    paddingTop: topnavHeight,
    zIndex: layers.content
  },

  '.psds-appframe__sidenav': {
    label: 'appframe__sidenav',

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

  [`.psds-appframe__sidenav--${sidenavVariants.overlay}`]: {
    transform: 'translate(0, 0)',

    '&::after': { boxShadow: '50px 0 100px rgba(0, 0, 0, .8)' }
  },
  [`.psds-appframe__sidenav--${sidenavVariants.closed}`]: {
    transform: 'translate(-100%, 0)',

    '&::after': { boxShadow: '0 0 0 rgba(0, 0, 0, .8)' },

    [`@media (min-width: ${breakpoints.small})`]: {
      transform: 'translate(0, 0)',
      width: 0
    }
  },
  [`.psds-appframe__sidenav--${sidenavVariants.minimized}`]: {
    width: sidenavMinimizedWidth
  },

  '.psds-appframe__sidenav__overflow-mask': {
    label: 'appframe__sidenav__overflow-mask',

    height: '100%',
    overflow: 'hidden'
  },

  '.psds-appframe__sidenav__inner': {
    label: 'appframe__sidenav__inner',

    height: '100%',
    minWidth: sidenavWidth,

    '&:before, &:after': {
      display: 'block',
      content: ' ',
      height: 1
    }
  },

  '.psds-appframe__topnav': {
    label: 'appframe__topnav',

    height: topnavHeight,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    width: '100vw',
    zIndex: layers.topnav
  }
}

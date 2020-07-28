import {
  colorsBackgroundDark,
  colorsBackgroundLight,
  colorsBorder,
  layout
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

const breakpoints = {
  small: '640px',
  medium: '768px',
  large: '1024px',
  xLarge: '1280px'
}

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
    zIndex: 2000, // TODO: get away from z-index

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
    width: '100vw'
  },
  '.psds-frame__sidenav': {
    [`@media (min-width: ${breakpoints.medium})`]: {
      backgroundColor: colorsBackgroundDark[2],
      borderLeft: `1px solid ${colorsBorder.lowOnDark}`,
      borderRight: `1px solid ${colorsBorder.lowOnDark}`,
      flexDirection: 'row',
      width: '240px'
    }
  },
  '.psds-frame__topnav': {
    height: '56px',
    width: '100vw'
  }
}

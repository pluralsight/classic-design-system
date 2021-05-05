import { colorsBackgroundUtility, motion } from '../../core'

const vars = {
  handleWidth: 8,
  nativeScrollWidth: 18
}

export default {
  '.psds-scrollable__outer': {
    label: 'scrollable__outer',

    display: 'block'
  },
  '.psds-scrollable__outer--screen': { position: 'relative' },

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

    backgroundColor: colorsBackgroundUtility[40],
    borderRadius: '4px',
    cursor: 'pointer',
    opacity: 0,
    position: 'absolute',
    right: 2,
    top: 0,
    transition: `all ${motion.speedFast} ease-in-out`,
    transitionProperty: 'opacity, background, right',
    width: vars.handleWidth,

    '&:active, &:hover': { backgroundColor: colorsBackgroundUtility[60] },
    '[data-scrollable]:active >  &, [data-scrollable]:hover > &': { opacity: 1 }
  },
  '.psds-scrollable__handle--grabbed': {
    label: 'scrollable__handle--grabbed',

    opacity: 1,
    userSelect: 'none'
  }
}

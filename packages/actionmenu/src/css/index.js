import core from '@pluralsight/ps-design-system-core'

import * as vars from '../vars'

const menuOriginRight = {
  transform: `translateX(${core.layout.spacingXSmall})`
}
const menuOriginLeft = {
  transform: `translateX(calc(-1 * ${core.layout.spacingXSmall}))`
}

export default {
  ['@keyframes psds-actionmenu__keyframes__slide']: {
    '100%': {
      transform: 'translateX(0)',
      opacity: 1
    }
  },

  '.psds-actionmenu': ({ slide }) => ({
    position: 'absolute',
    display: 'inline-block',
    marginLeft: 0,
    background: core.colors.white,
    borderRadius: '2px',
    padding: `${vars.style.menuPaddingVert} 0`,
    minWidth: '160px',
    maxWidth: '320px',
    // overflow: 'hidden',
    listStyle: 'none',
    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`,
    fontSize: core.type.fontSizeSmall,
    opacity: 0,
    animation: `${slide || 'psds-actionmenu__keyframes__slide'} ${
      core.motion.speedNormal
    } forwards`
  }),

  // --origin
  [`.psds-actionmenu--origin-${vars.origins.topRight}`]: {
    ...menuOriginRight,
    right: 0,
    top: 0
  },
  [`.psds-actionmenu--origin-${vars.origins.bottomRight}`]: {
    ...menuOriginRight,
    bottom: 0,
    right: 0
  },
  [`.psds-actionmenu--origin-${vars.origins.topLeft}`]: {
    ...menuOriginLeft,
    left: 0,
    top: 0
  },
  [`.psds-actionmenu--origin-${vars.origins.bottomLeft}`]: {
    ...menuOriginLeft,
    left: 0,
    bottom: 0
  },

  // __item-container
  '.psds-actionmenu__item-container': {
    position: 'relative'
  },

  // __item
  '.psds-actionmenu__item': {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    lineHeight: core.type.lineHeightExtra,
    fontWeight: core.type.fontWeightMedium,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
    cursor: 'pointer',
    border: 'none',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: core.layout.spacingMedium,
    paddingRight: core.layout.spacingMedium,
    color: core.colors.gray05,
    background: 'none',
    textDecoration: 'none',
    transition: `background ${core.motion.speedXFast}`
  },

  '.psds-actionmenu__item:focus': {
    background: core.colors.bone,
    outline: 'none',
    color: core.colors.gray05
  },

  // __item--link
  '.psds-actionmenu__item--link': {
    color: core.colors.gray05
  },

  // __item--icon
  '.psds-actionmenu__item--icon': {
    paddingLeft: core.layout.spacingXSmall
  },

  // __item--nested
  '.psds-actionmenu__item--nested': {
    paddingRight: core.layout.spacingXSmall
  },

  // __item--isActive
  '.psds-actionmenu__item--isActive': {
    background: core.colors.bone,
    outline: 'none'
  },

  // __divider
  '.psds-actionmenu__divider': {
    height: '1px',
    width: '100%',
    backgroundColor: core.colors.gray01,
    margin: `${core.layout.spacingXXSmall} 0`
  },

  // __item__icon
  '.psds-actionmenu__item__icon': {
    display: 'inline-flex',
    alignItems: 'center',
    marginRight: core.layout.spacingXSmall
  },

  // __item__arrow
  '.psds-actionmenu__item__arrow': {
    marginLeft: 'auto',
    paddingLeft: core.layout.spacingXSmall
  },

  // __overlay
  '.psds-actionmenu__overlay': {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    top: 0,
    left: 0
  }
}

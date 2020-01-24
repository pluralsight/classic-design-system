import * as core from '@pluralsight/ps-design-system-core'

import * as vars from '../vars/index.js'

const menuOriginRight = {
  transform: `translate(${core.layout.spacingXSmall}, 0)`
}
const menuOriginLeft = {
  transform: `translate(calc(-1 * ${core.layout.spacingXSmall}), 0)`
}
const menuOriginTop = {
  transform: `translate(0, calc(-1 * ${core.layout.spacingXSmall}))`
}
const menuOriginBottom = {
  transform: `translate(0, ${core.layout.spacingXSmall})`
}

export default {
  '@keyframes psds-actionmenu__keyframes__slide': {
    '100%': {
      transform: 'translate(0,0)',
      opacity: 1
    }
  },

  '.psds-actionmenu': ({ slide }) => ({
    position: 'absolute',
    display: 'inline-block',
    marginLeft: 0,
    background: core.colorsBackgroundLight[3],
    borderRadius: '2px',
    padding: `${vars.style.menuPaddingVert} 0`,
    minWidth: '160px',
    maxWidth: '320px',
    listStyle: 'none',
    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`,
    fontSize: core.type.fontSizeSmall,
    opacity: 0,
    animation: `${slide || 'psds-actionmenu__keyframes__slide'} ${
      core.motion.speedNormal
    } forwards`
  }),

  [`.psds-actionmenu--origin-${vars.origins.topRight}`]: {
    ...menuOriginTop,
    right: 0,
    top: 0
  },
  [`.psds-actionmenu--origin-${vars.origins.bottomRight}`]: {
    ...menuOriginBottom,
    bottom: 0,
    right: 0
  },
  [`.psds-actionmenu--origin-${vars.origins.topLeft}`]: {
    ...menuOriginTop,
    left: 0,
    top: 0
  },
  [`.psds-actionmenu--origin-${vars.origins.bottomLeft}`]: {
    ...menuOriginBottom,
    left: 0,
    bottom: 0
  },

  [`.psds-actionmenu--nested.psds-actionmenu--origin-${vars.origins.topRight}`]: menuOriginRight,
  [`.psds-actionmenu--nested.psds-actionmenu--origin-${vars.origins.bottomRight}`]: menuOriginRight,
  [`.psds-actionmenu--nested.psds-actionmenu--origin-${vars.origins.topLeft}`]: menuOriginLeft,
  [`.psds-actionmenu--nested.psds-actionmenu--origin-${vars.origins.bottomLeft}`]: menuOriginLeft,

  '.psds-actionmenu__item-container': {
    position: 'relative'
  },

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
    color: core.colorsTextIcon.highOnLight,
    background: 'none',
    textDecoration: 'none',
    transition: `background ${core.motion.speedXFast}`
  },

  '.psds-actionmenu__item-inner': {
    flex: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  '.psds-actionmenu__item:focus': {
    background: core.colorsBackgroundLight[2],
    outline: 'none',
    color: core.colorsTextIcon.highOnLight
  },
  '.psds-actionmenu__item--focus-keyboard': {
    background: core.colorsPrimaryAction.background,
    outline: 'none',
    color: core.colorsTextIcon.highOnDark
  },

  '.psds-actionmenu__item--link': {
    color: core.colorsTextIcon.highOnLight
  },

  '.psds-actionmenu__item--icon': {
    paddingLeft: core.layout.spacingXSmall
  },

  '.psds-actionmenu__item--nested': {
    paddingRight: core.layout.spacingXSmall
  },

  '.psds-actionmenu__item--isActive': {
    background: core.colorsBackgroundLight[2],
    outline: 'none'
  },

  '.psds-actionmenu__item--disabled': {
    opacity: '50%',
    cursor: 'auto',
    outline: 'none'
  },

  '.psds-actionmenu__divider': {
    height: '1px',
    width: '100%',
    backgroundColor: core.colorsBorder.lowOnLight,
    margin: `${core.layout.spacingXXSmall} 0`
  },

  '.psds-actionmenu__item__icon': {
    display: 'inline-flex',
    alignItems: 'center',
    marginRight: core.layout.spacingXSmall
  },

  '.psds-actionmenu__item__arrow': {
    color: core.colorsTextIcon.lowOnLight,
    marginLeft: 'auto',
    paddingLeft: core.layout.spacingXSmall
  },
  '.psds-actionmenu__item__arrow--focus-keyboard': {
    color: core.colorsTextIcon.highOnDark
  },
  '.psds-actionmenu__item__arrow__svg': {
    fill: 'currentColor'
  },

  '.psds-actionmenu__overlay': {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    top: 0,
    left: 0
  }
}

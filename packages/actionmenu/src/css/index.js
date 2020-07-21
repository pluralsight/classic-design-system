import {
  colorsBackgroundLight,
  colorsBorder,
  colorsPrimaryAction,
  colorsTextIcon,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'

import * as vars from '../vars/index.js'

const menuOriginRight = {
  transform: `translate(${layout.spacingXSmall}, 0)`
}
const menuOriginLeft = {
  transform: `translate(calc(-1 * ${layout.spacingXSmall}), 0)`
}
const menuOriginTop = {
  transform: `translate(0, calc(-1 * ${layout.spacingXSmall}))`
}
const menuOriginBottom = {
  transform: `translate(0, ${layout.spacingXSmall})`
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
    background: colorsBackgroundLight[3],
    borderRadius: '2px',
    padding: `${vars.style.menuPaddingVert} 0`,
    minWidth: '160px',
    maxWidth: '320px',
    listStyle: 'none',
    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`,
    fontSize: type.fontSizeSmall,
    opacity: 0,
    animation: `${slide || 'psds-actionmenu__keyframes__slide'} ${
      motion.speedNormal
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
    label: 'action-menuitem',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    lineHeight: type.lineHeightExtra,
    fontWeight: type.fontWeightMedium,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
    cursor: 'pointer',
    border: 'none',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: layout.spacingMedium,
    paddingRight: layout.spacingMedium,
    color: colorsTextIcon.highOnLight,
    background: 'none',
    textDecoration: 'none',
    transition: `background ${motion.speedXFast}`,
    '&:not(:disabled):active, &:not(:disabled):hover, &:not(:disabled):visited': {
      color: colorsTextIcon.highOnLight
    },
    '&:not(:disabled):focus, &:not(:disabled):hover': {
      background: colorsBackgroundLight[2],
      outline: 'none',
      color: colorsTextIcon.highOnLight
    }
  },

  '.psds-actionmenu__item-inner': {
    flex: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  '.psds-actionmenu__item--focus-keyboard': {
    background: colorsPrimaryAction.background,
    outline: 'none',
    color: colorsTextIcon.highOnDark
  },

  '.psds-actionmenu__item--icon': {
    paddingLeft: layout.spacingXSmall
  },

  '.psds-actionmenu__item--nested': {
    paddingRight: layout.spacingXSmall
  },

  '.psds-actionmenu__item--isActive': {
    background: colorsBackgroundLight[2],
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
    backgroundColor: colorsBorder.lowOnLight,
    margin: `${layout.spacingXXSmall} 0`
  },

  '.psds-actionmenu__item__icon': {
    display: 'inline-flex',
    alignItems: 'center',
    marginRight: layout.spacingXSmall
  },

  '.psds-actionmenu__item__arrow': {
    color: colorsTextIcon.lowOnLight,
    marginLeft: 'auto',
    paddingLeft: layout.spacingXSmall
  },
  '.psds-actionmenu__item__arrow--focus-keyboard': {
    color: colorsTextIcon.highOnDark
  },
  '.psds-actionmenu__item__arrow__svg': {
    fill: 'currentColor'
  }
}

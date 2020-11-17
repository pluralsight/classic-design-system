import {
  colorsBackgroundLight,
  colorsBorder,
  colorsBackgroundUtility,
  colorsTextIcon,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'

import * as vars from '../vars/index'

const menuOriginLeft = {
  transform: `translate(calc(-100% + calc(-1 * ${layout.spacingXSmall})),0)`,
  opacity: 0,
  '&[aria-expanded="true"]': {
    transform: 'translate(-100%, 0)',
    opacity: 1
  }
}
const menuOriginRight = {
  transform: `translate(calc(100% + ${layout.spacingXSmall}), 0)`,
  opacity: 0,
  '&[aria-expanded="true"]': {
    transform: 'translate(100%, 0)',
    opacity: 1
  }
}
const menuOriginTop = {
  transform: `translate(0, calc(-1 * ${layout.spacingXSmall}))`
}
const menuOriginBottom = {
  transform: `translate(0, ${layout.spacingXSmall})`
}
const menuMinWidth = '160px'

export default {
  '@keyframes psds-actionmenu__keyframes__slide': {
    '100%': {
      transform: 'translate(0,0)',
      opacity: 1
    }
  },

  '.psds-actionmenu': {
    display: 'inline-block',
    marginLeft: 0,
    background: colorsBackgroundLight[3],
    borderRadius: '2px',
    padding: `${vars.style.menuPaddingVert} 0`,
    minWidth: menuMinWidth,
    maxWidth: '320px',
    listStyle: 'none',
    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`,
    fontSize: type.fontSizeSmall,
    opacity: 0
  },
  '.psds-actionmenu__animation': ({ slide }: { slide: string }) => ({
    animation: `${slide || 'psds-actionmenu__keyframes__slide'} ${
      motion.speedNormal
    } forwards`
  }),
  [`.psds-actionmenu--origin-${vars.origins.topLeft}`]: {
    ...menuOriginTop,
    right: 0,
    top: 0
  },
  [`.psds-actionmenu--origin-${vars.origins.bottomLeft}`]: {
    ...menuOriginBottom,
    bottom: 0,
    right: 0
  },
  [`.psds-actionmenu--origin-${vars.origins.topRight}`]: {
    ...menuOriginTop,
    left: 0,
    top: 0
  },
  [`.psds-actionmenu--origin-${vars.origins.bottomRight}`]: {
    ...menuOriginBottom,
    left: 0,
    bottom: 0
  },
  '.psds-actionmenu__item-container': {
    label: 'container',
    position: 'relative',
    transition: `background ${motion.speedXFast}`,
    color: colorsTextIcon.highOnLight,
    '&:hover, &:focus': {
      outline: 'none'
    },
    '&:focus': {
      background: colorsBackgroundUtility[25],
      color: colorsTextIcon.highOnLight
    },
    '&:focus > :first-child [data-submenu-arrow]': {
      color: colorsTextIcon.highOnLight
    },
    '&:hover:focus > :first-child [data-submenu-arrow]': {
      color: colorsTextIcon.highOnLight
    },
    '&:hover:not([data-disabled])': {
      background: colorsBackgroundUtility[25],
      color: colorsTextIcon.highOnLight
    },
    '&:hover > ul:not(:empty)': {
      visibility: 'visible',
      height: 'auto',
      minWidth: menuMinWidth,
      width: 'auto',
      opacity: 1
    }
  },
  '.psds-actionmenu__nested': {
    label: 'subMenu',
    display: 'inline-block',
    height: 0,
    minWidth: 0,
    width: 0,
    position: 'absolute',
    zIndex: 1,
    transition: `transform ${motion.speedNormal}, opacity ${motion.speedNormal}`,
    '&[aria-expanded="true"]': {
      visibility: 'visible',
      height: 'auto',
      minWidth: menuMinWidth,
      width: 'auto'
    },
    '&[aria-expanded="false"]': {
      visibility: 'hidden',
      height: 0,
      minWidth: 0,
      width: 0
    }
  },
  [`.psds-actionmenu__nested.psds-actionmenu--origin-${vars.origins.topLeft}`]: {
    ...menuOriginRight,
    right: 0,
    top: `calc(-1 * ${vars.style.menuPaddingVert})`
  },
  [`.psds-actionmenu__nested.psds-actionmenu--origin-${vars.origins.bottomLeft}`]: {
    ...menuOriginRight,
    bottom: `calc(-1 * ${vars.style.menuPaddingVert})`,
    right: 0
  },
  [`.psds-actionmenu__nested.psds-actionmenu--origin-${vars.origins.topRight}`]: {
    ...menuOriginLeft,
    left: 0,
    top: `calc(-1 * ${vars.style.menuPaddingVert})`
  },
  [`.psds-actionmenu__nested.psds-actionmenu--origin-${vars.origins.bottomRight}`]: {
    ...menuOriginLeft,
    bottom: `calc(-1 * ${vars.style.menuPaddingVert})`,
    left: 0
  },
  '.psds-actionmenu__item': {
    label: 'action-menuitem',
    display: 'inline-block',
    width: '100%',
    color: 'inherit',
    lineHeight: type.lineHeightExtra,
    fontWeight: type.fontWeightMedium,
    cursor: 'pointer',
    border: 'none',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: layout.spacingMedium,
    paddingRight: layout.spacingMedium,
    background: 'none',
    textDecoration: 'none'
  },

  '.psds-actionmenu__item-inner': {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    minWidth: 0
  },

  '.psds-actionmenu__ellipsis': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
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
    cursor: 'not-allowed',
    outline: 'none',
    pointerEvents: 'none'
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
  '.psds-actionmenu__item__arrow__svg': {
    fill: 'currentColor'
  },
  '.psds-actionmenu__icon': {
    display: 'inline-flex',
    alignItems: 'center'
  },
  '.psds-actionmenu__icon-left': {
    marginRight: layout.spacingXSmall
  },
  '.psds-actionmenu__icon-right': {
    marginLeft: layout.spacingXSmall
  }
}

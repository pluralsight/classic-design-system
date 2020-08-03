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
  '.psds-actionmenu__item-container': {
    label: 'container',
    position: 'relative',
    transition: `background ${motion.speedXFast}`,
    color: colorsTextIcon.highOnLight,
    '&:hover, &:focus': {
      outline: 'none'
    },
    '&:focus': {
      background: colorsPrimaryAction.background,
      color: colorsTextIcon.highOnDark
    },
    '&:focus [data-submenu-arrow]': {
      color: colorsTextIcon.highOnDark
    },
    '&:hover': {
      background: colorsBackgroundLight[2],
      color: colorsTextIcon.highOnLight
    },
    '&:hover > ul:not(:empty)': {
      display: 'inline'
    }
  },
  '.psds-actionmenu__nested': {
    label: 'subMenu',
    display: 'inline-block',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: '100%',
    '&:empty': {
      display: 'none'
    }
  },
  '.psds-actionmenu__item': {
    label: 'action-menuitem',
    display: 'inline-block',
    width: '100%',
    color: 'inherit',
    lineHeight: type.lineHeightExtra,
    fontWeight: type.fontWeightMedium,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
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

  '.psds-actionmenu__text-only': {
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
  '.psds-actionmenu__item__arrow__svg': {
    fill: 'currentColor'
  }
}

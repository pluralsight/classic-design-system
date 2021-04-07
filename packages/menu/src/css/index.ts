import {
  colorsBackgroundLight,
  colorsBorder,
  colorsBackgroundUtility,
  colorsTextIcon,
  colorsBlue,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'

import * as vars from '../vars/index'

const menuOriginTop = {
  transform: `translate(0, calc(-1 * ${layout.spacingXSmall}))`
}
const menuOriginBottom = {
  transform: `translate(0, ${layout.spacingXSmall})`
}
const menuMinWidth = '160px'

export default {
  '@keyframes psds-menu__keyframes__slide': {
    '100%': {
      transform: 'translate(0,0)',
      opacity: 1
    }
  },

  '.psds-menu': {
    display: 'inline-block',
    marginLeft: 0,
    background: colorsBackgroundLight[3],
    borderRadius: '2px',
    padding: `${layout.spacingXXSmall} 0`,
    minWidth: menuMinWidth,
    maxWidth: '320px',
    listStyle: 'none',
    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`,
    fontSize: type.fontSize200,
    opacity: 0
  },
  '.psds-menu__animation': ({ slide }: { slide: string }) => ({
    animation: `${slide || 'psds-menu__keyframes__slide'} ${
      motion.speedNormal
    } forwards`
  }),
  [`.psds-menu--origin-${vars.origins.topLeft}`]: {
    ...menuOriginTop,
    right: 0,
    top: 0
  },
  [`.psds-menu--origin-${vars.origins.bottomLeft}`]: {
    ...menuOriginBottom,
    bottom: 0,
    right: 0
  },
  [`.psds-menu--origin-${vars.origins.topRight}`]: {
    ...menuOriginTop,
    left: 0,
    top: 0
  },
  [`.psds-menu--origin-${vars.origins.bottomRight}`]: {
    ...menuOriginBottom,
    left: 0,
    bottom: 0
  },
  '.psds-menu__list-item': {
    position: 'relative',
    transition: `background ${motion.speedXFast}`,
    color: colorsTextIcon.highOnLight,
    '&:hover, &:focus': {
      outline: 'none'
    },
    '&:focus': {
      background: colorsBackgroundUtility[15],
      color: colorsTextIcon.highOnLight
    },
    '&:hover:not([data-disabled])': {
      background: colorsBackgroundUtility[15],
      color: colorsTextIcon.highOnLight
    }
  },
  '.psds-menu__list-item--active': {
    '&:not([data-disabled])': {
      background: colorsBackgroundUtility[15],
      color: colorsTextIcon.highOnLight
    }
  },
  '.psds-menu__list-item--disabled': {
    opacity: '50%',
    cursor: 'not-allowed',
    outline: 'none',
    pointerEvents: 'none'
  },
  '.psds-menu__option': {
    display: 'inline-block',
    width: '100%',
    color: 'inherit',
    lineHeight: type.lineHeightTight,
    fontWeight: type.fontWeight500,
    cursor: 'pointer',
    border: 'none',
    padding: `10px ${layout.spacingMedium}`,
    background: 'none',
    textDecoration: 'none',
    outline: 'none',
    boxShadow: 'none'
  },

  '.psds-menu__option-inner': {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    minWidth: 0
  },

  '.psds-menu__ellipsis': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  '.psds-menu__divider': {
    height: '1px',
    width: '100%',
    backgroundColor: colorsBorder.lowOnLight,
    margin: `${layout.spacingXXSmall} 0`
  },

  '.psds-menu__item-icon': {
    display: 'inline-flex',
    alignItems: 'center',
    color: colorsBlue[7]
  },

  '.psds-menu__item-icon-filler': {
    width: '24px',
    height: '24px'
  },

  '.psds-menu__item__arrow': {
    color: colorsTextIcon.lowOnLight,
    marginLeft: 'auto',
    paddingLeft: layout.spacingXSmall
  },
  '.psds-menu__item__arrow__svg': {
    fill: 'currentColor'
  },
  '.psds-menu__item-with-description': {
    padding: `10px ${layout.spacingMedium}`
  },
  '.psds-menu__item-with-description__wrapper': {
    display: 'inline-flex',
    flexDirection: 'column',
    maxWidth: 248
  },
  '.psds-menu__item-with-description__description': {
    lineHeight: '16px',
    fontSize: type.fontSize100,
    color: colorsTextIcon.lowOnLight,
    fontWeight: type.fontWeightRegular,
    paddingTop: layout.spacingXXSmall
  }
}

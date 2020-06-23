import {
  colorsBackgroundUtility,
  colorsGradient,
  colorsTextIcon,
  colorsWhite,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'
import { transparentize } from '@pluralsight/ps-design-system-util'

export default {
  '.psds-navitem': {
    background: 'transparent',
    border: 'none',
    font: 'inherit',
    margin: 0,
    overflow: 'visible',
    width: 'auto',

    MozOsxFontSmoothing: 'inherit',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'inherit',

    alignItems: 'center',
    color: colorsTextIcon.lowOnDark,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '10px',
    fontWeight: type.fontWeightBold,
    height: `64px`,
    justifyContent: 'center',
    lineHeight: '16px',
    padding: `0 ${layout.spacingMedium}`,
    position: 'relative',
    textDecoration: 'none',
    transition: `all .15s ease-in-out`,
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',

    '&::-moz-focus-inner': {
      border: 0,
      padding: 0
    },

    '&:after': {
      background: colorsGradient.skillsBackground,
      bottom: '-1px',
      content: ' ',
      display: 'block',
      height: '4px',
      left: '50%',
      lineHeight: '0',
      position: 'absolute',
      transform: 'translateX(-50%)',
      whiteSpace: 'pre',
      width: 0
    },

    '&:hover, &:focus': {
      background: 'rgba(255, 255, 255, 0.05)',
      color: colorsTextIcon.highOnDark,
      cursor: 'pointer',
      outline: 'none'
    }
  },
  '.psds-navitem--active': {
    color: colorsTextIcon.highOnDark,

    '&:after': {
      transition: `width ${motion.speedXFast} ease-out`,
      width: '100%'
    }
  },
  '.psds-navitem__icon': {
    marginBottom: '6px'
  },
  '.psds-navitem__text': {},

  // common
  '.psds-navitem__bar': {
    height: '2px',
    marginTop: '6px',
    width: '100%',
    background: 'transparent'
  },
  '.psds-navitem__bar--selected': {
    background: colorsWhite
  },
  '.psds-navitem__button': {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    color: colorsTextIcon.lowOnDark,
    height: '40px',
    padding: layout.spacingXSmall,
    borderRadius: '2px',
    textDecoration: 'none',
    cursor: 'pointer',

    '&:hover, &:focus, &:active': {
      color: colorsTextIcon.highOnDark
    },
    '&:hover, &:focus': {
      background: transparentize(0.85, colorsBackgroundUtility.base)
    },
    '&:focus': {
      outline: 'none'
    },
    '&:active': {
      background: transparentize(0.75, colorsBackgroundUtility.base)
    }
  },
  '.psds-navitem__button--selected': {
    color: colorsTextIcon.highOnDark
  },
  '.psds-navitem__button--menu': {
    paddingRight: '2px'
  },
  '.psds-navitem__caret': {
    lineHeight: '0',
    marginLeft: layout.spacingXXSmall
  },
  '.psds-navitem__container': {
    display: 'inline-block'
  },

  // horz
  '.psds-navitem__horz-icon': {
    marginRight: layout.spacingSmall
  },
  '.psds-navitem__horz-label': {
    fontWeight: type.fontWeightBold,
    fontSize: type.fontSizeSmall,
    lineHeight: type.lineHeightStandard,
    letterSpacing: '-1%',
    whiteSpace: 'nowrap'
  },

  // vertical
  '.psds-navitem__vertical-label': {
    fontWeight: type.fontWeightBold,
    fontSize: '10px',
    lineHeight: '12px',
    whiteSpace: 'nowrap',
    width: `calc(76px - ${layout.spacingXXSmall} * 2)`,
    textOverflow: 'ellipsis'
  }
}

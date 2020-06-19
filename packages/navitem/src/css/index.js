import {
  colorsGradient,
  colorsTextIcon,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'

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
  '.psds-navitem__text': {}
}

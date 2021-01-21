import {
  colorsBackgroundUtility,
  colorsTextIcon,
  colorsWhite,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'
import { transparentize } from '@pluralsight/ps-design-system-util'

export default {
  // common
  '.psds-navitem__bar': {
    height: '2px',
    width: '100%',
    background: 'transparent'
  },
  '.psds-navitem__bar--selected': {
    background: colorsWhite
  },
  '.psds-navitem__button': {
    display: 'inline-block',
    background: 'transparent',
    border: 'none',
    color: colorsTextIcon.lowOnDark,
    padding: `${layout.spacingXSmall} 0`,
    borderRadius: '2px',
    textDecoration: 'none',
    cursor: 'pointer',
    lineHeight: 0,
    transition: `all ${motion.speedNormal}`,

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

  // horz
  '.psds-navitem__horz-container': {
    display: 'inline-block',
    marginTop: layout.spacingXSmall
  },
  '.psds-navitem__horz-caret': {
    lineHeight: '0',
    marginLeft: layout.spacingXXSmall
  },
  '.psds-navitem__horz-icon': {
    lineHeight: '0',
    marginRight: layout.spacingSmall
  },
  '.psds-navitem__horz-icon--icon-only': {
    marginRight: 0
  },
  '.psds-navitem__horz-label': {
    fontWeight: type.fontWeightBold,
    fontSize: type.fontSize200,
    lineHeight: type.lineHeightStandard,
    letterSpacing: '-1%',
    whiteSpace: 'nowrap'
  },
  '.psds-navitem__horz-layout': {
    display: 'inline-flex',
    alignItems: 'center',
    height: `calc(40px - ${layout.spacingXSmall} * 2)`,
    padding: `0 ${layout.spacingXSmall}`
  },
  '.psds-navitem__horz-layout--menu': {
    paddingRight: '2px'
  },
  '.psds-navitem__horz-bar': {
    marginTop: '6px'
  },

  // vert
  '.psds-navitem__vert-container': {
    display: 'inline-block',
    marginTop: '6px',

    '& a, & button': {
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  '.psds-navitem__vert-caret': {
    position: 'absolute',
    top: '50%',
    right: layout.spacingXSmall,
    transform: 'translateY(-50%)'
  },
  '.psds-navitem__vert-icon': {
    marginBottom: '2px'
  },
  '.psds-navitem__vert-label': {
    fontWeight: type.fontWeightBold,
    fontSize: '10px',
    lineHeight: '12px',
    whiteSpace: 'nowrap',
    width: `calc(76px - ${layout.spacingXXSmall} * 2)`,
    textOverflow: 'ellipsis',
    textAlign: 'center'
  },
  '.psds-navitem__vert-layout': {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '44px',
    width: '76px'
  },
  '.psds-navitem__vert-bar': {
    marginTop: '4px'
  }
}

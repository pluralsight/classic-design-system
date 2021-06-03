import {
  colorsBorder,
  colorsGreen,
  colorsTextIcon,
  motion,
  layout,
  type
} from '@pluralsight/ps-design-system-core'
import {
  themeDefaultName,
  themeNames
} from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars/index'

export default {
  '.psds-row': {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: `${layout.spacingSmall} 0`,
    textAlign: 'left',
    borderTop: `1px solid ${colorsBorder.lowOnDark}`,

    '&:hover, &:hover': {
      '& div': { opacity: 1 }
    },

    '&:first-of-type': {
      borderTop: 'none'
    }
  },
  [`.psds-row.psds-theme--${themeNames.light}`]: {
    borderTop: `1px solid ${colorsBorder.lowOnLight}`
  },

  // __overlays
  '.psds-row__overlays': {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: vars.style.overlaysMarginRight,
    height: '72px',
    width: vars.style.overlaysWidth,
    overflow: 'hidden'
  },

  // __image
  '.psds-row__image': {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },

  // __full-overlay
  '.psds-row__full-overlay': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    transition: `opacity ${motion.speedNormal}`,
    pointerEvents: 'none',
    opacity: 0,

    '& a': {
      color: 'inherit'
    }
  },

  // __full-overlay--isFocused
  '.psds-row__full-overlay--isFocused': {
    opacity: 1
  },
  // __full-overlay--fullOverlayVisible
  '.psds-row__full-overlay--fullOverlayVisible': {
    opacity: 1
  },

  // __full-overlay-link
  '.psds-row__full-overlay-link': {
    pointerEvents: 'all'
  },

  // __action-bar
  '.psds-row__action-bar': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    lineHeight: 0,
    height: '64px',
    transition: `opacity ${motion.speedNormal}`,
    opacity: 0,

    '& > button, & > a': {
      marginLeft: vars.style.actionBarActionMarginLeft
    }
  },
  '.psds-row__action-bar--fullOverlay': {
    background: 'none'
  },
  '.psds-row__action-bar--actionBarVisible': {
    opacity: 1
  },

  // __progress
  '.psds-row__progress': {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 5,
    borderTop: '1px solid rgba(0, 0, 0, 0.2)',
    backgroundColor: 'rgba(15, 15, 15, 0.2)',
    overflow: 'hidden'
  },
  // __progress__bar
  '.psds-row__progress__bar': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '0%',
    height: '5px',
    backgroundColor: colorsTextIcon.highOnDark
  },
  '.psds-row__progress__bar--complete': {
    backgroundColor: colorsGreen[6]
  },

  // __words
  '.psds-row__words': {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    minWidth: 0
  },

  // __title
  '.psds-row__title': {
    display: 'block',
    fontWeight: type.fontWeight500,
    textAlign: 'left'
  },
  [`.psds-row__title.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-row__title.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-row__title--size-${vars.sizes.small}`]: {
    fontSize: type.fontSize200,
    lineHeight: type.lineHeightTight
  },
  [`.psds-row__title--size-${vars.sizes.medium}`]: {
    fontSize: type.fontSize400,
    lineHeight: type.lineHeightStandard
  },

  // __image-link
  '.psds-row__image-link': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    pointerEvents: 'all',

    '& a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      textDecoration: 'none',
      transition: `all ${motion.speedNormal}`
    }
  },

  // __text-link
  '.psds-row__text-link': {
    pointerEvents: 'all',

    '& a': {
      color: 'inherit',
      cursor: 'pointer',
      textDecoration: 'none',

      '&:active, &:hover': {
        textDecoration: 'underline',
        transition: `all ${motion.speedNormal}`
      }
    }
  },
  [`.psds-row__text-link.psds-theme--${themeDefaultName}`]: {
    '&:active, &:hover': {
      color: colorsTextIcon.highOnDark
    }
  },
  [`.psds-row__text-link.psds-theme--${themeNames.light}`]: {
    '&:active, &:hover': {
      color: colorsTextIcon.highOnLight
    }
  },

  // __metadata
  '.psds-row__metadata': {
    display: 'flex',
    alignItems: 'center',
    fontWeight: type.fontWeightDefault,
    lineHeight: type.lineHeightTight,
    maxWidth: '100%',
    paddingTop: layout.spacingXXSmall
  },
  [`.psds-row__metadata.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.lowOnDark
  },
  [`.psds-row__metadata.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },
  [`.psds-row__metadata--size-${vars.sizes.small}`]: {
    fontSize: type.fontSize100,
    paddingTop: 0
  },
  [`.psds-row__metadata--size-${vars.sizes.medium}`]: {
    fontSize: type.fontSize100,
    paddingTop: layout.spacingXXSmall
  },

  // __metadata__datum
  '.psds-row__metadata__datum': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    flexShrink: 2,
    maxWidth: '25%',

    '&:nth-of-type(1)': {
      flexShrink: 1,
      maxWidth: '50%'
    }
  },

  // __metadata__dot
  '.psds-row__metadata__dot': {
    display: 'inline-block',
    margin: `0 ${layout.spacingXSmall}`
  }
}

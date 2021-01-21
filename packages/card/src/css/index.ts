import {
  layout,
  type,
  motion,
  colorsTextIcon,
  colorsGreen,
  colorsBackgroundDark,
  colorsBorder,
  colorsBackgroundUtility
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'
import { transparentize } from '@pluralsight/ps-design-system-util'

import * as vars from '../vars'

export default {
  '.psds-card': {
    width: '100%',
    textAlign: 'left'
  },

  // __text-link
  '.psds-card__text-link': {
    pointerEvents: 'all',

    '& a': {
      color: 'inherit',
      cursor: 'pointer',
      textDecoration: 'none',

      '&:hover, &:active': {
        textDecoration: 'underline',
        transition: `all ${motion.speedNormal}`
      }
    }
  },
  [`.psds-card__text-link--theme-${themeNames.dark}`]: {
    '&:hover, &:active': {
      color: colorsTextIcon.highOnDark
    }
  },
  [`.psds-card__text-link--theme-${themeNames.light}`]: {
    '&:hover, &:active': {
      color: colorsTextIcon.highOnLight
    }
  },

  // __overlays
  '.psds-card__overlays': {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: colorsBackgroundDark[3],

    // TODO: target child
    '&:hover div, &:active div': {
      opacity: 1
    }
  },
  // __overlays--size
  [`.psds-card__overlays--size-${vars.sizes.small}`]: {
    height: '96px'
  },
  [`.psds-card__overlays--size-${vars.sizes.medium}`]: {
    height: '144px'
  },
  [`.psds-card__overlays--size-${vars.sizes.large}`]: {
    height: '240px'
  },

  // __image
  '.psds-card__image': {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },

  // __image-link
  '.psds-card__image-link': {
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

  // __full-overlay
  '.psds-card__full-overlay': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    transition: `opacity ${motion.speedNormal}`,
    pointerEvents: 'none',
    opacity: 0,

    '&:focus-within, &[focus-within]': {
      opacity: 1
    }
  },
  '.psds-card__full-overlay--fullOverlayVisible': {
    opacity: 1
  },

  // __full-overlay-link
  '.psds-card__full-overlay-link': {
    pointerEvents: 'all',
    color: colorsTextIcon.highOnDark,

    '& > a': {
      display: 'flex'
    }
  },

  // __action-bar
  '.psds-card__action-bar': {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    padding: `${layout.spacingSmall} ${layout.spacingSmall} 0 ${layout.spacingSmall}`,
    background: `linear-gradient(to bottom, ${transparentize(
      0.25,
      '#000000'
    )}, transparent)`,
    transition: `opacity ${motion.speedNormal}`,
    pointerEvents: 'none',
    opacity: 0,
    zIndex: 10,

    '> *': {
      pointerEvents: 'all'
    },

    '&:focus-within, &[focus-within]': {
      opacity: 1
    }
  },
  '.psds-card__action-bar--fullOverlay.psds-card__action-bar--no-actionBarVisible': {
    background: 'none'
  },
  '.psds-card__action-bar--actionBarVisible': {
    opacity: 1
  },

  // __action-bar__button
  '.psds-card__action-bar__button': {
    fontSize: type.fontSize100,
    padding: 0,
    cursor: 'pointer',
    border: 'none',
    color: colorsTextIcon.highOnDark,
    background: 'none',
    transition: `all ${motion.speedNormal}`,

    '&:hover, &:active': {
      color: colorsTextIcon.highOnDark
    },
    '& + &': {
      marginLeft: layout.spacingSmall
    }
  },
  // __action-bar__button--disabled
  '.psds-card__action-bar__button--disabled': {
    opacity: '50%',
    '&:hover': {
      opacity: '50%'
    }
  },

  // __bonus-bar
  '.psds-card__bonus-bar': {
    position: 'absolute',
    bottom: layout.spacingSmall,
    left: layout.spacingSmall,
    color: colorsTextIcon.highOnDark
  },

  // __tag
  '.psds-card__tag': {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: layout.spacingSmall,
    left: 0,
    padding: `${layout.spacingXXSmall} ${layout.spacingXSmall}`,
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '0 2px 2px 0',
    color: colorsTextIcon.highOnLight,
    textTransform: 'uppercase',
    fontSize: type.fontSize100,
    fontWeight: type.fontWeightBold,
    lineHeight: '16px',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.5)',
    maxWidth: '75%'
  },

  // __tag__icon
  '.psds-card__tag__icon': {
    display: 'flex',
    alignItems: 'center',
    marginRight: layout.spacingXSmall
  },
  // __tag__text
  '.psds-card__tag__text': {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },

  // __progress
  '.psds-card__progress': {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 5,
    borderTop: `1px solid ${colorsBorder.lowOnLight}`,
    backgroundColor: colorsBackgroundUtility[25],
    overflow: 'hidden'
  },

  // __progress__bar
  '.psds-card__progress__bar': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '0%',
    height: '5px',
    backgroundColor: '#ffffff'
  },
  '.psds-card__progress__bar--complete': {
    backgroundColor: colorsGreen.base
  },

  // __title-container
  [`.psds-card__title-container--size-${vars.sizes.small}`]: {
    fontSize: type.fontSize100,
    lineHeight: type.lineHeightTight
  },
  [`.psds-card__title-container--size-${vars.sizes.medium}`]: {
    fontSize: type.fontSize200,
    lineHeight: type.lineHeightTight
  },
  [`.psds-card__title-container--size-${vars.sizes.large}`]: {
    fontSize: type.fontSize400,
    lineHeight: type.lineHeightStandard
  },
  // __title
  '.psds-card__title': {
    display: 'block',
    paddingTop: layout.spacingXSmall,
    fontWeight: type.fontWeightMedium,
    overflow: 'hidden'
  },
  [`.psds-card__title--theme-${themeNames.dark}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-card__title--theme-${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },

  // __metadata
  '.psds-card__metadata': {
    display: 'flex',
    alignItems: 'center',
    fontWeight: type.fontWeightBook,
    lineHeight: type.lineHeightTight,
    maxWidth: '100%'
  },
  [`.psds-card__metadata--theme-${themeNames.dark}`]: {
    color: colorsTextIcon.lowOnDark
  },
  [`.psds-card__metadata--theme-${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },
  // __metadata--size
  [`.psds-card__metadata--size-${vars.sizes.small}`]: {
    fontSize: type.fontSize100
  },
  [`.psds-card__metadata--size-${vars.sizes.medium}`]: {
    fontSize: type.fontSize100
  },
  [`.psds-card__metadata--size-${vars.sizes.large}`]: {
    fontSize: type.fontSize200
  },

  // __metadata__datum
  '.psds-card__metadata__datum': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    flexShrink: 2,

    '&:nth-of-type(1)': {
      flexShrink: 1
    }
  },

  // __metadata__dot
  '.psds-card__metadata__dot': {
    display: 'inline-block',
    margin: `0 ${layout.spacingXSmall}`
  }
}

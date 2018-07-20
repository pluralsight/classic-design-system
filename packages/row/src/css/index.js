import core from '@pluralsight/ps-design-system-core'
import { transparentize } from 'polished'

import * as vars from '../vars'

const rowHover = {
  opacity: 1
}

const actionBarButtonHover = {
  color: core.colors.white
}

const textLinkAHover = {
  color: core.colors.white,
  textDecoration: 'underline',
  transition: `all ${core.motion.speedNormal}`
}

export default {
  '.psds-row': {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: `${core.layout.spacingSmall} 0`,
    textAlign: 'left',
    borderTop: `1px solid ${core.colors.gray04}`
  },
  '.psds-row:first-of-type': {
    borderTop: 'none'
  },
  // TODO: target child more precisely; which child is this?
  '.psds-row:hover div': rowHover,
  '.psds-row:active div': rowHover,

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
    background: transparentize(0.5, core.colors.black),
    transition: `opacity ${core.motion.speedNormal}`,
    pointerEvents: 'none',
    opacity: 0
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
    transition: `opacity ${core.motion.speedNormal}`,
    opacity: 0
  },
  '.psds-row__action-bar--fullOverlay': {
    background: 'none'
  },
  '.psds-row__action-bar--actionBarVisible': {
    opacity: 1
  },

  // __action-bar__button
  '.psds-row__action-bar__button': {
    fontSize: core.type.fontSizeXSmall,
    marginLeft: vars.style.actionBarActionMarginLeft,
    padding: 0,
    lineHeight: 0,
    cursor: 'pointer',
    border: 'none',
    color: core.colors.gray02,
    background: 'none',
    transition: `all ${core.motion.speedNormal}`
  },
  '.psds-row__action-bar__button:hover': actionBarButtonHover,
  '.psds-row__action-bar__button:active': actionBarButtonHover,

  '.psds-row__action-bar__button--disabled': {
    color: core.colors.gray02,
    background: core.colors.gray03
  },
  '.psds-row__action-bar__button--disabled:hover': {
    color: core.colors.gray02,
    background: core.colors.gray03
  },

  // __progress
  '.psds-row__progress': {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 5,
    borderTop: `1px solid ${transparentize(0.8, core.colors.black)}`,
    backgroundColor: transparentize(0.6, core.colors.gray01),
    overflow: 'hidden'
  },
  // __progress__bar
  '.psds-row__progress__bar': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '0%',
    height: '5px',
    backgroundColor: core.colors.white
  },
  '.psds-row__progress__bar--complete': {
    backgroundColor: core.colors.green
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
    fontWeight: core.type.fontWeightMedium,
    color: core.colors.white,
    textAlign: 'left'
  },
  [`.psds-row__title--size-${vars.sizes.small}`]: {
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightTight
  },
  [`.psds-row__title--size-${vars.sizes.medium}`]: {
    fontSize: core.type.fontSizeMedium,
    lineHeight: core.type.lineHeightStandard
  },

  // __image-link
  '.psds-row__image-link': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    pointerEvents: 'all'
  },
  '.psds-row__image-link a': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    textDecoration: 'none',
    transition: `all ${core.motion.speedNormal}`
  },

  // __text-link
  '.psds-row__text-link': {
    pointerEvents: 'all'
  },
  '.psds-row__text-link a': {
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  '.psds-row__text-link a:hover': textLinkAHover,
  '.psds-row__text-link a:active': textLinkAHover,

  // __metadata
  '.psds-row__metadata': {
    display: 'flex',
    alignItems: 'center',
    fontWeight: core.type.fontWeightBook,
    lineHeight: core.type.lineHeightTight,
    color: core.colors.gray02,
    maxWidth: '100%',
    paddingTop: core.layout.spacingXXSmall
  },
  [`.psds-row__metadata--size-${vars.sizes.small}`]: {
    fontSize: core.type.fontSizeXSmall,
    paddingTop: 0
  },
  [`.psds-row__metadata--size-${vars.sizes.medium}`]: {
    fontSize: core.type.fontSizeXSmall,
    paddingTop: core.layout.spacingXXSmall
  },

  // __metadata__datum
  '.psds-row__metadata__datum': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    flexShrink: 2,
    maxWidth: '25%'
  },
  '.psds-row__metadata__datum:nth-of-type(1)': {
    flexShrink: 1,
    maxWidth: '50%'
  },

  // __metadata__dot
  '.psds-row__metadata__dot': {
    display: 'inline-block',
    margin: `0 ${core.layout.spacingXSmall}`
  }
}

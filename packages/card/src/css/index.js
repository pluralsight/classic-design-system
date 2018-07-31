import core from '@pluralsight/ps-design-system-core'
import { transparentize } from 'polished'

import * as vars from '../vars'

const textLinkAHover = {
  color: core.colors.white,
  textDecoration: 'underline',
  transition: `all ${core.motion.speedNormal}`
}

const overlaysDivHover = {
  opacity: 1
}

const actionBarButtonHover = {
  color: core.colors.white
}

export default {
  '.psds-card': {
    width: '100%',
    textAlign: 'left'
  },

  // __text-link
  '.psds-card__text-link': {
    pointerEvents: 'all'
  },
  // __text-link a
  '.psds-card__text-link a': {
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  '.psds-card__text-link a:hover': textLinkAHover,
  '.psds-card__text-link a:active': textLinkAHover,

  // __overlays
  '.psds-card__overlays': {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: core.colors.gray05
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

  // __overlays:hover/active div
  // TODO: target child
  '.psds-card__overlays:hover div': overlaysDivHover,
  '.psds-card__overlays:active div': overlaysDivHover,

  //__image
  '.psds-actionmenu__image': {
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
    pointerEvents: 'all'
  },
  // __image-link a
  '.psds-card__image-link a': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    textDecoration: 'none',
    transition: `all ${core.motion.speedNormal}`
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
    background: transparentize(0.5, core.colors.black),
    transition: `opacity ${core.motion.speedNormal}`,
    pointerEvents: 'none',
    opacity: 0
  },
  '.psds-card__full-overlay--fullOverlayVisible': {
    opacity: 1
  },

  // __full-overlay-link
  '.psds-card__full-overlay-link': {
    pointerEvents: 'all',
    color: core.colors.white
  },
  '.psds-card__full-overlay-link > a': {
    display: 'flex'
  },

  // __action-bar
  '.psds-card__action-bar': {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    padding: `${core.layout.spacingSmall} ${core.layout.spacingSmall} 0 ${
      core.layout.spacingSmall
    }`,
    background: `linear-gradient(to bottom, ${transparentize(
      0.25,
      core.colors.black
    )}, transparent)`,
    transition: `opacity ${core.motion.speedNormal}`,
    pointerEvents: 'none',
    opacity: 0
  },
  '.psds-card__action-bar--fullOverlay.psds-card__action-bar--no-actionBarVisible': {
    background: 'none'
  },
  '.psds-card__action-bar--actionBarVisible': {
    opacity: 1
  },

  // __action-bar__button
  '.psds-card__action-bar__button': {
    pointerEvents: 'all',
    fontSize: core.type.fontSizeXSmall,
    padding: 0,
    cursor: 'pointer',
    border: 'none',
    color: transparentize(0.2, core.colors.white),
    background: 'none',
    transition: `all ${core.motion.speedNormal}`
  },
  '.psds-card__action-bar__button:hover': actionBarButtonHover,
  '.psds-card__action-bar__button:active': actionBarButtonHover,
  '.psds-card__action-bar__button .psds-card__action-bar__button': {
    marginLeft: core.layout.spacingSmall
  },
  // __action-bar__button--disabled
  '.psds-card__action-bar__button--disabled': {
    color: core.colors.gray02,
    background: core.colors.gray03
  },
  '.psds-card__action-bar__button--disabled:hover': {
    color: core.colors.gray02,
    background: core.colors.gray03
  },

  // __bonus-bar
  '.psds-card__bonus-bar': {
    position: 'absolute',
    bottom: core.layout.spacingSmall,
    left: core.layout.spacingSmall,
    color: core.colors.white
  },

  // __tag
  '.psds-card__tag': {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: core.layout.spacingSmall,
    left: 0,
    padding: `${core.layout.spacingXXSmall} ${core.layout.spacingXSmall}`,
    background: transparentize(0.1, core.colors.white),
    borderRadius: '0 2px 2px 0',
    color: core.colors.gray06,
    textTransform: 'uppercase',
    fontSize: core.type.fontSizeXSmall,
    fontWeight: core.type.fontWeightBold,
    lineHeight: '16px',
    boxShadow: `0 1px 4px 0 ${transparentize(0.5, core.colors.black)}`,
    maxWidth: '100%'
  },

  // __tag__icon
  '.psds-card__tag__icon': {
    display: 'flex',
    alignItems: 'center',
    marginRight: core.layout.spacingXSmall
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
    borderTop: `1px solid ${transparentize(0.8, core.colors.black)}`,
    backgroundColor: transparentize(0.6, core.colors.gray01),
    overflow: 'hidden'
  },

  // __progress__bar
  '.psds-card__progress__bar': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '0%',
    height: '5px',
    backgroundColor: core.colors.white
  },
  '.psds-card__progress__bar--complete': {
    backgroundColor: core.colors.green
  },

  // __title-container
  [`.psds-card__title-container--size-${vars.sizes.small}`]: {
    fontSize: core.type.fontSizeXSmall,
    lineHeight: core.type.lineHeightTight
  },
  [`.psds-card__title-container--size-${vars.sizes.medium}`]: {
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightTight
  },
  [`.psds-card__title-container--size-${vars.sizes.large}`]: {
    fontSize: core.type.fontSizeMedium,
    lineHeight: core.type.lineHeightStandard
  },
  // __title
  '.psds-card__title': {
    display: 'block',
    paddingTop: core.layout.spacingXSmall,
    fontWeight: core.type.fontWeightMedium,
    overflow: 'hidden',
    color: core.colors.white
  },

  // __metadata
  '.psds-card__metadata': {
    display: 'flex',
    alignItems: 'center',
    fontWeight: core.type.fontWeightBook,
    lineHeight: core.type.lineHeightTight,
    color: core.colors.gray02,
    maxWidth: '100%'
  },
  // __metadata--size
  [`.psds-card__metadata--size-${vars.sizes.small}`]: {
    fontSize: core.type.fontSizeXSmall
  },
  [`.psds-card__metadata--size-${vars.sizes.medium}`]: {
    fontSize: core.type.fontSizeXSmall
  },
  [`.psds-card__metadata--size-${vars.sizes.large}`]: {
    fontSize: core.type.fontSizeSmall
  },

  // __metadata__datum
  '.psds-card__metadata__datum': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    flexShrink: 2
  },
  '.psds-card__metadata__datum:nth-of-type(1)': {
    flexShrink: 1
  },

  // __metadata__dot
  '.psds-card__metadata__dot': {
    display: 'inline-block',
    margin: `0 ${core.layout.spacingXSmall}`
  }
}

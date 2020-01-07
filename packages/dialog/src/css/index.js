import * as core from '@pluralsight/ps-design-system-core'
import { transparentize } from '@pluralsight/ps-design-system-util'

import * as vars from '../vars/index.js'

const tailDimension = '14px'

export default {
  '@keyframes psds-dialog__keyframes__fade': {
    '100%': {
      transform: 'translateY(0)',
      opacity: 1
    }
  },

  '.psds-dialog': ({ fade }) => ({
    animation: `${fade || 'psds-dialog__keyframes__fade'} ${
      core.motion.speedFast
    } ease-out forwards`,
    background: core.colors.white,
    borderRadius: '2px',
    boxShadow: `0 1px 2px ${transparentize(0.5, core.colors.black)}`,
    color: core.colors.gray05,
    display: 'inline-block',
    fontSize: core.type.fontSizeSmall,
    fontWeight: core.type.fontWeightMedium,
    lineHeight: core.type.lineHeightTight,
    opacity: 0,
    overflowY: 'auto',
    padding: core.layout.spacingLarge,
    position: 'relative',
    transform: `translateY(${core.layout.spacingXSmall})`
  }),

  // --w-tail
  '.psds-dialog--w-tail': {
    '&:after': {
      backgroundColor: core.colors.white,
      content: ' ',
      display: 'block',
      height: tailDimension,
      lineHeight: '0',
      position: 'absolute',
      transform: 'rotate(45deg)',
      whiteSpace: 'pre',
      width: tailDimension
    }
  },
  [`.psds-dialog--tailPosition-${vars.tailPositions.topLeft}`]: {
    '&:after': {
      left: tailDimension,
      top: `calc(${tailDimension} / -2)`
    }
  },
  [`.psds-dialog--tailPosition-${vars.tailPositions.topCenter}`]: {
    '&:after': {
      left: '50%',
      top: `calc(${tailDimension} / -2)`,
      transform: 'translateX(-50%) rotate(45deg)'
    }
  },
  [`.psds-dialog--tailPosition-${vars.tailPositions.topRight}`]: {
    '&:after': {
      right: tailDimension,
      top: `calc(${tailDimension} / -2)`
    }
  },
  [`.psds-dialog--tailPosition-${vars.tailPositions.bottomLeft}`]: {
    '&:after': {
      bottom: `calc(${tailDimension} / -2)`,
      boxShadow: `1px 1px 1px ${transparentize(0.5, core.colors.black)}`,
      left: tailDimension
    }
  },
  [`.psds-dialog--tailPosition-${vars.tailPositions.bottomCenter}`]: {
    '&:after': {
      bottom: `calc(${tailDimension} / -2)`,
      boxShadow: `1px 1px 1px ${transparentize(0.5, core.colors.black)}`,
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)'
    }
  },
  [`.psds-dialog--tailPosition-${vars.tailPositions.bottomRight}`]: {
    '&:after': {
      bottom: `calc(${tailDimension} / -2)`,
      boxShadow: `1px 1px 1px ${transparentize(0.5, core.colors.black)}`,
      right: tailDimension
    }
  },

  // --modal
  '.psds-dialog--modal': {
    maxHeight: `calc(100% - (2 * ${core.layout.spacingLarge}))`,
    maxWidth: `calc(100% - (2 * ${core.layout.spacingLarge}))`
  },

  // __close
  '.psds-dialog__close': {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'block',
    lineHeight: '0',
    padding: '0',
    position: 'absolute',
    right: core.layout.spacingXSmall,
    top: core.layout.spacingXSmall,

    '& > svg': {
      fill: core.colors.gray03,
      height: '24px',
      width: '24px'
    }
  },

  // __overlay
  '.psds-dialog__overlay': {
    alignItems: 'center',
    backgroundColor: transparentize(0.5, core.colors.black),
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100%'
  }
}

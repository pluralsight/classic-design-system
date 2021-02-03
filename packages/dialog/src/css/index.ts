import {
  colorsBackgroundUtility,
  colorsPrimaryAction,
  colorsWhite,
  colorsTextIcon,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'
import { transparentize } from '@pluralsight/ps-design-system-util'

import * as vars from '../vars'

const tailDimension = '14px'

export default {
  '@keyframes psds-dialog__keyframes__fade': {
    '100%': {
      transform: 'translateY(0)',
      opacity: 1
    }
  },

  '.psds-dialog': ({ fade }: { fade: string }) => ({
    animation: `${fade || 'psds-dialog__keyframes__fade'} ${
      motion.speedFast
    } ease-out forwards`,
    background: colorsWhite,
    borderRadius: '2px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
    display: 'inline-flex',
    opacity: 0,
    position: 'relative',
    transform: `translateY(${layout.spacingXSmall})`,
    '&:focus': { outline: 'none' }
  }),

  '.psds-dialog__content': {
    color: colorsTextIcon.highOnLight,
    fontSize: type.fontSize200,
    fontWeight: type.fontWeight500,
    lineHeight: type.lineHeightTight,
    padding: layout.spacingLarge,
    flex: '1 1 auto',
    overflowY: 'auto'
  },

  // --w-tail
  '.psds-dialog--w-tail': {
    '&:after': {
      backgroundColor: colorsWhite,
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
      boxShadow: `1px 1px 1px rgba(0, 0, 0, 0.5)`,
      left: tailDimension
    }
  },
  [`.psds-dialog--tailPosition-${vars.tailPositions.bottomCenter}`]: {
    '&:after': {
      bottom: `calc(${tailDimension} / -2)`,
      boxShadow: `1px 1px 1px rgba(0, 0, 0, 0.5)`,
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)'
    }
  },
  [`.psds-dialog--tailPosition-${vars.tailPositions.bottomRight}`]: {
    '&:after': {
      bottom: `calc(${tailDimension} / -2)`,
      boxShadow: `1px 1px 1px rgba(0, 0, 0, 0.5)`,
      right: tailDimension
    }
  },

  // --modal
  '.psds-dialog--modal': {
    maxHeight: `calc(100% - (2 * ${layout.spacingLarge}))`,
    maxWidth: `calc(100% - (2 * ${layout.spacingLarge}))`
  },

  // __close
  '.psds-dialog__close': {
    position: 'absolute',
    right: layout.spacingMedium,
    top: layout.spacingMedium,

    // NOTE: copy-paste-modify from psds-button, etc
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2px',
    fontWeight: type.fontWeight500,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    transition: `all ${motion.speedNormal}`,
    verticalAlign: 'middle',
    fontSize: type.fontSize200,
    lineHeight: 0,
    padding: 0,
    height: '32px',
    width: '32px',
    border: 'none',
    background: 'none',
    color: colorsTextIcon.lowOnLight,
    '&:not([disabled]):hover, &:not([disabled]):focus': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${transparentize(
        0.5,
        colorsPrimaryAction.background
      )}`,
      cursor: 'pointer',
      background: transparentize(0.55, colorsBackgroundUtility.base),
      color: colorsTextIcon.highOnLight
    },
    '&:not([disabled]):active': {
      background: transparentize(0.35, colorsBackgroundUtility.base),
      color: colorsTextIcon.highOnLight,
      transform: 'scale(0.98)'
    },

    '& svg': {
      fill: colorsTextIcon.lowOnLight,
      height: '24px',
      width: '24px'
    }
  },

  // __overlay
  '.psds-dialog__overlay': {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100%'
  }
}

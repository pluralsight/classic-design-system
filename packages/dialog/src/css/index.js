import core from '@pluralsight/ps-design-system-core'
import { transparentize } from 'polished'

import * as vars from '../vars'

const tailDimension = '14px'

export default {
  [`@keyframes psds-dialog__keyframes__fade`]: {
    '100%': {
      transform: 'translateY(0)',
      opacity: 1
    }
  },
  [`.psds-dialog`]: ({ fade }) => ({
    position: 'relative',
    display: 'inline-block',
    padding: core.layout.spacingLarge,
    borderRadius: '2px',
    boxShadow: `0 1px 2px ${transparentize(0.5, core.colors.black)}`,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightTight,
    fontWeight: core.type.fontWeightMedium,
    transform: `translateY(${core.layout.spacingXSmall})`,
    opacity: 0,
    color: core.colors.gray05,
    background: core.colors.white,
    animation: `${fade || 'psds-dialog__keyframes__fade'} ${
      core.motion.speedFast
    } ease-out forwards`
  }),
  // --tailPosition
  [`.psds-dialog:after`]: {
    position: 'absolute',
    display: 'block',
    content: ' ',
    whiteSpace: 'pre',
    height: tailDimension,
    width: tailDimension,
    lineHeight: '0',
    transform: 'rotate(45deg)',
    backgroundColor: core.colors.white
  },
  [`.psds-dialog--tailPosition-${vars.tailPositions.topLeft}:after`]: {
    top: `calc(${tailDimension} / -2)`,
    left: tailDimension
  },
  [`.psds-dialog--tailPosition-${vars.tailPositions.topCenter}:after`]: {
    top: `calc(${tailDimension} / -2)`,
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)'
  },
  [`.psds-dialog--tailPosition-${vars.tailPositions.topRight}:after`]: {
    top: `calc(${tailDimension} / -2)`,
    right: tailDimension
  },
  [`.psds-dialog--tailPosition-${vars.tailPositions.bottomLeft}:after`]: {
    bottom: `calc(${tailDimension} / -2)`,
    left: tailDimension,
    boxShadow: `1px 1px 1px ${transparentize(0.5, core.colors.black)}`
  },
  [`.psds-dialog--tailPosition-${vars.tailPositions.bottomCenter}:after`]: {
    bottom: `calc(${tailDimension} / -2)`,
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)',
    boxShadow: `1px 1px 1px ${transparentize(0.5, core.colors.black)}`
  },
  [`.psds-dialog--tailPosition-${vars.tailPositions.bottomRight}:after`]: {
    bottom: `calc(${tailDimension} / -2)`,
    right: tailDimension,
    boxShadow: `1px 1px 1px ${transparentize(0.5, core.colors.black)}`
  },
  // --modal
  [`.psds-dialog--modal`]: {
    maxWidth: `calc(100% - (2 * ${core.layout.spacingLarge}))`,
    maxHeight: `calc(100% - (2 * ${core.layout.spacingLarge}))`
  },
  // __close
  [`.psds-dialog__close`]: {
    position: 'absolute',
    top: core.layout.spacingXSmall,
    right: core.layout.spacingXSmall,
    display: 'block',
    padding: '0',
    lineHeight: '0',
    border: 'none',
    background: 'none'
  },
  [`.psds-dialog__close > svg`]: {
    height: '24px',
    width: '24px',
    fill: core.colors.gray03
  },
  // __underlay
  [`.psds-dialog__underlay`]: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: transparentize(0.5, core.colors.black),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

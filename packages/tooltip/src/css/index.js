import core from '@pluralsight/ps-design-system-core'
import { transparentize } from 'polished'

import * as vars from '../vars'

const tailDimension = '14px'

export default {
  [`@keyframes psds-tooltip__keyframes__fade`]: {
    '100%': {
      transform: 'translateY(0)',
      opacity: 1
    }
  },
  [`.psds-tooltip`]: ({ fade }) => ({
    position: 'relative',
    display: 'inline-block',
    maxWidth: '320px',
    padding: `${core.layout.spacingXSmall} ${core.layout.spacingMedium}`,
    borderRadius: '2px',
    boxShadow: `0 1px 2px ${transparentize(0.5, core.colors.black)}`,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightTight,
    fontWeight: core.type.fontWeightMedium,
    transform: `translateY(${core.layout.spacingXSmall})`,
    opacity: 0,
    animation: `${fade || 'psds-tooltip__keyframes__fade'} ${
      core.motion.speedFast
    } ease-out forwards`
  }),
  [`.psds-tooltip--appearance-${vars.appearances.basic}`]: {
    color: core.colors.gray05,
    backgroundColor: core.colors.white
  },
  [`.psds-tooltip--appearance-${vars.appearances.accent}`]: {
    color: core.colors.white,
    backgroundColor: core.colors.blue
  },
  // --tailPosition
  [`.psds-tooltip:after`]: {
    position: 'absolute',
    display: 'block',
    content: ' ',
    whiteSpace: 'pre',
    height: tailDimension,
    width: tailDimension,
    lineHeight: '0',
    transform: 'rotate(45deg)'
  },
  [`.psds-tooltip--appearance-${vars.appearances.basic}:after`]: {
    backgroundColor: core.colors.white
  },
  [`.psds-tooltip--appearance-${vars.appearances.accent}:after`]: {
    backgroundColor: core.colors.blue
  },
  [`.psds-tooltip--tailPosition-${vars.tailPositions.topLeft}:after`]: {
    top: `calc(${tailDimension} / -2)`,
    left: tailDimension
  },
  [`.psds-tooltip--tailPosition-${vars.tailPositions.topCenter}:after`]: {
    top: `calc(${tailDimension} / -2)`,
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)'
  },
  [`.psds-tooltip--tailPosition-${vars.tailPositions.topRight}:after`]: {
    top: `calc(${tailDimension} / -2)`,
    right: tailDimension
  },
  [`.psds-tooltip--tailPosition-${vars.tailPositions.bottomLeft}:after`]: {
    bottom: `calc(${tailDimension} / -2)`,
    left: tailDimension,
    boxShadow: `1px 1px 1px ${transparentize(0.5, core.colors.black)}`
  },
  [`.psds-tooltip--tailPosition-${vars.tailPositions.bottomCenter}:after`]: {
    bottom: `calc(${tailDimension} / -2)`,
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)',
    boxShadow: `1px 1px 1px ${transparentize(0.5, core.colors.black)}`
  },
  [`.psds-tooltip--tailPosition-${vars.tailPositions.bottomRight}:after`]: {
    bottom: `calc(${tailDimension} / -2)`,
    right: tailDimension,
    boxShadow: `1px 1px 1px ${transparentize(0.5, core.colors.black)}`
  },
  // --closeable
  [`.psds-tooltip--closeable`]: {
    padding: `${core.layout.spacingMedium} calc(${
      core.layout.spacingMedium
    } * 2) ${core.layout.spacingMedium} ${core.layout.spacingLarge}`
  },
  // __close
  [`.psds-tooltip__close`]: {
    position: 'absolute',
    top: core.layout.spacingXSmall,
    right: core.layout.spacingXSmall,
    display: 'block',
    padding: '0',
    lineHeight: '0',
    border: 'none',
    background: 'none',
    cursor: 'pointer'
  },
  [`.psds-tooltip__close > svg`]: {
    height: '24px',
    width: '24px'
  },
  [`.psds-tooltip__close--appearance-${vars.appearances.basic} > svg`]: {
    fill: core.colors.gray03
  },
  [`.psds-tooltip__close--appearance-${vars.appearances.accent} > svg`]: {
    fill: core.colors.bone
  }
}

import {
  colorsPrimaryAction,
  colorsTextIcon,
  colorsWhite,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'

import * as vars from '../vars/index.js'

const shadowBlurWidth = '4px'
const tailDimension = '14px'

const diamondHeight = getDiamondHeight(tailDimension, tailDimension) + 'px'
const diamondWidth = getDiamondWidth(tailDimension, tailDimension) + 'px'

const hozTailStyles = {
  height: `calc(${diamondHeight} + 2 * ${shadowBlurWidth})`,
  width: diamondWidth
}
const vertTailStyles = {
  height: diamondHeight,
  width: `calc(${diamondHeight} + 2 * ${shadowBlurWidth})`
}

const tailTransformLeft = `translate(calc(50% + 2px), 50%) rotate(45deg)`
const tailTransformRight = `translate(calc(-100% + 2px), 50%) rotate(45deg)`

const tailTransformTop = `translate(calc(((${diamondHeight} - ${tailDimension})) / 2), calc(50% + (${diamondHeight} - ${tailDimension}))) rotate(45deg)`
const tailTransformBottom = `translate(calc(((${diamondHeight} - ${tailDimension})) / 2), -50%) rotate(45deg)`

const boxShadow = `0px 1px ${shadowBlurWidth} rgba(0, 0, 0, 0.5)`

export default {
  [`@keyframes psds-tooltip__keyframes__fade`]: {
    '100%': { transform: 'translateY(0)', opacity: 1 }
  },

  '.psds-tooltip': ({ fade }) => ({
    position: 'relative',
    display: 'inline-block',
    maxWidth: '320px',
    padding: `${layout.spacingXSmall} ${layout.spacingSmall}`,
    borderRadius: '2px',
    boxShadow,
    fontSize: type.fontSizeXSmall,
    lineHeight: type.lineHeightTight,
    fontWeight: type.fontWeightMedium,
    transform: `translateY(${layout.spacingXSmall})`,
    opacity: 0,
    animation: `${fade || 'psds-tooltip__keyframes__fade'} ${
      motion.speedFast
    } ease-out forwards`
  }),
  [`.psds-tooltip--appearance-${vars.appearances.basic}`]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsWhite
  },
  [`.psds-tooltip--appearance-${vars.appearances.accent}`]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsPrimaryAction.background
  },

  '.psds-tooltip__tail': {
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',

    '&:after': {
      position: 'absolute',
      top: 0,
      left: shadowBlurWidth,
      display: 'block',
      content: ' ',
      whiteSpace: 'pre',
      height: tailDimension,
      width: tailDimension,
      lineHeight: '0',
      transform: 'rotate(45deg)',
      boxShadow
    }
  },
  [`.psds-tooltip__tail--appearance-${vars.appearances.basic}`]: {
    '&:after': { backgroundColor: colorsWhite }
  },
  [`.psds-tooltip__tail--appearance-${vars.appearances.accent}`]: {
    '&:after': { backgroundColor: colorsPrimaryAction.background }
  },

  [`.psds-tooltip__tail--tailPosition-${vars.tailPositions.leftCenter}`]: {
    ...hozTailStyles,
    left: `calc(${diamondWidth} * -1)`,
    top: '50%',
    transform: 'translateY(-50%)',

    '&:after': { transform: tailTransformLeft, boxShadow }
  },

  [`.psds-tooltip__tail--tailPosition-${vars.tailPositions.rightCenter}`]: {
    ...hozTailStyles,
    right: `calc(${diamondWidth} * -1)`,
    top: '50%',
    transform: 'translateY(-50%)',

    '&:after': { transform: tailTransformRight, boxShadow }
  },

  [`.psds-tooltip__tail--tailPosition-${vars.tailPositions.topLeft}`]: {
    ...vertTailStyles,
    top: `calc(${diamondHeight} * -1)`,
    left: `calc(${tailDimension} - ${shadowBlurWidth})`,

    '&:after': { transform: tailTransformTop, boxShadow }
  },
  [`.psds-tooltip__tail--tailPosition-${vars.tailPositions.topCenter}`]: {
    ...vertTailStyles,
    top: `calc(${diamondHeight} * -1)`,
    left: '50%',
    transform: 'translateX(-50%)',

    '&:after': { transform: tailTransformTop, boxShadow }
  },
  [`.psds-tooltip__tail--tailPosition-${vars.tailPositions.topRight}`]: {
    ...vertTailStyles,
    top: `calc(${diamondHeight} * -1)`,
    right: `calc(${tailDimension} - ${shadowBlurWidth})`,

    '&:after': { transform: tailTransformTop, boxShadow }
  },

  [`.psds-tooltip__tail--tailPosition-${vars.tailPositions.bottomLeft}`]: {
    ...vertTailStyles,
    bottom: `calc(${diamondHeight} * -1)`,
    left: `calc(${tailDimension} - ${shadowBlurWidth})`,

    '&:after': { transform: tailTransformBottom, boxShadow }
  },
  [`.psds-tooltip__tail--tailPosition-${vars.tailPositions.bottomCenter}`]: {
    ...vertTailStyles,
    bottom: `calc(${diamondHeight} * -1)`,
    left: '50%',
    transform: 'translateX(-50%)',

    '&:after': { transform: tailTransformBottom, boxShadow }
  },
  [`.psds-tooltip__tail--tailPosition-${vars.tailPositions.bottomRight}`]: {
    ...vertTailStyles,
    bottom: `calc(${diamondHeight} * -1)`,
    right: `calc(${tailDimension} - ${shadowBlurWidth})`,

    '&:after': { transform: tailTransformBottom, boxShadow }
  },

  // --closeable
  [`.psds-tooltip--closeable`]: {
    padding: `${layout.spacingMedium} calc(${layout.spacingMedium} * 2) ${layout.spacingMedium} ${layout.spacingLarge}`
  },

  // __close
  [`.psds-tooltip__close`]: {
    position: 'absolute',
    top: layout.spacingXSmall,
    right: layout.spacingXSmall,
    display: 'block',
    padding: '0',
    lineHeight: '0',
    border: 'none',
    background: 'none',
    cursor: 'pointer',

    '& > svg': { height: '24px', width: '24px' }
  },
  [`.psds-tooltip__close--appearance-${vars.appearances.basic}`]: {
    '& > svg': { fill: colorsTextIcon.lowOnLight }
  },
  [`.psds-tooltip__close--appearance-${vars.appearances.accent}`]: {
    '& > svg': { fill: colorsTextIcon.lowOnDark }
  }
}

function getDiamondHeight(height, width) {
  height = parseInt(height, 10)
  width = parseInt(width, 10)

  return (
    Math.sqrt(
      Math.pow(height, 2) -
        Math.pow(Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2)) / 2, 2)
    ) * 2
  )
}

function getDiamondWidth(height, width) {
  height = parseInt(height, 10)
  width = parseInt(width, 10)

  return (
    Math.sqrt(
      Math.pow(width, 2) -
        Math.pow(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2, 2)
    ) * 2
  )
}

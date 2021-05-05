import { colorsTextIcon } from '../../core'
import { themeDefaultName, themeNames } from '../../theme'

import * as vars from '../vars/index'

export default {
  '@keyframes psds-circularprogress__keyframes__spin': {
    to: {
      transform: 'rotate(270deg)'
    }
  },
  // --size
  [`.psds-circularprogress--size-${vars.sizes.small}`]: {
    height: '24px',
    width: '24px'
  },
  [`.psds-circularprogress--size-${vars.sizes.medium}`]: {
    height: '48px',
    width: '48px'
  },
  // __svg
  [`.psds-circularprogress__svg`]: {
    transform: 'rotate(-90deg)'
  },
  // __svg--no-value
  [`.psds-circularprogress__svg--no-value`]: ({ spin }: { spin?: string }) => ({
    animation: `${
      spin || 'psds-circularprogress__keyframes__spin'
    } 1s linear infinite`
  }),
  // __fg
  [`.psds-circularprogress__fg`]: {
    fill: 'transparent',
    strokeWidth: `${vars.style.strokeWidth}px`,
    transition: 'stroke-dashoffset 1s'
  },
  [`.psds-circularprogress__fg.psds-theme--${themeNames.light}`]: {
    stroke: colorsTextIcon.highOnLight
  },
  [`.psds-circularprogress__fg.psds-theme--${themeDefaultName}`]: {
    stroke: colorsTextIcon.highOnDark
  },
  // __bg
  [`.psds-circularprogress__bg`]: {
    fill: 'transparent',
    strokeWidth: `${vars.style.strokeWidth}px`
  },
  [`.psds-circularprogress__bg.psds-theme--${themeNames.light}`]: {
    stroke: 'rgba(0, 0, 0, 0.15)'
  },
  [`.psds-circularprogress__bg.psds-theme--${themeDefaultName}`]: {
    stroke: 'rgba(255, 255, 255, 0.15)'
  }
}

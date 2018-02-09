import core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'
import { transparentize } from 'polished'

import * as vars from '../vars'

export default {
  ['@keyframes psds-circularprogress__keyframes__spin']: {
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
  [`.psds-circularprogress__svg--no-value`]: ({ spin }) => ({
    animation: `${spin ||
      'psds-circularprogress__keyframes__spin'} 1s linear infinite`
  }),
  // __fg
  [`.psds-circularprogress__fg`]: {
    fill: 'transparent',
    strokeWidth: `${vars.style.strokeWidth}px`,
    transition: 'stroke-dashoffset 1s'
  },
  [`.psds-circularprogress__fg.psds-theme--${themeNames.light}`]: {
    stroke: core.colors.gray04
  },
  [`.psds-circularprogress__fg.psds-theme--${themeDefaultName}`]: {
    stroke: core.colors.white
  },
  // __bg
  [`.psds-circularprogress__bg`]: {
    fill: 'transparent',
    strokeWidth: `${vars.style.strokeWidth}px`
  },
  [`.psds-circularprogress__bg.psds-theme--${themeNames.light}`]: {
    stroke: transparentize(0.8, core.colors.gray04)
  },
  [`.psds-circularprogress__bg.psds-theme--${themeDefaultName}`]: {
    stroke: core.colors.gray04
  }
}

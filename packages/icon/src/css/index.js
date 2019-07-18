import core from '@pluralsight/ps-design-system-core'

import * as vars from '../vars/index.js'

export default {
  [`.psds-icon`]: {
    display: 'inline-block'
  },
  [`.psds-icon--size-${vars.sizes.small}`]: {
    height: vars.widths.small,
    width: vars.widths.small
  },
  [`.psds-icon--size-${vars.sizes.medium}`]: {
    height: vars.widths.medium,
    width: vars.widths.medium
  },
  [`.psds-icon--size-${vars.sizes.large}`]: {
    height: vars.widths.large,
    width: vars.widths.large
  },
  [`.psds-icon > svg`]: {
    fill: 'currentColor'
  },
  ...Object.keys(vars.colors).reduce((acc, color) => {
    acc[`.psds-icon--color-${color} > svg`] = {
      fill: core.colors[color]
    }
    return acc
  }, {})
}

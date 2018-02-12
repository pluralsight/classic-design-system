import core from '@pluralsight/ps-design-system-core'

import * as vars from '../vars'

export default {
  [`.psds-icon`]: {
    display: 'inline-block'
  },
  [`.psds-icon--size-${vars.sizes.small}`]: {
    height: '16px',
    width: '16px'
  },
  [`.psds-icon--size-${vars.sizes.medium}`]: {
    height: '24px',
    width: '24px'
  },
  [`.psds-icon--size-${vars.sizes.large}`]: {
    height: '48px',
    width: '48px'
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

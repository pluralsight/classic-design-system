import core from '@pluralsight/ps-design-system-core'

import * as vars from '../vars'

export default {
  [`.psds-link:hover`]: {
    color: core.colors.orange,
    textDecoration: 'underline'
  },
  [`.psds-link--appearance-${vars.appearances.default}`]: {
    color: core.colors.orange,
    textDecoration: 'none'
  },
  [`.psds-link--appearance-${vars.appearances.subtle}`]: {
    color: 'currentColor',
    textDecoration: 'underline'
  }
}

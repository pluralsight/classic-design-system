import { names as themeNames } from '@pluralsight/ps-design-system-theme'

// import { breakpoints } from '../vars/index.js'

export default {
  '.psds-frame': {},

  [`.psds-frame.psds-theme--${themeNames.dark}`]: {},
  [`.psds-frame.psds-theme--${themeNames.light}`]: {}
}

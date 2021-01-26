import { names as themeNames } from '@pluralsight/ps-design-system-theme'

const dark = {
  className: `.psds-theme--${themeNames.dark}`
}

const light = {
  className: `.psds-theme--${themeNames.light}`
}

export default {
  '.psds-field__container': { label: 'field__container' },
  [`.psds-field__container${dark.className}`]: {},
  [`.psds-field__container${light.className}`]: {},

  '.psds-field': { label: 'field' },
  [`.psds-field${dark.className}`]: {},
  [`.psds-field${light.className}`]: {}
}

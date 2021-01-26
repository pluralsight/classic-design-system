import { dark, light } from './shared'

export default {
  '.psds-label': {
    label: 'label'
  },
  [`.psds-label${dark.className}`]: {},
  [`.psds-label${light.className}`]: {}
}

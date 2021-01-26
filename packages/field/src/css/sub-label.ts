import { dark, light } from './shared'

export default {
  '.psds-sub-label': {
    label: 'sub-label'
  },
  [`.psds-sub-label${dark.className}`]: {},
  [`.psds-sub-label${light.className}`]: {}
}

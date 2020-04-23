import { layout } from '@pluralsight/ps-design-system-core'

export default {
  '.psds-searchinput-clear': {
    margin: `0 ${layout.spacingXXSmall}`,
    flex: 'none'
  },
  '.psds-searchinput-field': {
    '&::-webkit-search-cancel-button': {
      display: 'none'
    }
  }
}

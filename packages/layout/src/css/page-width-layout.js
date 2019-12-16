import * as core from '@pluralsight/ps-design-system-core'

export default {
  '.psds-page-width-layout': {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1600px',
    paddingLeft: core.layout.spacingLarge,
    paddingRight: core.layout.spacingLarge
  },
  '@media (min-width: 769px)': {
    '.psds-page-width-layout': {
      paddingLeft: core.layout.spacingXLarge,
      paddingRight: core.layout.spacingXLarge
    }
  }
}

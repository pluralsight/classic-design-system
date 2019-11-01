import * as core from '@pluralsight/ps-design-system-core'

export default {
  '.psds-page-heading-layout': {
    padding: core.layout.spacingLarge
  },
  '.psds-page-heading-layout__actions': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    flexWrap: 'wrap'
  },
  '.psds-page-head-layout__actions > *': {
    marginRight: core.layout.spacingSmall,
    marginBottom: core.layout.spacingMedium
  },
  '@media (min-width: 769px)': {
    '.psds-page-heading-layout__heading': {
      display: 'flex',
      alignItems: 'center'
    },
    '.psds-page-heading-layout__actions': {
      marginLeft: 'auto',
      paddingLeft: core.layout.spacingLarge,
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexWrap: 'nowrap'
    },
    '.psds-page-head-layout__actions > *': {
      marginRight: 0,
      marginBottom: 0
    },
    '.psds-page-head-layout__actions > * + *': {
      marginLeft: core.layout.spacingSmall
    }
  }
}

import { layout } from '@pluralsight/ps-design-system-core'

export default {
  '.psds-navbrand': {
    display: 'flex',
    alignItems: 'center',
    padding: layout.spacingXSmall
  },
  // TODO: handle hover and focus
  '.psds-navbrand--clickable': {
    cursor: 'pointer',
    background: 'none',
    border: 'none'
  },
  '.psds-navbrand__logo': {
    height: '24px',
    width: '24px',

    '& svg': {
      height: '100%',
      width: '100%'
    }
  },
  '.psds-navbrand__wordmark': {
    display: 'none',
    lineHeight: 0
  },
  '@media (min-width: 1200px)': {
    '.psds-navbrand__logo--wordmark': {
      marginRight: layout.spacingXSmall
    },
    '.psds-navbrand__wordmark': {
      display: 'block'
    }
  }
}

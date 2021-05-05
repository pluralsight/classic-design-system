import { layout } from '../../core'

export default {
  '.psds-page-width-layout': {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1600px',
    paddingLeft: layout.spacingLarge,
    paddingRight: layout.spacingLarge
  },
  '@media (min-width: 769px)': {
    '.psds-page-width-layout': {
      paddingLeft: layout.spacingXLarge,
      paddingRight: layout.spacingXLarge
    }
  }
}

import glamorDefault, * as glamorExports from 'glamor'
import { layout } from '../../core'

const glamor = glamorDefault || glamorExports

const selectors: {
  [selector: string]: glamorExports.CSSProperties
  '@media (min-width: 769px)': {
    [selector: string]: glamorExports.CSSProperties
  }
} = {
  '.psds-page-heading-layout': {
    padding: `${layout.spacingLarge} 0`
  },
  '.psds-page-heading-layout__actions': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    flexWrap: 'wrap',

    '& > *': {
      marginRight: layout.spacingSmall,
      marginBottom: layout.spacingMedium
    }
  },
  '@media (min-width: 769px)': {
    '.psds-page-heading-layout__heading': {
      display: 'flex',
      alignItems: 'center'
    },
    '.psds-page-heading-layout__actions': {
      marginLeft: 'auto',
      paddingLeft: layout.spacingLarge,
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexWrap: 'nowrap',

      '& > *': {
        marginRight: 0,
        marginBottom: 0
      },
      '& > * + *': {
        marginLeft: layout.spacingSmall
      }
    }
  }
}
export default selectors

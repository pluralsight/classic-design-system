import * as core from '@pluralsight/ps-design-system-core'

import { asideLayout as vars } from '../vars/index.js'

export default {
  '.psds-aside-layout': {
    display: 'flex'
  },
  [`.psds-aside-layout--aside-position-${vars.asidePositions.first}`]: {
    flexDirection: 'column'
  },
  [`.psds-aside-layout--aside-position-${vars.asidePositions.last}`]: {
    flexDirection: 'column-reverse'
  },
  [`.psds-aside-layout__aside--aside-position-${vars.asidePositions.first}`]: {
    marginBottom: core.layout.spacingLarge
  },
  [`.psds-aside-layout__aside--aside-position-${vars.asidePositions.last}`]: {
    marginTop: core.layout.spacingLarge
  },
  '@media (min-width: 769px)': {
    [`.psds-aside-layout--aside-position-${vars.asidePositions.first}`]: {
      flexDirection: 'row'
    },
    [`.psds-aside-layout--aside-position-${vars.asidePositions.last}`]: {
      flexDirection: 'row-reverse'
    },
    '.psds-aside-layout__aside': {
      width: 'calc(25%)'
    },
    [`.psds-aside-layout__aside--aside-position-${vars.asidePositions.first}`]: {
      marginBottom: 0,
      marginRight: core.layout.spacingLarge
    },
    [`.psds-aside-layout__aside--aside-position-${vars.asidePositions.last}`]: {
      marginTop: 0,
      marginLeft: core.layout.spacingLarge
    },
    '.psds-aside-layout__main': {
      width: 'calc(75%)'
    }
  }
}

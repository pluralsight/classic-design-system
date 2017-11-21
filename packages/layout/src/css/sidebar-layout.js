import core from '@pluralsight/ps-design-system-core'

import { SidebarLayout as vars } from '../vars'

export default {
  ['.psds-sidebar-layout']: {
    display: 'flex'
  },
  [`.psds-sidebar-layout--sidebar-position-${vars.sidebarPositions.first}`]: {
    flexDirection: 'column'
  },
  [`.psds-sidebar-layout--sidebar-position-${vars.sidebarPositions.last}`]: {
    flexDirection: 'column-reverse'
  },
  [`.psds-sidebar-layout__sidebar--sidebar-position-${vars.sidebarPositions
    .first}`]: {
    marginBottom: core.layout.spacingMedium
  },
  [`.psds-sidebar-layout__sidebar--sidebar-position-${vars.sidebarPositions
    .last}`]: {
    marginTop: core.layout.spacingMedium
  },
  '@media (min-width: 769px)': {
    [`.psds-sidebar-layout--sidebar-position-${vars.sidebarPositions.first}`]: {
      flexDirection: 'row'
    },
    [`.psds-sidebar-layout--sidebar-position-${vars.sidebarPositions.last}`]: {
      flexDirection: 'row-reverse'
    },
    ['.psds-sidebar-layout__sidebar']: {
      width: 'calc(33.34%)'
    },
    [`.psds-sidebar-layout__sidebar--sidebar-position-${vars.sidebarPositions
      .first}`]: {
      marginBottom: 0,
      marginRight: core.layout.spacingMedium
    },
    [`.psds-sidebar-layout__sidebar--sidebar-position-${vars.sidebarPositions
      .last}`]: {
      marginTop: 0,
      marginLeft: core.layout.spacingMedium
    },
    ['.psds-sidebar-layout__main']: {
      width: 'calc(66.66%)'
    }
  }
}

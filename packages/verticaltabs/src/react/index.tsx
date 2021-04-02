import {
  RefForwardingComponent,
  HTMLPropsFor
} from '@pluralsight/ps-design-system-util'
import glamor from 'glamor'
import React from 'react'

import Context from './context'
import stylesheet from '../css/index'
import Divider from './divider'
import { Group, CollapsibleGroup } from './group'
import { Tier1, Tier2 } from './item'

const styles = {
  verticaltabs: () => glamor.css(stylesheet['.psds-verticaltabs'])
}

interface VerticalTabsProps extends HTMLPropsFor<'ul'> {
  forceCollapsed?: boolean
  hideLabels?: boolean
}

interface VerticalTabsStatics {
  CollapsibleGroup: typeof CollapsibleGroup
  Divider: typeof Divider
  Group: typeof Group
  Tier1: typeof Tier1
  Tier2: typeof Tier2
}

interface VerticalTabsComponents
  extends RefForwardingComponent<
    VerticalTabsProps,
    HTMLUListElement,
    VerticalTabsStatics
  > {}

const VerticalTabs = React.forwardRef((props, ref) => {
  const {
    children,
    forceCollapsed = false,
    hideLabels = false,
    ...rest
  } = props

  const contextValue = React.useMemo(() => ({ forceCollapsed, hideLabels }), [
    forceCollapsed,
    hideLabels
  ])

  return (
    <Context.Provider value={contextValue}>
      <ul {...styles.verticaltabs()} ref={ref} {...rest}>
        {children}
      </ul>
    </Context.Provider>
  )
}) as VerticalTabsComponents

VerticalTabs.displayName = 'VerticalTabs'

VerticalTabs.Group = Group
VerticalTabs.CollapsibleGroup = CollapsibleGroup

VerticalTabs.Divider = Divider

VerticalTabs.Tier1 = Tier1
VerticalTabs.Tier2 = Tier2

export default VerticalTabs

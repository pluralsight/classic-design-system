import { RefForwardingComponent } from '@pluralsight/ps-design-system-util'
import React from 'react'
import Divider from './dist/esm/react/divider'
import { Group, CollapsibleGroup } from './dist/esm/react/group'
import { Tier1, Tier2 } from './dist/esm/react/item'
interface VerticalTabsProps extends React.HTMLAttributes<HTMLUListElement> {
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
declare const VerticalTabs: VerticalTabsComponents
export default VerticalTabs

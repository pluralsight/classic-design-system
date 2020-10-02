import { RefForwardingComponent } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React, { HTMLAttributes, forwardRef, useMemo } from 'react'

import Context from './context'
import Divider from './divider'
import { Group, CollapsibleGroup } from './group'
import { Tier1, Tier2 } from './item'

import stylesheet from '../css'

const styles = {
  verticaltabs: () => css(stylesheet['.psds-verticaltabs'])
}

interface VerticalTabsProps extends HTMLAttributes<HTMLUListElement> {
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

const VerticalTabs = forwardRef((props, ref) => {
  const {
    children,
    forceCollapsed = false,
    hideLabels = false,
    ...rest
  } = props

  const contextValue = useMemo(() => ({ forceCollapsed, hideLabels }), [
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

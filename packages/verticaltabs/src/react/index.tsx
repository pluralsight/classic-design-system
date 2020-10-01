import { css } from 'glamor'
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import Context from './context'
import Divider from './divider'
import { Group, CollapsibleGroup } from './group'
import { Tier1, Tier2 } from './item'

import stylesheet from '../css'

const styles = {
  verticaltabs: _ => css(stylesheet['.psds-verticaltabs'])
}

const VerticalTabs = forwardRef((props, ref) => {
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
      <ul
        ref={ref}
        {...styles.verticaltabs()}
        {...filterReactProps(rest, { tagName: 'ul' })}
      >
        {children}
      </ul>
    </Context.Provider>
  )
})

VerticalTabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  forceCollapsed: PropTypes.bool,
  hideLabels: PropTypes.bool
}

VerticalTabs.displayName = 'VerticalTabs'

VerticalTabs.Group = Group
VerticalTabs.CollapsibleGroup = CollapsibleGroup

VerticalTabs.Divider = Divider

VerticalTabs.Tier1 = Tier1
VerticalTabs.Tier2 = Tier2

export default VerticalTabs

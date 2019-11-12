import { css } from 'glamor'
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '@pluralsight/ps-design-system-theme'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import Context from './context.js'
import Divider from './divider.js'
import { Group, CollapsibleGroup } from './group.js'
import { Tier1, Tier2 } from './item.js'

import stylesheet from '../css/index.js'

const styles = {
  verticaltabs: themeName =>
    css(
      stylesheet['.psds-verticaltabs'],
      stylesheet[`.psds-verticaltabs.psds-theme--${themeName}`]
    )
}

const VerticalTabs = forwardRef((props, ref) => {
  const { children, hideLabels = false, ...rest } = props

  const themeName = useTheme()
  const contextValue = React.useMemo(() => ({ hideLabels }), [hideLabels])

  return (
    <Context.Provider value={contextValue}>
      <ul
        ref={ref}
        {...styles.verticaltabs(themeName)}
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
  hideLabels: PropTypes.bool
}

VerticalTabs.displayName = 'VerticalTabs'

VerticalTabs.Group = Group
VerticalTabs.CollapsibleGroup = CollapsibleGroup

VerticalTabs.Divider = Divider

VerticalTabs.Tier1 = Tier1
VerticalTabs.Tier2 = Tier2

export default VerticalTabs

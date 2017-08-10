import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import glamorous from 'glamorous'
import React from 'react'

const activeStyles = {
  color: core.colors.white,
  fontWeight: core.type.fontWeightMedium,
  paddingBottom: 0,
  borderBottom: `${core.layout.spacingTiny} solid ${core.colors.orange}`
}

const styleActive = ({ active }) =>
  active ? { ...activeStyles, ...{ ':focus, :active': activeStyles } } : null

const ListItem = glamorous.button(
  {
    display: 'flex',
    alignItems: 'center',
    height: 'calc(100% + 1px)',
    marginBottom: '-1px',
    color: core.colors.gray02,
    fontWeight: core.type.fontWeightBook,
    background: 'none',
    border: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    padding: `0 0 ${core.layout.spacingTiny} 0`,
    transition: `color ${core.motion.speedNormal}`,
    '& + button': {
      marginLeft: core.layout.spacingLarge
    },
    ':hover': {
      color: core.colors.white
    },
    ':focus, :active': {
      outline: 'none',
      color: core.colors.white,
      borderBottom: `4px solid ${core.colors.gray02}`,
      padding: 0
    }
  },
  styleActive
)

const ListItemComponent = props => {
  console.log('props', props)
  return (
    <ListItem
      role="tab"
      aria-selected={props.active}
      active={props.active}
      {...props}
    >
      {props.children}
    </ListItem>
  )
}

import PropTypes from 'prop-types'
ListItemComponent.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string.isRequired
}
ListItemComponent.defaultProps = {
  active: false
}

export default ListItemComponent

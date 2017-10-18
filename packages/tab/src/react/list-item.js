import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'

const barActiveStyles = {
  color: core.colors.white,
  fontWeight: core.type.fontWeightMedium,
  paddingBottom: 0,
  borderBottom: `${core.layout.spacingXXSmall} solid ${core.colors.orange}`
}
const barHoverStyles = {
  color: core.colors.white,
  borderBottom: `4px solid ${core.colors.gray02}`,
  paddingBottom: 0
}

const Bar = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  height: 'calc(100% + 1px)',
  marginBottom: '-1px',
  fontWeight: core.type.fontWeightBook,
  padding: `0 0 ${core.layout.spacingXXSmall} 0`
})

const ListItem = glamorous.button(
  {
    height: '100%',
    background: 'none',
    border: 0,
    cursor: 'pointer',
    padding: `0 calc(${core.layout.spacingXLarge} / 2)`,
    color: core.colors.gray02,
    transition: `color ${core.motion.speedNormal}`,
    ':focus': {
      outline: 'none'
    },
    ':first-child': {
      paddingLeft: 0
    },
    ':hover div': barHoverStyles,
    ':focus div': barHoverStyles,
    ':active div': barActiveStyles
  },
  ({ active }) =>
    active
      ? {
          ':hover div': barActiveStyles,
          ':focus div': barActiveStyles,
          '& div': barActiveStyles
        }
      : null
)

const ListItemComponent = props => (
  <ListItem
    role="tab"
    aria-selected={props.active}
    onClick={props.onClick}
    active={props.active}
  >
    <Bar>{props.children}</Bar>
  </ListItem>
)

ListItemComponent.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func
}
ListItemComponent.defaultProps = {
  active: false
}

export default ListItemComponent

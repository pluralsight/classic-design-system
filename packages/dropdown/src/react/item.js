import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu'

export const Item = forwardRef(
  ({ value, icon, menu, children, ...rest }, ref) => {
    return (
      <ActionMenu.Item
        ref={ref}
        tag="button"
        value={value}
        nested={menu}
        {...rest}
      >
        <ActionMenu.Icon marginLeft>{icon}</ActionMenu.Icon>
        <ActionMenu.Ellipsis>{children}</ActionMenu.Ellipsis>
      </ActionMenu.Item>
    )
  }
)

Item.displayName = 'Dropdown.Item'

Item.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  menu: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
}

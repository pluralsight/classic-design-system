import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu'

import stylesheet from '../css/index.js'
const styles = () => css(stylesheet[`.psds-dropdown__item__icon`])

export const Item = ({ value, icon, children, ...rest }) => {
  return (
    <ActionMenu.Item tag="button" value={value} {...rest}>
      {icon && <span {...styles()}>{icon}</span>}
      <ActionMenu.Ellipsis>{children}</ActionMenu.Ellipsis>
    </ActionMenu.Item>
  )
}

Item.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

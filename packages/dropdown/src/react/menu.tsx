import React, { forwardRef } from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { createUniversalPortal } from '@pluralsight/ps-design-system-util'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import stylesheet from '../css/index.js'

const styles = css(stylesheet['.psds-dropdown__menu'])
export const Menu = forwardRef(
  ({ menu, menuPosition, isOpen, onClick, inNode, onClose, width }, ref) => {
    return (
      menu &&
      isOpen &&
      createUniversalPortal(
        <div {...styles} style={menuPosition}>
          <ActionMenu
            onClick={onClick}
            ref={ref}
            onClose={onClose}
            style={{
              minWidth: '0',
              maxWidth: 'none',
              width
            }}
          >
            {menu}
          </ActionMenu>
        </div>,
        inNode
      )
    )
  }
)

Menu.displayName = 'Dropdown.Menu'
Menu.propTypes = {
  inNode: PropTypes.object,
  isOpen: PropTypes.bool,
  menu: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  menuPosition: PropTypes.object,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setOpen: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Menu.defaultProps = {
  menu: <span />
}

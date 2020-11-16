import React, { forwardRef, HTMLAttributes } from 'react'
import { css } from 'glamor'
import { createUniversalPortal } from '@pluralsight/ps-design-system-util'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import stylesheet from '../css'

const styles = {
  menuWrapper: css(stylesheet['.psds-dropdown__menu-wrapper']),
  menu: css(stylesheet['.psds-dropdown__menu'])
}

interface DropdownMenuProps
  extends Omit<HTMLAttributes<HTMLUListElement>, 'onClick'> {
  inNode?: HTMLElement
  isOpen: boolean
  menu: React.ReactNode
  menuPosition: { top: number; left: number }
  onClick: (e: React.MouseEvent, v?: React.ReactText) => void
  onClose: () => void
  width: React.ReactText
}
export const Menu = forwardRef<HTMLUListElement, DropdownMenuProps>(
  ({ menu, menuPosition, isOpen, onClick, inNode, onClose, width }, ref) => {
    return (
      menu &&
      isOpen &&
      createUniversalPortal(
        <div {...styles.menuWrapper} style={menuPosition}>
          <ActionMenu
            {...styles.menu}
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
Menu.defaultProps = {
  menu: <span />
}

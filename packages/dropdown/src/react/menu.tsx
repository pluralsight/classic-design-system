import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import {
  HTMLPropsFor,
  createUniversalPortal,
  cloneElementWithRef
} from '@pluralsight/ps-design-system-util'
import React, { forwardRef, cloneElement } from 'react'
import { isFragment, isValidElementType } from 'react-is'
import { css } from 'glamor'

import stylesheet from '../css'
import { Item } from './item'

const styles = {
  menuWrapper: css(stylesheet['.psds-dropdown__menu-wrapper']),
  menu: css(stylesheet['.psds-dropdown__menu'])
}

interface DropdownMenuProps extends Omit<HTMLPropsFor<'ul'>, 'onClick'> {
  inNode?: HTMLElement
  isOpen: boolean
  menu: React.ReactNode
  menuId: string
  menuPosition: { top: number; left: number }
  onClick: (e: React.MouseEvent, v?: React.ReactText) => void
  onClose: () => void
  selectedItemId?: string
  width: React.ReactText
}
// TODO: rm forwardRef?
export const Menu = forwardRef<HTMLUListElement, DropdownMenuProps>(
  (props, ref) => {
    return (
      props.menu &&
      props.isOpen &&
      createUniversalPortal(
        <div {...styles.menuWrapper} style={props.menuPosition}>
          <ActionMenu
            {...styles.menu}
            onClick={props.onClick}
            role="listbox"
            onClose={props.onClose}
            style={{
              minWidth: '0',
              maxWidth: 'none',
              width: props.width
            }}
            id={props.menuId}
          >
            {props.menu}
          </ActionMenu>
        </div>,
        props.inNode
      )
    )
  }
)

Menu.displayName = 'Dropdown.Menu'
Menu.defaultProps = {
  menu: <span />
}

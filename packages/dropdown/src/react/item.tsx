import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import { CheckIcon } from '@pluralsight/ps-design-system-icon'
import { HTMLPropsFor, RefFor } from '@pluralsight/ps-design-system-util'
import React, { ReactNode, ReactText, forwardRef, useContext } from 'react'
import { css } from 'glamor'

import stylesheet from '../css'
import { DropdownContext, formatItemId } from '../js'

const styles = {
  icon: css(stylesheet['.psds-dropdown--selected-icon']),
  text: css(stylesheet['.psds-dropdown--item-text'])
}

interface DropdownItemProps extends Omit<HTMLPropsFor<'button'>, 'ref'> {
  children: ReactText
  icon?: ReactNode
  value?: ReactText
  menu?: ReactNode
}

export const Item = forwardRef<HTMLLIElement, DropdownItemProps>(
  ({ value, icon, menu, children, ...rest }, forwardedRef): any => {
    const context = useContext(DropdownContext)
    const isActive = value && context.activeValue === value
    const showSelectedValue = value && context.selectedValue === value

    return (
      <ActionMenu.Item
        active={isActive}
        aria-selected={isActive}
        role="option"
        tagName="button"
        value={value || children}
        nested={menu}
        {...rest}
        id={formatItemId(context.menuId, value, children as string)}
        ref={forwardedRef as RefFor<'li'>}
      >
        <ActionMenu.Icon marginLeft>{icon}</ActionMenu.Icon>
        <ActionMenu.Ellipsis {...styles.text}>{children}</ActionMenu.Ellipsis>
        {showSelectedValue && <CheckIcon {...styles.icon} />}
      </ActionMenu.Item>
    )
  }
)

Item.displayName = 'Dropdown.Item'

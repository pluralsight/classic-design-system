import { CheckIcon } from '@pluralsight/ps-design-system-icon'
import { HTMLPropsFor, RefFor } from '@pluralsight/ps-design-system-util'
import React, { ReactNode, ReactText, forwardRef, useContext } from 'react'
import { css } from 'glamor'

import stylesheet from '../css'
import { DropdownContext, formatItemId } from '../js'

const styles = {
  item: (isActive: boolean, disabled: boolean) =>
    css(
      stylesheet['.psds-dropdown__item'],
      disabled && stylesheet['.psds-dropdown__item--disabled'],
      isActive && stylesheet['.psds-dropdown__item--active']
    ),
  itemIcon: () => css(stylesheet[`.psds-dropdown__item-icon`]),
  itemEllipsis: () => css(stylesheet[`.psds-dropdown__item-text`]),
  itemSelectedIcon: () => css(stylesheet['.psds-dropdown__item-selected-icon'])
}

interface DropdownItemProps
  extends Omit<HTMLPropsFor<'button'>, 'ref' | 'onClick'> {
  children: ReactText
  disabled?: boolean
  onClick?: (evt: React.MouseEvent, value: ReactText) => void
  icon?: ReactNode
  value?: ReactText
}

export const Item = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ disabled, onClick, value, icon, children, ...rest }, forwardedRef) => {
    const context = useContext(DropdownContext)
    const valueExists = typeof value !== 'undefined'
    const isActive =
      (valueExists && context.activeItem?.value === value) ||
      context.activeItem?.label === children
    const isSelected =
      (valueExists && context.selectedItem?.value === value) ||
      context.selectedItem?.label === children

    const handleClick = (evt: React.MouseEvent) => {
      const valueToSend = typeof value !== 'undefined' ? value : children || ''
      context.onMenuClick(evt, valueToSend)
      if (typeof onClick === 'function') onClick(evt, valueToSend)
    }

    return (
      <button
        {...styles.item(isActive, !!disabled)}
        disabled={disabled}
        onClick={handleClick}
        role="option"
        ref={forwardedRef}
        id={formatItemId(context.menuId, children as string, value)}
        tabIndex={-1}
        {...rest}
      >
        <span {...styles.itemIcon()}>{icon}</span>
        <span {...styles.itemEllipsis()}>{children}</span>
        {isSelected && <CheckIcon {...styles.itemSelectedIcon()} />}
      </button>
    )
  }
)

Item.displayName = 'Dropdown.Item'

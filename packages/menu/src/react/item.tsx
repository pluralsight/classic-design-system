import {
  classNames,
  forwardRefWithAs
} from '@pluralsight/ps-design-system-util'
import React from 'react'

import '../css/index.css'
import { MenuContext, ItemContext, SelectedItem } from './context'

export interface MenuItemProps {
  active?: boolean
  disabled?: boolean
  onClick?: (evt: React.MouseEvent, selectedItem: SelectedItem) => void
  isSelected?: boolean
  value?: React.ReactText
  label?: React.ReactText
  onItemBlur?: React.FocusEventHandler
  onItemFocus?: React.FocusEventHandler
  onKeyDown?: React.KeyboardEventHandler
}

export const Item = forwardRefWithAs<MenuItemProps, 'button'>((props, ref) => {
  const {
    as: Comp = 'button',
    active,
    className,
    disabled,
    onClick,
    value = '',
    label = '',
    children,
    onKeyDown,
    role: roleFromProps,
    'aria-selected': ariaSelected,
    ...rest
  } = props
  const {
    onMenuClick,
    selectedItem,
    optionRole: roleFromContext,
    useActive
  } = React.useContext(MenuContext)
  const handleClick = (evt: React.MouseEvent | React.KeyboardEvent) => {
    onMenuClick && onMenuClick(evt as React.MouseEvent, { value, label })
    onClick && onClick(evt as React.MouseEvent, { value, label })
  }
  const handleKeyDown: React.KeyboardEventHandler = evt => {
    if (evt.key === 'Enter') {
      handleClick(evt)
      evt.preventDefault()
    }
    onKeyDown && onKeyDown(evt)
  }
  const selected = selectedItem?.value === value
  const listItem = React.useRef<HTMLDivElement | undefined>()
  const { active: hookActive, handleActiveState } = useActive(listItem)

  const optionRole = roleFromProps || roleFromContext
  const listboxProps =
    optionRole === 'option'
      ? {
          'aria-selected': ariaSelected || selected
        }
      : {}

  return (
    <div
      className={classNames(
        'psds-menu__item',
        disabled && 'psds-menu__item--disabled',
        (active || hookActive) && 'psds-menu__item--active',
        className
      )}
      data-disabled={disabled}
      tabIndex={!disabled ? -1 : undefined}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      ref={listItem as React.RefObject<HTMLDivElement>}
      onBlur={handleActiveState}
      onFocus={handleActiveState}
      {...listboxProps}
    >
      <Comp
        className="psds-menu__option"
        disabled={disabled}
        ref={ref as React.RefObject<HTMLButtonElement>}
        role={optionRole}
        {...rest}
      >
        <div className="psds-menu__option-inner">
          <ItemContext.Provider value={{ selected }}>
            {children}
          </ItemContext.Provider>
        </div>
      </Comp>
    </div>
  )
})

Item.displayName = 'Dropdown.Item'

import { RefFor, forwardRefWithAs } from '../../util'
import React from 'react'
import glamorDefault, * as glamorExports from 'glamor'

import stylesheet from '../css/index'
import { MenuContext, ItemContext, SelectedItem } from './context'

const glamor = glamorDefault || glamorExports

const styles = {
  listItem: (isActive: boolean, disabled: boolean) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-menu__list-item']),
      disabled && glamor.css(stylesheet['.psds-menu__list-item--disabled']),
      isActive && glamor.css(stylesheet['.psds-menu__list-item--active'])
    ),
  option: () => glamor.css(stylesheet['.psds-menu__option']),
  optionInner: () => glamor.css(stylesheet[`.psds-menu__option-inner`])
}

export interface MenuItemProps {
  active?: boolean
  disabled?: boolean
  onClick?: (evt: React.MouseEvent, selectedItem: SelectedItem) => void
  isSelected?: boolean
  value?: SelectedItem
  onItemBlur?: React.FocusEventHandler
  onItemFocus?: React.FocusEventHandler
  onKeyDown?: React.KeyboardEventHandler
}

export const Item = forwardRefWithAs<MenuItemProps, 'button'>((props, ref) => {
  const {
    as: Comp = 'button',
    active,
    disabled,
    onClick,
    value = {
      value: '',
      label: ''
    },
    children,
    onKeyDown,
    role,
    ...rest
  } = props
  const { onMenuClick, selectedItem, optionRole, useActive } = React.useContext(
    MenuContext
  )
  const handleClick = (evt: React.MouseEvent | React.KeyboardEvent) => {
    onMenuClick && onMenuClick(evt as React.MouseEvent, value)
    onClick && onClick(evt as React.MouseEvent, value)
  }
  const handleKeyDown: React.KeyboardEventHandler = evt => {
    evt.key === 'Enter' && handleClick(evt)
    onKeyDown && onKeyDown(evt)
  }
  const selected = selectedItem?.value === value.value
  const listItem = React.useRef<HTMLLIElement | undefined>()
  const { active: hookActive, handleActiveState } = useActive(listItem)
  return (
    <li
      {...styles.listItem(active || hookActive, disabled || false)}
      data-disabled={disabled}
      tabIndex={!disabled ? -1 : undefined}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      ref={listItem as RefFor<'li'>}
      onBlur={handleActiveState}
      onFocus={handleActiveState}
      role={role || optionRole}
      aria-selected={selected}
    >
      <Comp
        {...styles.option()}
        disabled={disabled}
        ref={ref as RefFor<typeof Comp>}
        {...rest}
      >
        <div {...styles.optionInner()}>
          <ItemContext.Provider value={{ selected }}>
            {children}
          </ItemContext.Provider>
        </div>
      </Comp>
    </li>
  )
})

Item.displayName = 'Dropdown.Item'

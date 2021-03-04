import { RefFor, ForwardRefComponent } from '@pluralsight/ps-design-system-util'
import React, { ReactText, forwardRef, useContext, useRef } from 'react'
import { css, compose } from 'glamor'

import stylesheet from '../css'
import { MenuContext, ItemContext, SelectedItem } from './context'

const styles = {
  listItem: (isActive: boolean, disabled: boolean) =>
    compose(
      css(stylesheet['.psds-menu__list-item']),
      disabled && css(stylesheet['.psds-menu__list-item--disabled']),
      isActive && css(stylesheet['.psds-menu__list-item--active'])
    ),
  option: () => css(stylesheet['.psds-menu__option']),
  optionInner: () => css(stylesheet[`.psds-menu__option-inner`])
}

interface MenuItemProps {
  active?: boolean
  disabled?: boolean
  onClick?: (evt: React.MouseEvent, selectedItem: SelectedItem) => void
  isSelected?: boolean
  value?: SelectedItem
  onItemBlur?: React.FocusEventHandler
  onItemFocus?: React.FocusEventHandler
  as?: string
  onKeyDown?: React.KeyboardEventHandler
}

export const Item = forwardRef((props, ref) => {
  const {
    as: Comp = 'button',
    active,
    disabled,
    onClick,
    value = {
      value: '',
      option: ''
    },
    children,
    onKeyDown,
    role,
    ...rest
  } = props
  const { onMenuClick, selectedItem, optionRole, useActive } = useContext(
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
  const listItem = useRef<HTMLLIElement | undefined>()
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
}) as ForwardRefComponent<'button', MenuItemProps>

Item.displayName = 'Dropdown.Item'

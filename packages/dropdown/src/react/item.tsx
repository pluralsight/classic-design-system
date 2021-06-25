import { CheckIcon } from '@pluralsight/ps-design-system-icon'
import { RefFor } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import { DropdownContext } from '../js/index'

const glamor = glamorDefault || glamorExports

const styles = {
  item: (isActive: boolean, disabled: boolean) =>
    glamor.css(
      stylesheet['.psds-dropdown__item'],
      disabled && stylesheet['.psds-dropdown__item--disabled'],
      isActive && stylesheet['.psds-dropdown__item--active']
    ),
  itemIcon: () => glamor.css(stylesheet[`.psds-dropdown__item-icon`]),
  itemEllipsis: () => glamor.css(stylesheet[`.psds-dropdown__item-text`]),
  itemSelectedIcon: () =>
    glamor.css(stylesheet['.psds-dropdown__item-selected-icon'])
}

interface DropdownItemProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children: React.ReactText
  disabled?: boolean
  onClick?: (evt: React.MouseEvent, value: React.ReactText) => void
  icon?: React.ReactNode
  value?: React.ReactText
}

export const Item = React.forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ disabled, onClick, value, icon, children, ...rest }, forwardedRef) => {
    const context = React.useContext(DropdownContext)
    const ref = React.useRef<HTMLButtonElement>()
    React.useImperativeHandle(
      forwardedRef,
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      () => ref.current as HTMLButtonElement
    )
    const [active, setActive] = React.useState(false)
    const isActive = React.useCallback(() => {
      ref.current && setActive(document.activeElement === ref.current)
    }, [ref, setActive])
    React.useEffect(() => {
      isActive()
    }, [isActive])
    const valueExists = typeof value !== 'undefined'
    const isSelected =
      (valueExists && context.selectedItem?.value === value) ||
      context.selectedItem?.label === children

    const handleClick = (evt: React.MouseEvent | React.KeyboardEvent) => {
      const valueToSend = typeof value !== 'undefined' ? value : children || ''
      context.onMenuClick(evt as React.MouseEvent, valueToSend)
      if (typeof onClick === 'function')
        onClick(evt as React.MouseEvent, valueToSend)
    }
    const handleKeyDown: React.KeyboardEventHandler = evt => {
      if (evt.key === 'Enter') {
        handleClick(evt)
        evt.preventDefault()
      }
    }
    return (
      <button
        {...styles.item(active, !!disabled)}
        disabled={disabled}
        onClick={handleClick}
        onBlur={isActive as React.FocusEventHandler}
        onFocus={isActive as React.FocusEventHandler}
        onKeyDown={handleKeyDown}
        role="option"
        aria-selected={isSelected}
        ref={ref as RefFor<'button'>}
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

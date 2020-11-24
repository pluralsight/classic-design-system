import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import { CheckIcon } from '@pluralsight/ps-design-system-icon'
import { HTMLPropsFor, RefFor } from '@pluralsight/ps-design-system-util'
import React, { ReactNode, ReactText, forwardRef, useContext } from 'react'
import { css } from 'glamor'

import stylesheet from '../css'
import { DropdownContext, formatItemId } from '../js'

const styles = {
  // TODO: verify proper BEM
  icon: () => css(stylesheet['.psds-dropdown--selected-icon']),
  item: (isActive: boolean, disabled: boolean) =>
    css(
      stylesheet['.psds-dropdown__item'],
      disabled && stylesheet['.psds-dropdown__item--disabled'],
      isActive && stylesheet['.psds-dropdown__item--active']
    ),
  itemInner: () => css(stylesheet['.psds-dropdown__item-inner']),
  itemIcon: () => css(stylesheet[`.psds-dropdown__item-icon`]),
  // TODO: rename?
  itemEllipsis: () => css(stylesheet[`.psds-dropdown__item-ellipsis`])
}

// TODO: breaking change: rm href
interface DropdownItemProps extends Omit<HTMLPropsFor<'button'>, 'ref'> {
  children: ReactText
  disabled?: boolean
  icon?: ReactNode
  value?: ReactText
}

export const Item = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ disabled, value, icon, children, ...rest }, forwardedRef): any => {
    const context = useContext(DropdownContext)
    const isActive = value && context.activeValue === value
    const isSelected = value && context.selectedValue === value

    const handleClick = (evt: React.MouseEvent) => {
      context.onMenuClick(evt, value || children)
      /* rest.onClick && rest.onClick(evt, value) */
      /* onClickContext && onClickContext(evt, value) */
      /* rest.onClose && rest.onClose(evt, value) */
    }

    // TODO: verify onClick gets passed in (as well as other props)
    return (
      <button
        {...styles.item(isActive, disabled)}
        disabled={disabled}
        onClick={handleClick}
        role="option"
        ref={forwardedRef}
        id={formatItemId(context.menuId, value, children as string)}
        tabIndex={-1}
        {...rest}
      >
        <span {...styles.itemIcon()}>{icon}</span>
        <span {...styles.itemEllipsis()}>{children}</span>
        {isSelected && <CheckIcon {...styles.icon()} />}
      </button>
    )
  }
)

Item.displayName = 'Dropdown.Item'

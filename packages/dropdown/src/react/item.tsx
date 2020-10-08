import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useImperativeHandle,
  HTMLAttributes
} from 'react'
import { css } from 'glamor'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import { DropdownContext } from '../js/index.js'
import { CheckIcon } from '@pluralsight/ps-design-system-icon'

import stylesheet from '../css/index.js'

const styles = {
  icon: css(stylesheet['.psds-dropdown--selected-icon']),
  text: css(stylesheet['.psds-dropdown--item-text'])
}

interface DropdownItemProps extends HTMLAttributes<HTMLLIElement> {
  icon: React.ReactNode,
  value: string | number,
  menu: React.ReactNode
}

export const Item = forwardRef<HTMLLIElement, DropdownItemProps>(
  ({ value, icon, menu, children, ...rest }, forwardedRef) => {
    const selectedValue = useContext(DropdownContext)
    const showSelectedValue = value && selectedValue === value
    const ref = useRef<HTMLLIElement>()
    useImperativeHandle(forwardedRef, () => ref.current)
    useEffect(() => {
      if (showSelectedValue && ref.current) {
        ref.current.focus()
      }
    }, [showSelectedValue])
    return (
      <ActionMenu.Item
        ref={ref}
        tagName="button"
        value={value}
        nested={menu}
        {...rest}
      >
        <ActionMenu.Icon marginLeft>{icon}</ActionMenu.Icon>
        <ActionMenu.Ellipsis {...styles.text}>{children}</ActionMenu.Ellipsis>
        {showSelectedValue && <CheckIcon {...styles.icon} />}
      </ActionMenu.Item>
    )
  }
)

Item.displayName = 'Dropdown.Item'
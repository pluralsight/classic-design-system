import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useImperativeHandle
} from 'react'
import { css } from 'glamor'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import { DropdownContext } from '../js'
import { CheckIcon } from '@pluralsight/ps-design-system-icon'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

const styles = {
  icon: css(stylesheet['.psds-dropdown--selected-icon']),
  text: css(stylesheet['.psds-dropdown--item-text'])
}

interface DropdownItemProps extends HTMLPropsFor<'li'> {
  icon?: React.ReactNode
  value?: React.ReactText
  menu?: React.ReactNode
}

export const Item = forwardRef<HTMLLIElement, DropdownItemProps>(
  ({ value, icon, menu, children, ...rest }, forwardedRef) => {
    const selectedValue = useContext(DropdownContext)
    const showSelectedValue = value && selectedValue === value

    const ref = useRef<HTMLLIElement | null>(null)
    useImperativeHandle(forwardedRef, () => ref.current)

    useEffect(() => {
      if (showSelectedValue && ref.current) {
        ref.current.focus()
      }
    }, [showSelectedValue])

    // TODO: update ActionMenu.Item ref typings then come back and remove casting
    return (
      <ActionMenu.Item
        ref={ref as any}
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

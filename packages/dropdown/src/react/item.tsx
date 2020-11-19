import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import { CheckIcon } from '@pluralsight/ps-design-system-icon'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useImperativeHandle
} from 'react'
import { css } from 'glamor'

import stylesheet from '../css'
import { DropdownContext } from '../js'

const styles = {
  icon: css(stylesheet['.psds-dropdown--selected-icon']),
  text: css(stylesheet['.psds-dropdown--item-text'])
}

interface DropdownItemProps extends Omit<HTMLPropsFor<'button'>, 'ref'> {
  icon?: React.ReactNode
  value?: React.ReactText
  menu?: React.ReactNode
}

export const Item = forwardRef<HTMLLIElement, DropdownItemProps>(
  ({ value, icon, menu, children, ...rest }, forwardedRef): any => {
    const context = useContext(DropdownContext)
    const selectedItemId = context.selectedItemId
    const selectedValue = context.selectedValue
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
        tagName="button"
        value={value}
        nested={menu}
        {...rest}
        id={showSelectedValue ? selectedItemId : undefined}
        ref={ref}
      >
        <ActionMenu.Icon marginLeft>{icon}</ActionMenu.Icon>
        <ActionMenu.Ellipsis {...styles.text}>{children}</ActionMenu.Ellipsis>
        {showSelectedValue && <CheckIcon {...styles.icon} />}
      </ActionMenu.Item>
    )
  }
)

Item.displayName = 'Dropdown.Item'

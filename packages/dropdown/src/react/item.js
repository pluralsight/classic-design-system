import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useImperativeHandle
} from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import { DropdownContext } from '../js/index.js'
import { CheckIcon } from '@pluralsight/ps-design-system-icon'
import stylesheet from '../css/index.js'

const styles = {
  icon: css(stylesheet['.psds-dropdown--selected-icon']),
  text: css(stylesheet['.psds-dropdown--item-text'])
}
export const Item = forwardRef(
  ({ value, icon, menu, children, ...rest }, forwardedRef) => {
    const selectedValue = useContext(DropdownContext)
    const showSelectedValue = value && selectedValue === value
    const ref = useRef()
    useImperativeHandle(forwardedRef, () => ref.current)
    useEffect(() => {
      if (showSelectedValue && ref.current) {
        let currentAnimationFrame = null
        window.cancelAnimationFrame(currentAnimationFrame)
        currentAnimationFrame = window.requestAnimationFrame(() => {
          ref.current.focus()
        })
      }
    }, [showSelectedValue])
    return (
      <ActionMenu.Item
        ref={ref}
        tag="button"
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

Item.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  menu: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
}

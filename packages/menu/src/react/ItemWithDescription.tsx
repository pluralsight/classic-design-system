import { forwardRefWithAs } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import Menu, { MenuItemProps } from './index'

const glamor = glamorDefault || glamorExports

const styles = {
  item: () => glamor.css(stylesheet['.psds-menu__item-with-description']),
  wrapper: () =>
    glamor.css(stylesheet['.psds-menu__item-with-description__wrapper']),
  description: () =>
    glamor.css(stylesheet[`.psds-menu__item-with-description__description`])
}

interface MenuItemWithDescriptionProps extends Omit<MenuItemProps, 'value'> {
  label: React.ReactText
  value: React.ReactText
  description: React.ReactText
}

export const MenuItemWithDescription = forwardRefWithAs<
  MenuItemWithDescriptionProps,
  'button'
>((props, ref) => {
  const { label, value, description, ...rest } = props
  return (
    <Menu.Item {...rest} ref={ref} value={{ label, value }} {...styles.item()}>
      <div {...styles.wrapper()}>
        <span>{label}</span>
        <span {...styles.description()}>{description}</span>
      </div>
      <Menu.Check style={{ marginLeft: 'auto' }} />
    </Menu.Item>
  )
})

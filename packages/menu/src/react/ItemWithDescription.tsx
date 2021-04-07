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

interface MenuItemWithDescriptionProps extends MenuItemProps {
  id: React.ReactText
  name: React.ReactText
  description: React.ReactText
}

export const MenuItemWithDescription = forwardRefWithAs<
  MenuItemWithDescriptionProps,
  'button'
>((props, ref) => {
  const { id, name, description, ...rest } = props
  return (
    <Menu.Item {...rest} ref={ref} value={{ id, name }} {...styles.item()}>
      <div {...styles.wrapper()}>
        <span>{name}</span>
        <span {...styles.description()}>{description}</span>
      </div>
      <Menu.Check style={{ marginLeft: 'auto' }} />
    </Menu.Item>
  )
})

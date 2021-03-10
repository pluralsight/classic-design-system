import React, { forwardRef } from 'react'
import { ForwardRefComponent } from '@pluralsight/ps-design-system-util'
import Menu, { MenuItemProps } from './index'
import { css } from 'glamor'
import stylesheet from '../css'

const styles = {
  item: () => css(stylesheet['.psds-menu__item-with-description']),
  name: () => css(stylesheet['.psds-menu__item-with-description__name']),
  description: () =>
    css(stylesheet[`.psds-menu__item-with-description__description`])
}

interface MenuItemWithDescriptionProps extends MenuItemProps {
  id: React.ReactText
  name: React.ReactText
  description: React.ReactText
}

export const MenuItemWithDescription = forwardRef((props, ref) => {
  const { id, name, description, ...rest } = props
  return (
    <Menu.Item {...rest} ref={ref} value={{ id, name }}>
      <div {...styles.item()}>
        <span {...styles.name()}>{name}</span>
        <span {...styles.description()}>{description}</span>
      </div>
      <Menu.Check style={{ marginLeft: 'auto' }} />
    </Menu.Item>
  )
}) as ForwardRefComponent<'button', MenuItemWithDescriptionProps>

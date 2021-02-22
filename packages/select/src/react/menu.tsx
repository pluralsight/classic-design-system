import { compose, css } from 'glamor'
import React, { ForwardRefExoticComponent, forwardRef } from 'react'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

const styles = {
  menu: (opts: { open: boolean }) =>
    compose(
      css(stylesheet['.psds-select__menu']),
      opts.open && css(stylesheet['.psds-select__menu--open'])
    ),

  menuItem: (opts: { highlighted: boolean }) =>
    compose(
      css(stylesheet['.psds-select__menu__item']),
      opts.highlighted &&
        css(stylesheet['.psds-select__menu__item--highlighted'])
    ),
  menuItemLabel: () => css(stylesheet['.psds-select__menu__item__label']),
  menuItemDesc: () => css(stylesheet['.psds-select__menu__item__desc'])
}

interface MenuProps extends Omit<HTMLPropsFor<'ul'>, 'ref'> {
  open: boolean
}
interface MenuStatics {
  Item: typeof Item
  ItemLabel: typeof ItemLabel
  ItemDesc: typeof ItemDesc
}

type MenuComponent = ForwardRefExoticComponent<MenuProps> & MenuStatics

const Menu = forwardRef<HTMLUListElement, MenuProps>((props, ref) => {
  const { open, ...rest } = props

  return <ul ref={ref} {...rest} {...styles.menu({ open })} />
}) as MenuComponent

interface ItemProps extends Omit<HTMLPropsFor<'li'>, 'ref'> {
  highlighted: boolean
}
const Item = forwardRef<HTMLLIElement, ItemProps>((props, ref) => {
  const { children, highlighted, ...rest } = props

  return (
    <li ref={ref} {...rest} {...styles.menuItem({ highlighted })}>
      {children}
    </li>
  )
})

interface ItemLabelProps extends Omit<HTMLPropsFor<'span'>, 'ref'> {}
const ItemLabel = forwardRef<HTMLSpanElement, ItemLabelProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <span ref={ref} {...rest} {...styles.menuItemLabel()}>
      {children}
    </span>
  )
})

interface ItemDescProps extends Omit<HTMLPropsFor<'span'>, 'ref'> {}
const ItemDesc = forwardRef<HTMLSpanElement, ItemDescProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <span ref={ref} {...rest} {...styles.menuItemDesc()}>
      {children}
    </span>
  )
})

Menu.Item = Item
Menu.ItemLabel = ItemLabel
Menu.ItemDesc = ItemDesc

export { Menu }

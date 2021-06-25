import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  menu: (opts: { open: boolean }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-multi-select__menu']),
      opts.open && glamor.css(stylesheet['.psds-multi-select__menu--open'])
    ),

  menuItem: (opts: { highlighted: boolean }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-multi-select__menu__item']),
      opts.highlighted &&
        glamor.css(stylesheet['.psds-multi-select__menu__item--highlighted'])
    )
}

interface MenuProps
  extends Omit<React.HTMLAttributes<HTMLUListElement>, 'ref'> {
  open: boolean
}
interface MenuStatics {
  Item: typeof Item
}

type MenuComponent = React.ForwardRefExoticComponent<MenuProps> & MenuStatics

const Menu = React.forwardRef<HTMLUListElement, MenuProps>((props, ref) => {
  const { open, ...rest } = props

  return <ul ref={ref} {...rest} {...styles.menu({ open })} />
}) as MenuComponent

interface ItemProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'ref'> {
  highlighted: boolean
}
const Item = React.forwardRef<HTMLLIElement, ItemProps>((props, ref) => {
  const { children, highlighted, ...rest } = props
  return (
    <li ref={ref} {...rest} {...styles.menuItem({ highlighted })}>
      {children}
    </li>
  )
})

Menu.Item = Item

export { Menu }

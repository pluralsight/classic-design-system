import {
  RefForwardingComponent,
  ValueOf,
  useMenuRef
} from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import * as vars from '../vars/index'

import { MenuContext, SelectedItem, defaultUseActive } from './context'
import { Check } from './check'
import { Divider } from './divider'
import { Ellipsis } from './ellipsis'
import { Item } from './item'

const glamor = glamorDefault || glamorExports

const slide = glamor.keyframes(
  stylesheet['@keyframes psds-menu__keyframes__slide']
)

const styles = ({ origin }: { origin?: ValueOf<typeof vars.origins> }) =>
  glamor.compose(
    glamor.css(stylesheet['.psds-menu']),
    glamor.css(stylesheet[`.psds-menu--origin-${origin}`]),
    glamor.css(stylesheet['.psds-menu__animation']({ slide }))
  )

interface MenuStatics {
  Check: typeof Check
  Divider: typeof Divider
  Ellipsis: typeof Ellipsis
  Item: typeof Item
  origins: typeof vars.origins
  tagName: typeof vars.tagName
  useMenuRef: typeof useMenuRef
}

interface MenuProps
  extends Omit<React.HTMLAttributes<HTMLUListElement>, 'onClick'> {
  selectedItem?: {
    value: React.ReactText
    label: React.ReactText
  }
  optionRole?: string
  useActive?: (ref: React.MutableRefObject<HTMLLIElement | undefined>) => {
    active: boolean
    handleActiveState: (event: React.FocusEvent<Element>) => void
  }
  onClick?: (evt: React.MouseEvent, selectedItem: SelectedItem) => void
  origin?: ValueOf<typeof vars.origins>
}
type MenuComponent = RefForwardingComponent<
  MenuProps,
  HTMLUListElement,
  MenuStatics
>
const Menu = React.forwardRef<HTMLUListElement, MenuProps>(
  (
    {
      selectedItem,
      origin = vars.origins.topLeft,
      onClick,
      children,
      role = 'menu',
      optionRole = 'menuitem',
      useActive = defaultUseActive,
      ...rest
    },
    ref
  ) => {
    return (
      <ul {...styles({ origin })} ref={ref} {...rest} role={role}>
        <MenuContext.Provider
          value={{
            onMenuClick: onClick,
            selectedItem,
            optionRole,
            useActive
          }}
        >
          {children}
        </MenuContext.Provider>
      </ul>
    )
  }
) as MenuComponent

Menu.displayName = 'Menu.Menu'

Menu.Check = Check
Menu.Divider = Divider
Menu.Ellipsis = Ellipsis
Menu.Item = Item
Menu.origins = vars.origins
Menu.tagName = vars.tagName

Menu.useMenuRef = useMenuRef
export type { MenuItemProps } from './item'
export default Menu

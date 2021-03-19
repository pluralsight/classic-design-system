import React, { MouseEvent, ReactText } from 'react'
import { css, compose, keyframes } from 'glamor'
import {
  HTMLPropsFor,
  RefForwardingComponent,
  ValueOf,
  useMenuRef
} from '@pluralsight/ps-design-system-util'

import stylesheet from '../css/index'
import * as vars from '../vars/index'

import { MenuContext, SelectedItem, defaultUseActive } from './context'
import { Check } from './check'
import { Divider } from './divider'
import { Ellipsis } from './ellipsis'
import { Item } from './item'

const slide = keyframes(stylesheet['@keyframes psds-menu__keyframes__slide'])

const styles = ({ origin }: { origin?: ValueOf<typeof vars.origins> }) =>
  compose(
    css(stylesheet['.psds-menu']),
    css(stylesheet[`.psds-menu--origin-${origin}`]),
    css(stylesheet['.psds-menu__animation']({ slide }))
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

interface MenuProps extends Omit<HTMLPropsFor<'ul'>, 'onClick'> {
  selectedItem?: {
    id: ReactText
    name: ReactText
  }
  optionRole?: string
  useActive?: (
    ref: React.MutableRefObject<HTMLLIElement | undefined>
  ) => {
    active: boolean
    handleActiveState: (event: React.FocusEvent<Element>) => void
  }
  onClick?: (evt: MouseEvent, selectedItem: SelectedItem) => void
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

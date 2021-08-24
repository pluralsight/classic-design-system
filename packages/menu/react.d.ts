import {
  RefForwardingComponent,
  ValueOf,
  useMenuRef
} from '@pluralsight/ps-design-system-util'
import React from 'react'
import * as vars from './dist/esm/vars/index'
import { SelectedItem } from './dist/esm/react/context'
import { Check } from './dist/esm/react/check'
import { Divider } from './dist/esm/react/divider'
import { Ellipsis } from './dist/esm/react/ellipsis'
import { Item } from './dist/esm/react/item'
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
declare const Menu: RefForwardingComponent<
  MenuProps,
  HTMLUListElement,
  MenuStatics
>
export type { MenuItemProps } from './dist/esm/react/item'
export default Menu

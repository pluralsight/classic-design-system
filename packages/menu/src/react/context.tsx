import { ValueOf } from '@pluralsight/ps-design-system-util'
import React from 'react'

import { origins } from '../vars/index'

export interface SelectedItem {
  value: React.ReactText
  label: React.ReactText
}
interface MenuContextValue {
  onMenuClick?: (evt: React.MouseEvent, selectedItem: SelectedItem) => void
  originContext?: ValueOf<typeof origins>
  selectedItem?: SelectedItem
  optionRole: string
  useActive: (
    ref: React.MutableRefObject<HTMLLIElement | undefined>
  ) => {
    active: boolean
    handleActiveState: (event: React.FocusEvent<Element>) => void
  }
}

export const defaultUseActive = (
  ref: React.MutableRefObject<HTMLLIElement | undefined>
) => ({
  active: false,
  handleActiveState: (event: React.FocusEvent<Element>) => {}
})

const menuInitialValue = {
  useActive: defaultUseActive,
  optionRole: 'menuitem'
}

export const MenuContext = React.createContext<MenuContextValue>(
  menuInitialValue
)

interface ItemContextValue {
  selected?: boolean
}

const itemInitialValue = {}

export const ItemContext = React.createContext<ItemContextValue>(
  itemInitialValue
)

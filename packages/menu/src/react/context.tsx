import { ValueOf } from '@pluralsight/ps-design-system-util'
import { MouseEvent, ReactText, createContext, FocusEvent } from 'react'

import { origins } from '../vars'

export interface SelectedItem {
  option: string
  value: number | string
}
interface MenuContextValue {
  onMenuClick?: (evt: MouseEvent, selectedItem: SelectedItem) => void
  originContext?: ValueOf<typeof origins>
  selectedItem?: SelectedItem
  optionRole: string
  useActive: (
    ref: React.MutableRefObject<HTMLLIElement | undefined>
  ) => {
    active: boolean
    handleActiveState: (event: FocusEvent<Element>) => void
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

export const MenuContext = createContext<MenuContextValue>(menuInitialValue)

interface ItemContextValue {
  selected?: boolean
}

const itemInitialValue = {}

export const ItemContext = createContext<ItemContextValue>(itemInitialValue)

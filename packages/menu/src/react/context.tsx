import { ValueOf } from '@pluralsight/ps-design-system-util'
import { MouseEvent, ReactText, createContext, FocusEvent } from 'react'

import { origins } from '../vars'

interface MenuContextValue {
  onMenuClick?: (evt: MouseEvent, value?: ReactText) => void
  originContext?: ValueOf<typeof origins>
  selectedItem?: {
    option: string
    value: number | string
  }
  option?: {
    role?: string
    useActive?: (
      ref: React.MutableRefObject<HTMLLIElement | undefined>
    ) => {
      active: boolean
      handleActiveState: (event: FocusEvent<Element>) => void
    }
    [x: string]: unknown
  }
}

const menuInitialValue = {}

export const MenuContext = createContext<MenuContextValue>(menuInitialValue)

interface ItemContextValue {
  selected?: boolean
}

const itemInitialValue = {}

export const ItemContext = createContext<ItemContextValue>(itemInitialValue)

import { ValueOf } from '@pluralsight/ps-design-system-util'
import { MouseEvent, ReactText, createContext } from 'react'

import { origins } from '../vars/index'

interface ContextValue {
  onClickContext?: (evt: MouseEvent, value?: ReactText) => void
  onClose?: (evt: MouseEvent, value?: ReactText) => void
  originContext?: ValueOf<typeof origins>
}

const initialValue = {}

export const ActionMenuContext = createContext<ContextValue>(initialValue)

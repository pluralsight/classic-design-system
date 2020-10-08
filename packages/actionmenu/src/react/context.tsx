import { MouseEvent, ReactText, createContext } from 'react'

interface ContextValue {
  onClickContext?: (evt: MouseEvent, value: ReactText) => void
  onClose?: (evt: MouseEvent, value: ReactText) => void
  originContext?: string
}

const initialValue = {}

export const ActionMenuContext = createContext<ContextValue>(initialValue)

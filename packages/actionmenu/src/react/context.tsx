import { MouseEvent, createContext } from 'react'

interface ContextValue {
  onClickContext?: (evt: MouseEvent, value: string | number) => void
  onClose?: (evt: MouseEvent, value: string | number) => void
  originContext?: string
}

const initialValue = {}

export const ActionMenuContext = createContext<ContextValue>(initialValue)

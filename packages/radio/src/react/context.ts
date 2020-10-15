import { createContext, ReactText, MouseEvent } from 'react'
interface ContextValue {
  checkedValue?: ReactText
  onChange?: (evt?: MouseEvent,val?: ReactText) => void
  disabled?: boolean
  error?: boolean
  name?: string
}

export const RadioContext = createContext<ContextValue>({})

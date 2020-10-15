import { createContext, ReactText, MouseEvent } from 'react'
interface ContextValue { 
  checkedValue?: ReactText 
  onChange?: (e?:MouseEvent, v?: ReactText) => void
  disabled?: boolean
  error?: boolean
  name?: string
}

export const RadioContext = createContext<ContextValue>({})

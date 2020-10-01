import { createContext } from 'react'

export const ActionMenuContext = createContext<{
  onClickContext: (e: Event, v: string | number) => void
  onClose: (e: Event, v: string | number) => void
  originContext: string
}>({
  onClickContext: (e, v) => {},
  onClose: (e, v) => {},
  originContext: ''
})

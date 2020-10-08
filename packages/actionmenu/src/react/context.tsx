import { createContext } from 'react'

export const ActionMenuContext = createContext<{
  onClickContext: (e: React.MouseEvent, v: React.ReactText) => void
  onClose: (e: React.MouseEvent, v: React.ReactText) => void
  originContext: string
}>({
  onClickContext: (e, v) => {},
  onClose: (e, v) => {},
  originContext: ''
})

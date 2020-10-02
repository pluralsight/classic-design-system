import { createContext, useContext } from 'react'

interface ContextValue {
  forceCollapsed: boolean
  hideLabels: boolean
}

const initialState: ContextValue = {
  forceCollapsed: false,
  hideLabels: false
}
const Context = createContext<ContextValue>(initialState)

export default Context

export const useForceCollapsed = () => useContext(Context).forceCollapsed
export const useHideLabels = () => useContext(Context).hideLabels

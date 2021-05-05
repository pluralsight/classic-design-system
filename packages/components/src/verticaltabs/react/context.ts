import React from 'react'

interface ContextValue {
  forceCollapsed: boolean
  hideLabels: boolean
}

const initialState: ContextValue = {
  forceCollapsed: false,
  hideLabels: false
}
const Context = React.createContext<ContextValue>(initialState)

export default Context

export const useForceCollapsed = () => React.useContext(Context).forceCollapsed
export const useHideLabels = () => React.useContext(Context).hideLabels

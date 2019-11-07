import React, { useContext } from 'react'

const initialState = { forceCollapsed: false, hideLabels: false }
const Context = React.createContext(initialState)

export default Context

export const useForceCollapsed = () => useContext(Context).forceCollapsed
export const useHideLabels = () => useContext(Context).hideLabels

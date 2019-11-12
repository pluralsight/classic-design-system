import React, { useContext } from 'react'

const initialState = { hideLabels: false }
const Context = React.createContext(initialState)

export default Context

export const useHideLabels = () => useContext(Context).hideLabels

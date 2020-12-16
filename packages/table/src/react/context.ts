import React from 'react'

export interface ContextValue {
  stuck: boolean
}

export const initialContext: Required<ContextValue> = {
  stuck: true
}

const Context = React.createContext<ContextValue>(initialContext)

export default Context

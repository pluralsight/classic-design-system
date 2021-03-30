import React from 'react'

interface ContextValue {
  checkedValue?: React.ReactText
  onChange?: (evt?: React.MouseEvent, val?: React.ReactText) => void
  disabled?: boolean
  error?: boolean
  name?: string
}

export const RadioContext = React.createContext<ContextValue>({})

import { createContext, useContext } from 'react'

export const RadioContext = createContext()

export const useRadioContext = () => {
  const context = useContext(RadioContext)
  if (!context) {
    throw new Error(
      `Radio compound components cannot be rendered outside the Radio component`
    )
  }
  return context
}

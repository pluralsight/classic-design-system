import { createContext, useContext } from 'react'

export const DrawerContext = createContext()

export const useDrawerContext = () => {
  const context = useContext(DrawerContext)

  if (!context) {
    throw new Error(
      'Drawer compound components cannot be rendered outside the Drawer component'
    )
  }

  return context
}

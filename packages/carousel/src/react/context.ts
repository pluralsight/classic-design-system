import React from 'react'

const initialValue = {
  transitioning: false,
  setTransitioning: () => {}
}
const context = React.createContext(initialValue)

export default context

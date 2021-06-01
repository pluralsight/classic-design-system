import React from 'react'

interface CarouselContextValue {
  next: () => void
  prev: () => void
  isPrevVisible: boolean
  isNextVisible: boolean
  itemWidth: number
}
const context = React.createContext<CarouselContextValue>({
  next: () => {},
  prev: () => {},
  isPrevVisible: false,
  isNextVisible: true,
  itemWidth: 0
})

export default context

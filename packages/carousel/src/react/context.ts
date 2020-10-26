import React from 'react'

interface CarouselContextValue {
  activePage: number
  next: () => void
  offset: number
  prev: () => void
  id: string
  pageCount: number
  perPage: number
  transitioning: boolean
  setTransitioning: React.Dispatch<React.SetStateAction<boolean>>
}
const context = React.createContext<CarouselContextValue>({
  activePage: 0,
  next: () => {},
  offset: 0,
  prev: () => {},
  id: 'carousel-initialId',
  pageCount: 0,
  perPage: 0,
  transitioning: false,
  setTransitioning: () => {}
})

export default context

import React from 'react'

const initialValue = {
  transitioning: false,
  setTransitioning: (_t: boolean) => {}
}
// TODO: ensure that the optionality is appropriate here
interface CarouselContextValue {
  activePage?: number
  next?: number
  offset?: number
  prev?: number
  id?: string
  pageCount?: number
  perPage?: number
  transitioning: boolean
  setTransitioning: React.Dispatch<React.SetStateAction<boolean>>
}
const context = React.createContext<CarouselContextValue>(initialValue)

export default context

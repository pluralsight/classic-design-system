import { useEffect } from 'react'
import { subscribe, unsubscribe } from './eventBus.js'

export const useCloseOn = ({ isOpen, callback, event }) => {
  useEffect(() => {
    isOpen && subscribe(event, callback)
    return () => unsubscribe(event, callback)
  }, [isOpen, callback, event])
}

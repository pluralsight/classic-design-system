import React from 'react'
import { canUseEventListeners } from 'exenv'

export type Callback = (evt: TouchEvent | MouseEvent) => void

export default function useOnDocumentClick(handler: Callback) {
  React.useEffect(() => {
    if (!canUseEventListeners) return

    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [handler])
}

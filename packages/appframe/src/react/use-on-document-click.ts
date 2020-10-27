import { useEffect } from 'react'
import { canUseEventListeners } from 'exenv'

export default function useOnDocumentClick(handler) {
  useEffect(() => {
    if (!canUseEventListeners) return

    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [handler])
}

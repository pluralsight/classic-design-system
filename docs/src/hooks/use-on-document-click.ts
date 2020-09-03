import { useEffect } from 'react'
import { canUseEventListeners } from 'exenv'

export default function useOnDocumentClick(
  handler: (evt: MouseEvent) => void
): void {
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

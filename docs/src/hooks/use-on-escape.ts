import { useCallback, useEffect } from 'react'
import { canUseEventListeners } from 'exenv'

const ESCAPE_KEY = 27

export default function useOnEscape(
  handler: (evt: KeyboardEvent) => void
): void {
  const handleKeyDown = useCallback(
    evt => {
      if (evt.keyCode === ESCAPE_KEY) handler(evt)
    },
    [handler]
  )

  useEffect(() => {
    if (!canUseEventListeners) return

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}

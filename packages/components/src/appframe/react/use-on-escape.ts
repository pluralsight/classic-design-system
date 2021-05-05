import { canUseEventListeners } from 'exenv'
import React from 'react'

const ESCAPE_KEY = 27

export default function useOnEscape(handler: (evt: KeyboardEvent) => void) {
  const handleKeyDown = React.useCallback(
    evt => {
      if (evt.keyCode === ESCAPE_KEY) handler(evt)
    },
    [handler]
  )

  React.useEffect(() => {
    if (!canUseEventListeners) return

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}

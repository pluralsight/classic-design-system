import { canUseDOM } from '@pluralsight/ps-design-system-util'
import React from 'react'

const isBrowser = canUseDOM()

export default function useOnDocumentClick(handler) {
  React.useEffect(() => {
    if (!isBrowser) return

    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [handler])
}

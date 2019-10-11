import React from 'react'

import { canUseDOM } from './utils.js'

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

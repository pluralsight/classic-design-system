import React from 'react'

import { canUseDOM } from './can-use-dom'

const isBrowser = canUseDOM()

const initialRef = isBrowser && document.createElement('div')

export function usePortal() {
  const ref = React.useRef(initialRef)

  React.useEffect(() => {
    const { current } = ref
    if (!isBrowser || !current) return

    document.body.appendChild(current)

    return () => {
      if (!isBrowser) return

      document.body.removeChild(current)
    }
  }, [])

  return ref
}

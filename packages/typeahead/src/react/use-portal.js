import React from 'react'

import { canUseDOM } from './utils.js'

const isBrowser = canUseDOM()

const initialRef = isBrowser && document.createElement('div')

export default function usePortal() {
  const ref = React.useRef(initialRef)

  React.useEffect(() => {
    if (!isBrowser) return

    const { current } = ref
    document.body.appendChild(current)

    return () => {
      document.body.removeChild(current)
    }
  }, [])

  return ref
}

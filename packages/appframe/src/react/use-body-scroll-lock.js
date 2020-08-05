import { useEffect } from 'react'

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock'

export default function useBodyScrollLock(ref, locked = false) {
  useEffect(() => {
    if (!ref.current) return

    const fn = locked ? disableBodyScroll : enableBodyScroll

    fn(ref.current)
  }, [ref, locked])

  useEffect(() => {
    function onUnmount() {
      clearAllBodyScrollLocks()
    }

    return onUnmount
  }, [])
}

import React from 'react'

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock'

export default function useBodyScrollLock<El extends HTMLElement>(
  ref: React.RefObject<El>,
  locked = false
) {
  React.useEffect(() => {
    if (!ref.current) return

    const fn = locked ? disableBodyScroll : enableBodyScroll

    fn(ref.current)
  }, [ref, locked])

  React.useEffect(() => {
    function onUnmount() {
      clearAllBodyScrollLocks()
    }

    return onUnmount
  }, [])
}

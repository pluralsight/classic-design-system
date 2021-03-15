import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock'
import { RefObject, useEffect } from 'react'

export default function useBodyScrollLock<El extends HTMLElement>(
  ref: RefObject<El>,
  locked = false
) {
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

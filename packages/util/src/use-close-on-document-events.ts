import { MutableRefObject, useEffect } from 'react'
import { canUseDOM } from './can-use-dom'

type Callback = (evt: Event | MouseEvent | UIEvent) => void

export const onGlobalEventsClose = <El extends HTMLElement>(
  el: El,
  callback: Callback
) => {
  if (!canUseDOM()) return

  const handleClickOutsideMenu = (evt: MouseEvent) => {
    if (evt.target instanceof HTMLElement) {
      if (el.contains(evt.target)) return
      callback(evt)
    }
  }

  let currentAnimationFrame: number
  const requestAnimationFrame = (evt: Event | UIEvent) => {
    window.cancelAnimationFrame(currentAnimationFrame)
    currentAnimationFrame = window.requestAnimationFrame(() => callback(evt))
    return currentAnimationFrame
  }

  document.addEventListener('click', handleClickOutsideMenu, { capture: true })

  window.addEventListener('resize', requestAnimationFrame, {
    passive: true,
    capture: true
  })

  document.addEventListener('scroll', requestAnimationFrame, {
    passive: true,
    capture: true
  })

  return () => {
    document.removeEventListener('click', handleClickOutsideMenu)
    window.removeEventListener('resize', requestAnimationFrame)
    window.removeEventListener('scroll', requestAnimationFrame)
  }
}

export const useCloseOnDocumentEvents = <El extends HTMLElement>(
  ref: MutableRefObject<El | null>,
  cb: Callback
) => {
  useEffect(() => {
    if (!canUseDOM()) return

    let removeListeners = noop

    if (ref.current) {
      removeListeners = <typeof noop>onGlobalEventsClose<El>(ref.current, cb)
    }

    return removeListeners
  }, [ref])
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

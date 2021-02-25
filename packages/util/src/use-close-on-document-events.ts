import { MutableRefObject, useEffect } from 'react'
import { canUseDOM } from './can-use-dom'

type Callback = (evt: Event | MouseEvent | UIEvent) => void

export const onGlobalEventsClose = <El extends HTMLElement>(
  el: El,
  callback: Callback
) => {
  if (!canUseDOM()) return noop

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
    document.removeEventListener('click', handleClickOutsideMenu, {
      capture: true
    })
    window.removeEventListener('resize', requestAnimationFrame, {
      capture: true
    })
    window.removeEventListener('scroll', requestAnimationFrame, {
      capture: true
    })
  }
}

export const useCloseOnDocumentEvents = <El extends HTMLElement>(
  ref: MutableRefObject<El | null>,
  cb: Callback = noop
) =>
  useEffect(() => {
    if (!canUseDOM()) return noop
    const el = ref.current
    if (el) {
      return onGlobalEventsClose<El>(el, cb)
    }
    return noop
  }, [ref, cb])

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

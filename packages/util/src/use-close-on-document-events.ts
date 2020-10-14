import { MutableRefObject, useEffect } from 'react'
import { canUseDOM } from '.'

type Callback = (evt: MouseEvent | UIEvent) => void

export const onGlobalEventsClose = <El extends HTMLElement>(
  el: El,
  callback: Callback
) => {
  if (!canUseDOM()) return

  const handleClickOutsideMenu = (evt: MouseEvent) => {
    if (evt.target instanceof HTMLElement) {
      const innerClick = el.contains(evt.target)
      if (!innerClick) return

      callback(evt)
    }
  }

  let currentAnimationFrame: number = null
  const requestAnimationFrame = (evt: UIEvent) => {
    window.cancelAnimationFrame(currentAnimationFrame)
    currentAnimationFrame = window.requestAnimationFrame(() => callback(evt))
    return currentAnimationFrame
  }

  document.addEventListener('click', handleClickOutsideMenu)

  window.addEventListener('resize', requestAnimationFrame, {
    passive: true
  })

  window.addEventListener('scroll', requestAnimationFrame, {
    passive: true
  })

  return () => {
    document.removeEventListener('click', handleClickOutsideMenu)
    window.removeEventListener('resize', requestAnimationFrame)
    window.removeEventListener('scroll', requestAnimationFrame)
  }
}

export const useCloseOnDocumentEvents = <El extends HTMLElement>(
  ref: MutableRefObject<El>,
  callback: Callback
) => {
  useEffect(() => {
    if (!canUseDOM()) return

    let removeListeners = noop

    if (ref.current) {
      removeListeners = onGlobalEventsClose<El>(ref.current, callback)
    }

    return removeListeners
  })
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

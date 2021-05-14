import React from 'react'
import { canUseDOM } from './can-use-dom'

type Callback = (evt: Event | MouseEvent | UIEvent) => void

export const onClickOutside = <El extends HTMLElement>(
  el: El,
  callback: Callback
) => {
  if (!canUseDOM()) return noop

  const handleClick = (evt: MouseEvent) => {
    if (
      evt.target instanceof HTMLElement ||
      evt.target instanceof HTMLDocument
    ) {
      if (el.contains(evt.target)) return
      callback(evt)
    }
  }

  document.addEventListener('click', handleClick, { capture: true })

  return () => {
    document.removeEventListener('click', handleClick, {
      capture: true
    })
  }
}

export const useEventOutside: <El extends HTMLElement>(
  eventHander: (el: El, cb: Callback) => void
) => (
  ref: React.MutableRefObject<El | null>,
  cb: Callback
) => void = eventHandler => (ref, cb = noop) => {
  React.useEffect(() => {
    if (!canUseDOM()) return noop
    const el = ref.current
    if (el) {
      return eventHandler(el, cb)
    }
    return noop
  }, [ref, cb])
}

export const useClickOutside = <El extends HTMLElement>(
  ref: React.MutableRefObject<El | null>,
  cb: Callback = noop
) => useEventOutside(onClickOutside)(ref, cb)

export const onResize = <El extends HTMLElement>(
  el: El,
  callback: Callback
) => {
  if (!canUseDOM()) return noop

  let currentAnimationFrame: number
  const handleResize = (evt: Event | UIEvent) => {
    window.cancelAnimationFrame(currentAnimationFrame)
    currentAnimationFrame = window.requestAnimationFrame(() => callback(evt))
    return currentAnimationFrame
  }

  window.addEventListener('resize', handleResize, {
    passive: true,
    capture: true
  })

  return () => {
    window.removeEventListener('resize', handleResize, {
      capture: true
    })
  }
}

export const useResize = <El extends HTMLElement>(
  ref: React.MutableRefObject<El | null>,
  cb: Callback = noop
) => useEventOutside(onResize)(ref, cb)

export const onScrollOutisde = <El extends HTMLElement>(
  el: El,
  callback: Callback
) => {
  if (!canUseDOM()) return noop

  let currentAnimationFrame: number
  const handleScroll = (evt: Event | UIEvent) => {
    window.cancelAnimationFrame(currentAnimationFrame)
    if (
      evt.target instanceof HTMLElement ||
      evt.target instanceof HTMLDocument
    ) {
      if (el.contains(evt.target)) return
      currentAnimationFrame = window.requestAnimationFrame(() => callback(evt))
    }
    return currentAnimationFrame
  }

  document.addEventListener('scroll', handleScroll, {
    passive: true,
    capture: true
  })

  return () => {
    window.removeEventListener('scroll', handleScroll, {
      capture: true
    })
  }
}

export const useScrollOutside = <El extends HTMLElement>(
  ref: React.MutableRefObject<El | null>,
  cb: Callback = noop
) => useEventOutside(onScrollOutisde)(ref, cb)

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
  ref: React.MutableRefObject<El | null>,
  cb: Callback = noop
) =>
  React.useEffect(() => {
    if (!canUseDOM()) return noop
    const el = ref.current
    if (el) {
      return onGlobalEventsClose<El>(el, cb)
    }
    return noop
  }, [ref, cb])

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

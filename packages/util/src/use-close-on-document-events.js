import { useEffect } from 'react'

export const onGlobalEventsClose = (el, callback) => {
  const handleClickOutsideMenu = e => {
    if (!el.contains(e.target)) {
      callback(e)
    }
  }
  let currentAnimationFrame = null
  const requestAnimationFrame = e => {
    window.cancelAnimationFrame(currentAnimationFrame)
    currentAnimationFrame = window.requestAnimationFrame(() => callback(e))
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

export const useCloseOnDocumentEvents = (ref, callback) =>
  useEffect(() => {
    let removeListeners = () => {}
    if (ref.current) {
      removeListeners = onGlobalEventsClose(ref.current, callback)
    }
    return removeListeners
  })

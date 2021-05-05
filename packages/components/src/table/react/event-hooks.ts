import { canUseDOM } from '../../util'
import React from 'react'

type GenericEventHandler = (evt: Event) => void

export const useOnResize = (onResize: GenericEventHandler) => {
  React.useEffect(() => {
    if (!canUseDOM()) return

    window.addEventListener('resize', onResize, { passive: true })

    return () => window.removeEventListener('resize', onResize)
  }, [onResize])
}

export const useOnScroll = (onScroll: GenericEventHandler) => {
  React.useEffect(() => {
    if (!canUseDOM()) return

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])
}

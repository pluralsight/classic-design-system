import { canUseDOM } from '@pluralsight/ps-design-system-util'
import { useEffect } from 'react'

type GenericEventHandler = (evt: Event) => void

export const useOnResize = (onResize: GenericEventHandler) => {
  useEffect(() => {
    if (!canUseDOM()) return

    window.addEventListener('resize', onResize, { passive: true })

    return () => window.removeEventListener('resize', onResize)
  }, [onResize])
}

export const useOnScroll = (onScroll: GenericEventHandler) => {
  useEffect(() => {
    if (!canUseDOM()) return

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])
}

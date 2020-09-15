import { canUseDOM } from 'exenv'
import { RefObject, useEffect, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import { combineFns, debounce } from '.'

type ObserveHandler = (entries: ResizeObserverEntry[]) => void

export function useResizeObserver(
  ref: RefObject<HTMLElement>,
  onResize: ObserveHandler
) {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const { current: el } = ref
    if (!el || !canUseDOM) return

    let subscribed = true

    const handleResize = combineFns((entries: ResizeObserverEntry[]) => {
      if (!subscribed) return

      const { contentRect } = entries[0]

      setWidth(contentRect.width)
      setHeight(contentRect.height)
    }, onResize)

    const debouncedResize = debounce(150, handleResize)
    const observer = new ResizeObserver(debouncedResize)

    observer.observe(el)

    return () => {
      subscribed = false
      observer.unobserve(el)
    }
  }, [onResize, ref])

  return { width, height }
}

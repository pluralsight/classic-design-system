import exenv from 'exenv'
import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import { combineFns } from './combine-fns'
import { debounce } from './debounce'

const { canUseDOM } = exenv

export function useResizeObserver(
  ref:
    | React.RefObject<HTMLElement>
    | React.MutableRefObject<HTMLElement | undefined>,
  onResize?: ResizeObserverCallback
) {
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
    const { current: el } = ref
    if (!el || !canUseDOM) return

    let subscribed = true

    const handleResize = combineFns(entries => {
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

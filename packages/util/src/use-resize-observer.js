import { canUseDOM } from 'exenv'
import { useEffect, useImperativeHandle, useRef, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import { combineFns } from './combine-fns.js'
import { debounce } from './debounce.js'

export function useResizeObserver(outerRef, onResize) {
  const ref = useRef()
  useImperativeHandle(ref, () => outerRef.current)

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
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

      clearTimeout(debouncedResize)
      observer.unobserve(el)
    }
  }, [onResize, ref])

  return { ref, width, height }
}

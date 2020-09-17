// TODO: copied from emptystate; extract into package after release
import { useEffect, useRef, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

const isBrowser = typeof window !== 'undefined'

export default function useResizeObserver() {
  const ref = useRef()

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    let subscribed = true
    const { current: el } = ref

    function handleResize(entries) {
      if (!subscribed || !isBrowser) return
      const { contentRect } = entries[0]

      setWidth(contentRect.width)
      setHeight(contentRect.height)
    }

    const debouncedResize = debounce(150, handleResize)
    const observer = new ResizeObserver(debouncedResize)

    observer.observe(el)

    return () => {
      subscribed = false
      clearTimeout(debouncedResize)
      observer.unobserve(el)
    }
  }, [])

  return { ref, width, height }
}

function debounce(delay, fn) {
  let timerId

  return function (...args) {
    if (timerId) clearTimeout(timerId)

    timerId = setTimeout(() => {
      fn(...args)
      timerId = null
    }, delay)
  }
}

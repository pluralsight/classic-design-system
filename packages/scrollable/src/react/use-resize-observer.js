import { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export default function useResizeObserver(ref, fn) {
  useEffect(() => {
    const el = ref.current

    const debounced = debounce(fn, 150)
    const observer = new ResizeObserver(debounced)

    observer.observe(el)

    return () => observer.unobserve(el)
  }, [fn, ref])
}

function debounce(delay, fn) {
  let timerId

  return function(...args) {
    if (timerId) clearTimeout(timerId)

    timerId = setTimeout(() => {
      fn(...args)
      timerId = null
    }, delay)
  }
}

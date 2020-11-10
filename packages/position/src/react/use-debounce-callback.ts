import * as React from 'react'

export default function useDebounceCallback(
  fn: (...args: any[]) => void,
  delay = 100
) {
  const timeout = React.useRef<NodeJS.Timeout>()

  const debounced = React.useCallback(
    function callFunctionOnDelay(this: void, ...args: any[]) {
      const later = () => {
        timeout.current = undefined
        fn.apply(this, args)
      }

      if (typeof timeout.current !== 'undefined') clearTimeout(timeout.current)
      timeout.current = setTimeout(later, delay)
    },
    [fn, delay]
  )

  React.useEffect(
    () => () => {
      if (!timeout.current) return
      clearTimeout(timeout.current)
      timeout.current = undefined
    },
    [fn, delay]
  )

  return debounced
}

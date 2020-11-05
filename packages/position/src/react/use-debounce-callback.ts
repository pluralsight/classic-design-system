import * as React from 'react'

export default function useDebounceCallback(fn, delay = 100) {
  const timeout = React.useRef(null)

  const debounced = React.useCallback(
    function () {
      const self = this
      const args = arguments

      function later() {
        timeout.current = null
        fn.apply(self, args)
      }

      clearTimeout(timeout.current)
      timeout.current = setTimeout(later, delay)
    },
    [fn, delay]
  )

  React.useEffect(
    () => () => {
      if (!timeout.current) return
      clearTimeout(timeout.current)
      timeout.current = null
    },
    [fn, delay]
  )

  return debounced
}

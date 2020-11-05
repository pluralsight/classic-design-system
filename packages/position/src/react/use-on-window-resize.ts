import * as React from 'react'

import useDebounceCallback from './use-debounce-callback'

export default function useOnWindowResize(handler) {
  const handleScroll = useDebounceCallback(handler, 10)

  React.useEffect(
    function bindResizeEvent() {
      window.addEventListener('resize', handleScroll)

      return function unbind() {
        window.removeEventListener('resize', handleScroll)
      }
    },
    [handleScroll]
  )
}

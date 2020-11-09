import * as React from 'react'

import useDebounceCallback from './use-debounce-callback'

export default function useOnWindowScroll(handler: (evt: Event) => void) {
  const handleScroll = useDebounceCallback(handler, 10)

  React.useEffect(
    function bindScrollEvent() {
      window.addEventListener('scroll', handleScroll, true)

      return function unbind() {
        window.removeEventListener('scroll', handleScroll)
      }
    },
    [handleScroll]
  )
}

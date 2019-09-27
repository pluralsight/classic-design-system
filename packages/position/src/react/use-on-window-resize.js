import React from 'react'

import useDebounceCallback from './use-debounce-callback.js'

export default function useOnWindowResize(handler) {
  const handleScroll = useDebounceCallback(handler, 10)

  React.useEffect(() => {
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('resize', handleScroll)
    }
  }, [handleScroll])
}

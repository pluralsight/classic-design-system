import { useEffect, useRef } from 'react'

export function useHasMounted(): boolean {
  const ref = useRef(false)

  useEffect(() => {
    ref.current = true

    function reset() {
      ref.current = false
    }

    return reset()
  }, [])

  return ref.current
}

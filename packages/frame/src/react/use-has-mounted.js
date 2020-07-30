import { useEffect, useRef } from 'react'

export default function useHasMounted() {
  const ref = useRef(false)

  useEffect(() => {
    ref.current = true

    function reset() {
      ref.current = false
    }

    reset()
  }, [])

  return ref.current
}

import { useEffect, useRef } from 'react'

export default function useHasMounted(): boolean {
  const ref = useRef<boolean>(false)

  useEffect(() => {
    ref.current = true

    function reset() {
      ref.current = false
    }

    return reset()
  }, [])

  return ref.current
}

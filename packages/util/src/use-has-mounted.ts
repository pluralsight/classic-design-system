import React from 'react'

export function useHasMounted(): boolean {
  const ref = React.useRef(false)

  React.useEffect(() => {
    ref.current = true

    function reset() {
      ref.current = false
    }

    return reset()
  }, [])

  return ref.current
}

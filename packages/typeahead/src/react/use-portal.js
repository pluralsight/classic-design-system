import React from 'react'

export default function usePortal() {
  const ref = React.useRef(document.createElement('div'))

  React.useEffect(() => {
    const { current } = ref
    document.body.appendChild(current)

    return () => {
      document.body.removeChild(current)
    }
  }, [])

  return ref
}

import { useEffect } from 'react'

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (ref.current && ref.current.contains(event.target)) return

      handler(event)
    }

    document.addEventListener('click', listener)

    return () => {
      document.removeEventListener('click', listener)
    }
  }, [handler, ref])
}

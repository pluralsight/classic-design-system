import { useEffect } from 'react'

export default function useOnKeyUp(targetKey, handler) {
  useEffect(() => {
    const onKeyUp = evt => {
      if (evt.key === targetKey) handler()
    }

    window.addEventListener('keyup', onKeyUp)

    return () => {
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [targetKey, handler])
}

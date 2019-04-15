import { useEffect } from 'react'

export default function useOnKeyUp(targetKey, handler) {
  const onKeyUp = evt => {
    if (evt.key === targetKey) handler()
  }

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp)

    return () => {
      window.removeEventListener('keyup', onKeyUp)
    }
  })
}

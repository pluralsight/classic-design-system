import { canUseDOM } from '@pluralsight/ps-design-system-util'
import { useEffect } from 'react'

const isBrowser = canUseDOM()

type Callback = (evt: Event | MouseEvent | UIEvent) => void

export default function useOnDocumentClick(handler: Callback) {
  useEffect(() => {
    if (!isBrowser) return

    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [handler])
}

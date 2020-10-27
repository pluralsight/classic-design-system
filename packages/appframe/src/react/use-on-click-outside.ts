import { useCallback } from 'react'
import useOnDocumentClick from './use-on-document-click.js'

export default function useOnClickOutside(ref, handler) {
  const handleClick = useCallback(
    evt => {
      const isInner = ref.current && ref.current.contains(evt.target)
      if (!isInner) handler(evt)
    },
    [ref, handler]
  )

  useOnDocumentClick(handleClick)
}

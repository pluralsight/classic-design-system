import { RefObject, useCallback } from 'react'
import useOnDocumentClick, { Callback } from './use-on-document-click'

export default function useOnClickOutside<El extends HTMLElement>(
  ref: RefObject<El>,
  handler: Callback
) {
  const handleClick = useCallback<Callback>(
    evt => {
      const target = evt.target as HTMLElement
      const isInner = ref.current && ref.current.contains(target)
      if (!isInner) handler(evt)
    },
    [ref, handler]
  )

  useOnDocumentClick(handleClick)
}

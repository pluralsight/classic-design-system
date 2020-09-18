import { RefObject, useCallback } from 'react'
import useOnDocumentClick from './use-on-document-click'

export default function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (evt: MouseEvent) => void
): void {
  const handleClick = useCallback(
    evt => {
      const isInner = ref.current && ref.current.contains(evt.target)
      if (!isInner) handler(evt)
    },
    [ref, handler]
  )

  useOnDocumentClick(handleClick)
}

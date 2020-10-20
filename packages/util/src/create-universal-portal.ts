import { ReactNode, ReactPortal } from 'react'
import { createPortal } from 'react-dom'

import { canUseDOM } from '.'

export function createUniversalPortal(
  children: ReactNode,
  container: Element,
  key?: string
): ReactPortal | undefined {
  if (!canUseDOM()) return

  return createPortal(children, container, key)
}

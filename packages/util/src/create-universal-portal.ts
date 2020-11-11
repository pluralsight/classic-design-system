import { ReactNode, ReactPortal } from 'react'
import { createPortal } from 'react-dom'

import { canUseDOM } from './can-use-dom'

export function createUniversalPortal(
  children: ReactNode,
  container: Element | undefined,
  key?: string
): ReactPortal | undefined {
  if (!canUseDOM() || !container) return

  return createPortal(children, container, key)
}

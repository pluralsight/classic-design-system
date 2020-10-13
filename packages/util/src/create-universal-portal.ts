import { ReactNode, ReactPortal } from 'react'
import { createPortal } from 'react-dom'

import { canUseDOM } from '.'

export function createUniversalPortal(
  children: ReactNode,
  container: Element,
  key?: null | string
): ReactPortal {
  if (!canUseDOM()) return null

  return createPortal(children, container, key)
}

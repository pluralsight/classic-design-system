import { canUseDOM } from 'exenv'
import { createPortal } from 'react-dom'

export function createUniversalPortal() {
  if (!canUseDOM) return null
  return createPortal(...arguments)
}

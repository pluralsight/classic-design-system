import { type } from '@pluralsight/ps-design-system-core'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import React, { useEffect, useRef, useCallback } from 'react'
import shave from 'shave'

interface ShaveProps extends HTMLPropsFor<'div'> {
  children: string
  character?: string
  lineHeight?: number
  lines?: number
}

const Shave: React.FC<ShaveProps> = props => {
  const {
    children,
    character = '&hellip;',
    lineHeight = parseInt(type.lineHeightStandard, 10),
    lines = 3,
    ...rest
  } = props

  const ref = useRef<HTMLDivElement>(null)

  const reset = useCallback(() => {
    if (!ref.current) return

    ref.current.innerHTML = children
  }, [children])

  const truncate = useCallback(() => {
    if (!ref.current) return

    const maxHeight = lineHeight * lines
    shave(ref.current, maxHeight, { character })
  }, [lineHeight, lines, character])

  useEffect(() => {
    reset()
  }, [reset])

  useEffect(() => {
    window.addEventListener('resize', truncate)
    truncate()

    return () => {
      window.removeEventListener('resize', truncate)
    }
  }, [truncate])

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  )
}

export default Shave

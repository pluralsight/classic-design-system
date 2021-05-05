import { type } from '../../core'
import { HTMLPropsFor } from '../../util'
import React from 'react'
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

  const ref = React.useRef<HTMLDivElement>(null)

  const reset = React.useCallback(() => {
    if (!ref.current) return

    ref.current.innerHTML = children
  }, [children])

  const truncate = React.useCallback(() => {
    if (!ref.current) return

    const maxHeight = lineHeight * lines
    shave(ref.current, maxHeight, { character })
  }, [lineHeight, lines, character])

  React.useEffect(() => {
    reset()
  }, [reset])

  React.useEffect(() => {
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

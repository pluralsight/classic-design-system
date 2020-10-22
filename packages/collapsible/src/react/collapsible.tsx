import React, { HTMLAttributes } from 'react'

import { useCollapsible } from './use-collapsible'

interface CollapsibleProps extends HTMLAttributes<HTMLElement> {
  isOpen?: boolean
  tagName?: React.ElementType | keyof JSX.IntrinsicElements
}
const Collapsible: React.FC<CollapsibleProps> = props => {
  const { isOpen = false, tagName: Tag = 'div', ...rest } = props

  const { ref, ...collapsibleProps } = useCollapsible(isOpen)

  return <Tag ref={ref} {...rest} {...collapsibleProps} />
}

export default Collapsible

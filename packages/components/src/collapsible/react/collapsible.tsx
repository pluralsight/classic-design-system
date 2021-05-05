import React from 'react'

import { useCollapsible } from './use-collapsible'

interface CollapsibleProps extends React.HTMLAttributes<HTMLElement> {
  isOpen?: boolean
  tagName?: React.ElementType | keyof JSX.IntrinsicElements
}
export const Collapsible: React.FC<CollapsibleProps> = props => {
  const { isOpen = false, tagName: Tag = 'div', ...rest } = props

  const { ref, ...collapsibleProps } = useCollapsible(isOpen)

  return <Tag ref={ref} {...rest} {...collapsibleProps} />
}

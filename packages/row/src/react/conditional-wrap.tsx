import React from 'react'

interface ConditionalWrapProps {
  shouldWrap: boolean
  wrapper: (children: React.ReactNode) => JSX.Element | null
}
const ConditionalWrap: React.FC<ConditionalWrapProps> = props => {
  const { children, shouldWrap, wrapper } = props

  return shouldWrap ? wrapper(children) : <>{children}</>
}

export default ConditionalWrap

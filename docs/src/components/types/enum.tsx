import React from 'react'

interface EnumProps {
  enum: Record<string, unknown>
}
export const Enum: React.FC<EnumProps> = props => {
  return <div>{Object.keys(props.enum).join(' | ')}</div>
}

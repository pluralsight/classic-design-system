import React from 'react'

/* import * as styles from './enum.module.css' */

interface EnumProps {
  enum: Recrod<string, unknown>
}
export const Enum: React.FC<EnumProps> = (props) => {
  return <div>{Object.keys(props.enum).join(' | ')}</div>
}

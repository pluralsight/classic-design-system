import { HTMLPropsFor } from '../../util'
import React from 'react'

export interface PanelProps extends HTMLPropsFor<'div'> {
  labelledBy: string | number
}
const Panel: React.FC<PanelProps> = props => {
  const { labelledBy, ...rest } = props
  return <div role="tabpanel" aria-labelledby={String(labelledBy)} {...rest} />
}
export default Panel

import React, { HTMLAttributes, FC } from 'react'

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  labelledBy: string | number
}
const Panel: FC<PanelProps> = props => {
  const { labelledBy, ...rest } = props
  return <div role="tabpanel" aria-labelledby={String(labelledBy)} {...rest} />
}
export default Panel

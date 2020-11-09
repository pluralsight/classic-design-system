import * as React from 'react'

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  labelledBy: string | number
}
const Panel: React.FC<PanelProps> = props => {
  const { labelledBy, ...rest } = props
  return <div role="tabpanel" aria-labelledby={String(labelledBy)} {...rest} />
}
export default Panel

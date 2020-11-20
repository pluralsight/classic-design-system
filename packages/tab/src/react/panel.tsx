import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import React, { FC } from 'react'

export interface PanelProps extends HTMLPropsFor<'div'> {
  labelledBy: string | number
}
const Panel: FC<PanelProps> = props => {
  const { labelledBy, ...rest } = props
  return <div role="tabpanel" aria-labelledby={String(labelledBy)} {...rest} />
}
export default Panel

import React from 'react'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'

const ListItem: React.FC<HTMLPropsFor<'li'>> = props => (
  <li {...props}>{props.children}</li>
)

export default ListItem

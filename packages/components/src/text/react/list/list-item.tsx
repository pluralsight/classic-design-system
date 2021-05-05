import React from 'react'
import { HTMLPropsFor } from '../../../util'

const ListItem: React.FC<HTMLPropsFor<'li'>> = props => (
  <li {...props}>{props.children}</li>
)

export default ListItem

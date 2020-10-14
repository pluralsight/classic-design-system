import React, { HTMLAttributes } from 'react'

const ListItem: React.FC<HTMLAttributes<HTMLLIElement>> = props => (
  <li {...props}>{props.children}</li>
)

export default ListItem

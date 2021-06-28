import React from 'react'

const ListItem: React.FC<React.HTMLAttributes<HTMLLIElement>> = props => (
  <li {...props}>{props.children}</li>
)

export default ListItem

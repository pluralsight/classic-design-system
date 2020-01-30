import React from 'react'
import PropTypes from 'prop-types'

const ListItem = props => <li {...props}>{props.children}</li>
ListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}
export default ListItem

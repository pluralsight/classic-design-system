import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import React from 'react'

const linkStyles = glamor.css({
  color: core.colors.orange,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  }
})

export default props =>
  React.cloneElement(React.Children.only(props.children), linkStyles)

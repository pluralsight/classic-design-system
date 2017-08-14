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

const rmChildren = props => {
  const { children, ...rest } = props
  return rest
}

export default props =>
  React.cloneElement(React.Children.only(props.children), {
    ...linkStyles,
    ...rmChildren(props)
  })

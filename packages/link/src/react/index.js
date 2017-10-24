import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

export const appearances = { subtle: 'subtle' }

const style = props =>
  glamor.css({
    ':hover': {
      color: core.colors.orange,
      textDecoration: 'underline'
    },
    ...(({ appearance }) =>
      appearance === appearances.subtle
        ? {
            color: 'currentColor',
            textDecoration: 'underline'
          }
        : {
            color: core.colors.orange,
            textDecoration: 'none'
          })(props)
  })

const rmChildren = props => {
  const { children, ...rest } = props
  return rest
}

const Link = props =>
  React.cloneElement(React.Children.only(props.children), {
    ...style(props),
    ...rmChildren(props)
  })

Link.appearances = appearances

Link.propTypes = {
  appearances: PropTypes.oneOf(Object.keys(appearances))
}

export default Link

import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

export const appearances = { default: 'default', subtle: 'subtle' }

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

const rmNonHtmlProps = props => {
  const { appearance, children, ...rest } = props
  return rest
}

const Link = props =>
  React.cloneElement(React.Children.only(props.children), {
    ...style(props),
    ...rmNonHtmlProps(props)
  })

Link.appearances = appearances

Link.propTypes = {
  appearances: PropTypes.oneOf(Object.keys(appearances))
}
Link.defaultProps = {
  appearance: appearances.default
}

export default Link

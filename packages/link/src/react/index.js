import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css'
import * as vars from '../vars'

const style = props =>
  glamor.css({
    ':hover': css['.psds-link:hover'],
    ...(({ appearance }) => css[`.psds-link--appearance-${appearance}`])(props)
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

Link.appearances = vars.appearances

Link.propTypes = {
  appearances: PropTypes.oneOf(Object.keys(vars.appearances))
}
Link.defaultProps = {
  appearance: vars.appearances.default
}

export const appearances = vars.appearances

export default Link

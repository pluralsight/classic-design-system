import PropTypes from 'prop-types'
import React from 'react'

const ConditionalWrap = ({ shouldWrap, children, wrapper }) =>
  shouldWrap ? wrapper(children) : <React.Fragment>{children}</React.Fragment>

ConditionalWrap.propTypes = {
  shouldWrap: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  wrapper: PropTypes.func.isRequired
}
export default ConditionalWrap

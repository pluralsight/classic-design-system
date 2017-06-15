import React from 'react'
import styleable from 'react-styleable'

export const propDefs = {
  labelledBy: {
    type: 'string',
    required: true
  }
}

const rmSystemProps = props => {
  const { css, ...rest } = props
  return rest
}

const Panel = props =>
  <div role="tabpanel" aria-labelledby={props.label} {...rmSystemProps(props)}>
    {props.children}
  </div>

import PropTypes from 'prop-types'
Panel.propTypes = {
  labelledBy: PropTypes.string.isRequired
}

export default styleable()(Panel)

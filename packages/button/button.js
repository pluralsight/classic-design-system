// TODO: resolve dependency once site is run as a lerna package
// import { capitalize } from '@pluralsight/ds-util'
import PropTypes from 'prop-types'
import styleable from 'react-styleable'
import React from 'react'

import css from './button.css'

const getClassName = props => {
  // TODO: handle sizes here
  return 'root'
}

const Button = props => (
  <button className={getClassName(props)} {...props}>
    {props.children}
  </button>
)

Button.propTypes = {
  size: PropTypes.string
}

export default styleable(css)(Button)

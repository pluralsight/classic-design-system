import React from 'react'
import styleable from 'react-styleable'

import css from './index.module.css'

const rmSystemProps = props => {
  const { css, ...rest } = props
  return rest
}

export default styleable(css)(props => (
  <a className={props.css.root} {...rmSystemProps(props)}>
    {props.children}
  </a>
))

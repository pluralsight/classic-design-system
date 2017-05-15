import React from 'react'
import styleable from 'react-styleable'

import css from './xxl.css'

export default styleable(css)(props => (
  <h1 className={props.css.root}>
    {props.children}
  </h1>
))

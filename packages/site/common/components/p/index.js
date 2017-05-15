import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'

export default styleable(css)(props => (
  <p className={props.css.root}>
    {props.children}
  </p>
))

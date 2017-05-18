import React from 'react'
import styleable from 'react-styleable'

import css from './group-title.css'

export default styleable(css)(props => (
  <h3 className={props.css.root}>
    {props.children}
  </h3>
))

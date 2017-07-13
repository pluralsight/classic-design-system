import React from 'react'
import styleable from 'react-styleable'

import css from './palette.module.css'

export default styleable(css)(props =>
  <div className={props.css.root}>
    {props.children}
  </div>
)

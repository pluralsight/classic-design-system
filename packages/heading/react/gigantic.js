import React from 'react'
import styleable from 'react-styleable'

import css from '../css/gigantic.module.css'

export default styleable(css)(props =>
  <h2 className={props.css.root}>
    {props.children}
  </h2>
)

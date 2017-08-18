import React from 'react'
import styleable from 'react-styleable'

import css from './index.module.css'

export default styleable(css)(props =>
  <div className={props.css.content}>
    {props.children}
  </div>
)

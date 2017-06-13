import React from 'react'
import styleable from 'react-styleable'

import css from './font-family.module.css'

export default styleable(css)(props =>
  <div className={props.css.root}>
    <div className={props.css.line}>
      ABCDEFGHIJKLMNOPQRSTUVWXYZ
    </div>
    <div className={props.css.line}>
      abcdefghijklmnopqrstuvwxyz
    </div>
    <div className={props.css.line}>
      0123456789
    </div>

  </div>
)

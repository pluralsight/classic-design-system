import React from 'react'
import styleable from 'react-styleable'

import css from '../css/list.module.css'

export default styleable(css)(props =>
  <div className={props.css['ps-tab-list']}>{props.children}</div>
)

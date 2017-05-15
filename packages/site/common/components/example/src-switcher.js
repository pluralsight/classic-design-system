import React from 'react'
import styleable from 'react-styleable'

import css from './src-switcher.css'

export default styleable(css)(props => (
  <div className={props.css.root}>
    HTML | React
  </div>
))

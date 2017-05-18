import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'
import Logo from './logo'

export default styleable(css)(props => (
  <nav className={props.css.root}>
    <Logo />

  </nav>
))

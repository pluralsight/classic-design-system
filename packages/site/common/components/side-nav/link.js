import { Link } from 'react-router-dom'
import React from 'react'
import styleable from 'react-styleable'

import css from './link.css'

export default styleable(css)(props => (
  <div className={props.css.root}>
    <Link to={props.href} className={props.css.link}>
      {props.children}
    </Link>
  </div>
))

import { NavLink } from 'react-router-dom'
import React from 'react'
import styleable from 'react-styleable'

import css from './link.module.css'

export default styleable(css)(props =>
  <div className={props.css.root}>
    <NavLink
      activeClassName={props.css.linkActive}
      to={props.href}
      className={props.css.link}
    >
      <span aria-hidden="true" className={props.css.box} />
      {props.children}
    </NavLink>
  </div>
)

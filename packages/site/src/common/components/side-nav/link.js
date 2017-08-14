import React from 'react'
import styleable from 'react-styleable'

import css from './link.module.css'
import Link from '../link'

export default styleable(css)(props =>
  <div className={props.css.root}>
    <Link
      activeClassName={props.css.linkActive}
      exact
      href={props.href}
      className={props.css.link}
    >
      <span aria-hidden="true" className={props.css.box} />
      {props.children}
    </Link>
  </div>
)

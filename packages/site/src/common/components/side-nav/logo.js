import { Link } from 'react-router-dom'
import React from 'react'
import styleable from 'react-styleable'

import css from './logo.module.css'

const version = '1.0.0' // TODO: make read package.json

export default styleable(css)(props =>
  <Link to="/" className={props.css.root}>
    <div className={props.css.img} />
    <h2 className={props.css.text}>
      <span className={props.css.textCompany}>PLURALSIGHT</span>
      <span className={props.css.textTitle}>
        DESIGN SYSTEM v{version}
      </span>
    </h2>
  </Link>
)

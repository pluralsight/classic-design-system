import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'

const version = '1.0.0' // TODO: make read package.json

export default styleable(css)(props => (
  <nav className={props.css.root}>
    <div className={props.css.logo}>
      <div className={props.css.logoImg} />
      <h2 className={props.css.logoText}>
        <span className={props.css.logoTextCompany}>PLURALSIGHT</span>
        <span className={props.css.logoTextTitle}>
          DESIGN SYSTEM v{version}
        </span>

      </h2>

    </div>

  </nav>
))

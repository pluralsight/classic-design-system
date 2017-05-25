import React from 'react'
import styleable from 'react-styleable'

import css from './index.module.css'

import logo from '../svg/logo.icon.svg'

const ids = {
  logo
}

export default styleable(css)(props => (
  <span className={props.css.root}>
    {React.createElement(ids[props.id], { css: props.css })}
  </span>
))

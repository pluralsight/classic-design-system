import styleable from 'react-styleable'
import React from 'react'

import css from './button.css'

const Button = props => (
  <button className={props.css['root']}>
    <span className={props.css['icon']}>ICON&nbsp;</span>
    {props.children}
  </button>
)

export default styleable(css)(Button)

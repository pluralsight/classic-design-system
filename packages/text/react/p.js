import classNames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'

import css from '../css/p.module.css'

const getClassName = props =>
  classNames({
    [props.className]: props.className,
    [props.css['ps-p']]: true
  })

export default styleable(css)(props =>
  <p className={getClassName(props)}>
    {props.children}
  </p>
)

import classNames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'

import css from '../../css/list-item.module.css'

const getClassName = props =>
  classNames({
    [props.css['ps-list-item']]: true,
    [props.className]: props.className
  })

const rmSystemProps = props => {
  const { css, ...rest } = props
  return rest
}

export default styleable(css)(props =>
  <li {...rmSystemProps(props)} className={getClassName(props)}>
    {props.children}
  </li>
)

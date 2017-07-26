import classNames from 'classnames'
import { Heading } from '@pluralsight/ps-design-system-text/react'
import React from 'react'
import styleable from 'react-styleable'

import css from './index.module.css'

const rmSystemProps = props => {
  const { css, ...rest } = props
  return rest
}

const formatClassName = props =>
  classNames({
    [props.css.heading]: true,
    [props.css['heading--' + props.size]]: props.size,
    [props.className]: props.className
  })

export default styleable(css)(props =>
  <Heading {...rmSystemProps(props)} className={formatClassName(props)}>
    {props.children}
  </Heading>
)

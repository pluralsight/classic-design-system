import classNames from 'classnames'
import styleable from 'react-styleable'
import React from 'react'

import css from '../css/index.module.css'

const getClassName = props =>
  classNames({
    [props.css['ps-card']]: true,
    [props.className]: props.className
  })

const rmSystemProps = props => {
  const { css, ...rest } = props
  return rest
}

export const Card = props => {
  return (
    <div {...rmSystemProps(props)}>
      I am card.
      {props.children}
    </div>
  )
}

import PropTypes from 'prop-types'
Card.propTypes = {}
Card.defaultProps = {}

export default styleable(css)(Card)

import classNames from 'classnames'
import styleable from 'react-styleable'
import React from 'react'

import css from '../css/index.module.css'

const getClassName = props =>
  classNames({
    [props.css['ps-card']]: true,
    [props.css['ps-card--' + props.size]]: props.size,
    [props.className]: props.className
  })

const rmSystemProps = props => {
  const { css, size, ...rest } = props
  return rest
}

export const Card = props => {
  return (
    <div {...rmSystemProps(props)} className={getClassName(props)}>
      <div className={props.css['ps-card__image-frame']}>
        IMG
      </div>
      I am card.
      {props.children}
    </div>
  )
}

import PropTypes from 'prop-types'
Card.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}
Card.defaultProps = {
  size: 'medium'
}

export default styleable(css)(Card)

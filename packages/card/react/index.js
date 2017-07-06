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
  const { css, image, size, ...rest } = props
  return rest
}

const formatImageClassName = props =>
  props.image.props.className
    ? `${props.image.props.className} ${props.css['ps-card__image']}`
    : props.css['ps-card__image']

const renderImage = props =>
  props.image
    ? React.cloneElement(props.image, {
        className: formatImageClassName(props)
      })
    : null

export const Card = props => {
  return (
    <div {...rmSystemProps(props)} className={getClassName(props)}>
      <div className={props.css['ps-card__image-frame']}>
        {renderImage(props)}
      </div>
      I am card.
      {props.children}
    </div>
  )
}

import PropTypes from 'prop-types'
Card.propTypes = {
  image: PropTypes.element,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}
Card.defaultProps = {
  size: 'medium'
}

export default styleable(css)(Card)

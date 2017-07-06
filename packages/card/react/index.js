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
  const {
    css,
    image,
    metadata1,
    metadata2,
    progress,
    size,
    title,
    ...rest
  } = props
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

const percent = num => {
  try {
    return parseFloat(num) * 100 + '%'
  } catch (_) {
    return '0%'
  }
}

// TODO: a11y
const renderProgress = props =>
  props.progress
    ? <div className={props.css['ps-card__progress']}>
        <div
          className={props.css['ps-card__progress__bar']}
          style={{ width: percent(props.progress) }}
        />
      </div>
    : null

const renderMetaData = (props, metadata) =>
  metadata
    ? <div className={props.css['ps-card__metadata']}>
        {metadata.map((m, i) => [
          <span>{m}</span>,
          i < metadata.length - 1 &&
            <span className={props.css['ps-card__metadata__dot']} />
        ])}
      </div>
    : null

export const Card = props => {
  return (
    <div {...rmSystemProps(props)} className={getClassName(props)}>
      <div className={props.css['ps-card__image-frame']}>
        {renderImage(props)}
      </div>
      {renderProgress(props)}
      <div className={props.css['ps-card__title']}>{props.title}</div>
      {renderMetaData(props, props.metadata1)}
      {renderMetaData(props, props.metadata2)}
    </div>
  )
}

import PropTypes from 'prop-types'
Card.propTypes = {
  image: PropTypes.element.isRequired,
  metadata1: PropTypes.arrayOf(PropTypes.string),
  metadata2: PropTypes.arrayOf(PropTypes.string),
  progress: PropTypes.number,
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}
Card.defaultProps = {
  size: 'medium'
}

export default styleable(css)(Card)

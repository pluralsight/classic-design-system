import classNames from 'classnames'
import styleable from 'react-styleable'
import React from 'react'
import Shiitake from 'shiitake'

import css from '../css/index.module.css'

const getClassName = props =>
  classNames({
    [props.css['ps-card']]: true,
    [props.css['ps-card--' + props.size]]: props.size,
    [props.className]: props.className
  })

const rmSystemProps = props => {
  const {
    actionBar,
    css,
    image,
    metadata1,
    metadata2,
    progress,
    size,
    tag,
    title,
    ...rest
  } = props
  return rest
}

// TODO: use className instead
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
    return parseFloat(num).toFixed() + '%'
  } catch (_) {
    return '0%'
  }
}

const renderProgress = props =>
  props.progress
    ? <div className={props.css['ps-card__progress']}>
        <div
          aria-label={`${percent(props.progress)} complete`}
          className={props.css['ps-card__progress__bar']}
          style={{ width: percent(props.progress) }}
        />
      </div>
    : null

// TODO: fix when node (not string) shiitake warning
const renderTitle = props =>
  <Shiitake lines={2} className={props.css['ps-card__title']}>
    {props.title}
  </Shiitake>

const renderMetaData = (props, metadata) =>
  metadata
    ? <div className={props.css['ps-card__metadata']}>
        {metadata.map((m, i) => [
          <span
            key={`datum${i}`}
            className={props.css['ps-card__metadata__datum']}
          >
            {m}
          </span>,
          i < metadata.length - 1 &&
            <span
              key={`dot${i}`}
              className={props.css['ps-card__metadata__dot']}
            />
        ])}
      </div>
    : null

const renderActionBar = props =>
  Array.isArray(props.actionBar) && props.actionBar.length > 0
    ? <div className={props.css['ps-card__action-bar']}>
        {React.Children.map(props.actionBar, (action, i) =>
          React.cloneElement(action, {
            css: {
              'ps-icon__fg--fill': props.css['ps-icon__fg--fill'],
              'ps-icon__fg--stroke': props.css['ps-icon__fg--stroke']
            },
            key: i,
            size: 'small'
          })
        )}
      </div>
    : null

const renderTag = props =>
  props.tag
    ? <div className={props.css['ps-card__tag']}>
        {React.Children.map(props.tag, (part, i) => {
          return React.cloneElement(part, {
            css: {
              'ps-icon__fg--fill': props.css['ps-icon__fg--fill'],
              'ps-icon__fg--stroke': props.css['ps-icon__fg--stroke']
            },
            className: classNames({
              [part.props.className]: part.props.className,
              [props.css['ps-card__tag__part']]: true
            }),
            key: i
          })
        })}
      </div>
    : null

const renderFullOverlay = props =>
  props.fullOverlay
    ? <div className={props.css['ps-card__full-overlay']}>
        {props.fullOverlay}
      </div>
    : null

export const Card = props => {
  return (
    <div {...rmSystemProps(props)} className={getClassName(props)}>
      <div className={props.css['ps-card__image-frame']}>
        {renderImage(props)}
        {renderActionBar(props)}
        {renderFullOverlay(props)}
        {renderTag(props)}
      </div>
      {renderProgress(props)}
      {renderTitle(props)}
      {renderMetaData(props, props.metadata1)}
      {renderMetaData(props, props.metadata2)}
    </div>
  )
}

import PropTypes from 'prop-types'
Card.propTypes = {
  actionBar: PropTypes.arrayOf(PropTypes.node),
  fullOverlay: PropTypes.element,
  image: PropTypes.element.isRequired,
  metadata1: PropTypes.arrayOf(PropTypes.node),
  metadata2: PropTypes.arrayOf(PropTypes.node),
  progress: PropTypes.number,
  tag: PropTypes.arrayOf(PropTypes.element),
  title: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}
Card.defaultProps = {
  size: 'medium'
}

export default styleable(css)(Card)

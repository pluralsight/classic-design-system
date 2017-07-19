import classNames from 'classnames'
import styleable from 'react-styleable'
import React from 'react'
import Shiitake from 'shiitake'

import css from '../css/index.module.css'

const getClassName = props =>
  classNames({
    [props.css['ps-card']]: true,
    [props.css['ps-card--' + props.size]]: props.size,
    [props.css['ps-card--full-overlay']]: props.fullOverlay,
    [props.css['ps-card--action-bar-visible']]: props.actionBarVisible,
    [props.css['ps-card--full-overlay-visible']]: props.fullOverlayVisible,
    [props.className]: props.className
  })

const rmSystemProps = props => {
  const {
    actionBar,
    actionBarVisible,
    bonusBar,
    css,
    fullOverlay,
    fullOverlayVisible,
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
    return Math.min(parseFloat(num).toFixed(), 100) + '%'
  } catch (_) {
    return '0%'
  }
}

const getProgressBarClassName = props =>
  classNames({
    [props.css['ps-card__progress__bar']]: true,
    [props.css['ps-card__progress__bar--completed']]:
      percent(props.progress) === '100%'
  })

const renderProgress = props =>
  props.progress
    ? <div className={props.css['ps-card__progress']}>
        <div
          aria-label={`${percent(props.progress)} complete`}
          className={getProgressBarClassName(props)}
          style={{ width: percent(props.progress) }}
        />
      </div>
    : null

const getTitleLinkClassName = props =>
  classNames({
    [props.title.className]: props.title.className,
    [props.css['ps-card__title--link']]: true
  })

const isReactElement = el => el && el.type

const renderTitle = props =>
  isReactElement(props.title)
    ? React.cloneElement(props.title, {
        className: getTitleLinkClassName(props),
        children: (
          <Shiitake lines={2}>
            {props.title.props.children}
          </Shiitake>
        )
      })
    : <Shiitake lines={2} className={props.css['ps-card__title']}>
        {props.title}
      </Shiitake>

const getMetaDataLinkClassName = (props, el) =>
  classNames({
    [el.className]: el.className,
    [props.css['ps-card__metadata__datum--link']]: true
  })

const renderMetaData = (props, metadata) =>
  metadata
    ? <div className={props.css['ps-card__metadata']}>
        {metadata.map((m, i) => [
          isReactElement(m)
            ? React.cloneElement(m, {
                className: getMetaDataLinkClassName(props, m)
              })
            : <span
                key={`datum${i}`}
                className={props.css['ps-card__metadata__datum']}
              >
                {m}
              </span>,
          i < metadata.length - 1 &&
            <span
              aria-hidden={true}
              key={`dot${i}`}
              className={props.css['ps-card__metadata__dot']}
            >
              ·
            </span>
        ])}
      </div>
    : null

const renderActionBar = props =>
  Array.isArray(props.actionBar) && props.actionBar.length > 0
    ? <div className={props.css['ps-card__action-bar']}>
        {React.Children.map(props.actionBar, (action, i) =>
          <div className={props.css['ps-card__action-bar__action']}>
            {React.cloneElement(action, {
              css: {
                compose: {
                  'ps-button--flat': props.css['ps-button--flat--action-bar']
                },
                'ps-icon__fg--fill': props.css['ps-icon__fg--fill--action-bar'],
                'ps-icon__fg--stroke':
                  props.css['ps-icon__fg--stroke--action-bar']
              },
              key: i,
              size: 'small'
            })}
          </div>
        )}
      </div>
    : null

const isNativeElement = el => el && typeof el.type === 'string'

const renderTag = props =>
  props.tag && props.size !== 'small'
    ? <div className={props.css['ps-card__tag']}>
        {React.Children.map(props.tag, (part, i) => {
          const elProps = {
            className: classNames({
              [part.props.className]: part.props.className,
              [props.css['ps-card__tag__part']]: true
            }),
            key: i
          }
          if (!isNativeElement(part))
            elProps.css = {
              'ps-icon': props.css['ps-card__tag__part--icon'],
              'ps-icon__fg--fill': props.css['ps-icon__fg--fill--tag'],
              'ps-icon__fg--stroke': props.css['ps-icon__fg--stroke--tag']
            }
          return React.cloneElement(part, elProps)
        })}
      </div>
    : null

const renderFullOverlay = props =>
  props.fullOverlay
    ? <div className={props.css['ps-card__full-overlay']}>
        {props.fullOverlay}
      </div>
    : null

const renderBonusBar = props =>
  props.bonusBar
    ? <div className={props.css['ps-card__bonus-bar']}>
        {props.bonusBar}
      </div>
    : null

export const Card = props =>
  <div {...rmSystemProps(props)} className={getClassName(props)}>
    <div className={props.css['ps-card__image-frame']}>
      {renderImage(props)}
      {renderFullOverlay(props)}
      {renderActionBar(props)}
      {renderBonusBar(props)}
      {renderTag(props)}
    </div>
    {renderProgress(props)}
    {renderTitle(props)}
    {renderMetaData(props, props.metadata1)}
    {renderMetaData(props, props.metadata2)}
  </div>

import PropTypes from 'prop-types'
Card.propTypes = {
  actionBar: PropTypes.arrayOf(PropTypes.node),
  actionBarVisible: PropTypes.bool,
  bonusBar: PropTypes.node,
  fullOverlay: PropTypes.element,
  fullOverlayVisible: PropTypes.bool,
  image: PropTypes.element.isRequired,
  metadata1: PropTypes.arrayOf(PropTypes.node),
  metadata2: PropTypes.arrayOf(PropTypes.node),
  progress: PropTypes.number,
  tag: PropTypes.arrayOf(PropTypes.element),
  title: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}
Card.defaultProps = {
  actionBarVisible: false,
  fullOverlayVisible: false,
  size: 'medium'
}

export default styleable(css)(Card)

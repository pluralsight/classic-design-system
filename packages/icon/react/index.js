import classNames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'

import css from '../css/index.module.css'

import bookmark from '../svg/bookmark.icon.svg'
import bookmarkFill from '../svg/bookmark-fill.icon.svg'
import channel from '../svg/channel.icon.svg'
import logo from '../svg/logo.icon.svg'
import more from '../svg/more.icon.svg'
import path from '../svg/path.icon.svg'
import play from '../svg/play.icon.svg'

export const ids = {
  bookmark,
  bookmarkFill,
  channel,
  logo,
  more,
  path,
  play
}

const getClassName = props =>
  classNames({
    [props.css['ps-icon']]: true,
    [props.css['ps-icon--' + props.size]]: props.size,
    [props.className]: props.className
  })

const Icon = props =>
  <span className={getClassName(props)}>
    {React.createElement(ids[props.id], { css: props.css })}
  </span>

import PropTypes from 'prop-types'
Icon.propTypes = {
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'x-large'])
}
Icon.defaultProps = {
  size: 'small'
}
export default styleable(css)(Icon)

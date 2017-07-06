import classNames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'

import css from '../css/index.module.css'

import bookmark from '../svg/bookmark.icon.svg'
import logo from '../svg/logo.icon.svg'
import more from '../svg/more.icon.svg'

const ids = {
  bookmark,
  logo,
  more
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

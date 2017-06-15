import classNames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'

import css from '../css/list-item.module.css'

const rmSystemProps = props => {
  const { active, css, listItemIndex, originalOnClick, ...rest } = props
  return rest
}

const getClassName = props =>
  classNames({
    [props.css['ps-tab-list-item']]: true,
    [props.css['ps-tab-list-item--active']]: props.active,
    [props.className]: props.className
  })

const ListItem = styleable(css)(props =>
  <button
    role="tab"
    aria-selected={props.active}
    {...rmSystemProps(props)}
    className={getClassName(props)}
  >
    {props.children}
  </button>
)

import PropTypes from 'prop-types'
ListItem.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string.isRequired
}
ListItem.defaultProps = {
  active: false
}

export default styleable(css)(ListItem)

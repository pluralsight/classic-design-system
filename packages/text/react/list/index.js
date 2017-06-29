import classNames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'

import css from '../../css/list.module.css'
import ListItem from './list-item'

const getClassName = props =>
  classNames({
    [props.css['ps-list']]: true,
    [props.css['ps-list--' + props.type]]: props.type,
    [props.className]: props.className
  })

const getTagName = props => (props.type === 'numbered' ? 'ol' : 'ul')

const rmSystemProps = props => {
  const { css, type, ...rest } = props
  return rest
}

const List = props =>
  React.createElement(
    getTagName(props),
    { ...rmSystemProps(props), className: getClassName(props) },
    props.children
  )

import PropTypes from 'prop-types'
List.propTypes = {
  type: PropTypes.oneOf(['bulleted', 'numbered'])
}

// TODO: how to do this with es6 exports?!
module.exports = styleable(css)(List)
module.exports.Item = ListItem

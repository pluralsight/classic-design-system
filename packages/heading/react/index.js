import classNames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'

import css from '../css/index.module.css'

const getClassName = props =>
  classNames({
    [props.className]: props.className,
    [props.css['ps-heading']]: true,
    [props.css['ps-heading--' + props.size]]: props.size,
    [props.className]: props.className
  })

const Heading = props => {
  const child = React.Children.only(props.children)
  const newProps = {
    className: getClassName(props)
  }
  return React.cloneElement(child, newProps)
}

import PropTypes from 'prop-types'
Heading.propTypes = {
  size: PropTypes.oneOf(['medium', 'large', 'xx-large'])
}
Heading.defaultProps = {
  size: 'large'
}
export default styleable(css)(Heading)

import classNames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'
import util from '@pluralsight/ps-design-system-util'

import css from '../css/index.module.css'

export const propDefs = {
  size: {
    type: 'oneOf',
    value: ['medium', 'large', 'xx-large'],
    default: 'large'
  }
}

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

Heading.propTypes = util.propDefs.generatePropTypes(propDefs)
Heading.defaultProps = util.propDefs.generateDefaultProps(propDefs)

export default styleable(css)(Heading)

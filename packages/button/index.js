import classNames from 'classnames'
import util from '@pluralsight/ds-util'
import styleable from 'react-styleable'
import React from 'react'

import css from './index.css'

export const propDefs = {
  size: {
    type: 'oneOf',
    value: ['tiny', 'small', 'medium', 'large'],
    default: 'medium'
  }
}

const getClassName = props => classNames('ps-button', 'ps-button-' + props.size)

const rmSystemProps = props => {
  const { css, size, ...rest } = props
  return rest
}

export const Button = props => (
  <button className={getClassName(props)} {...rmSystemProps(props)}>
    {props.children}
  </button>
)

// TODO: hoc these
Button.propTypes = util.propDefs.generatePropTypes(propDefs)
Button.defaultProps = util.propDefs.generateDefaultProps(propDefs)

export default styleable(css)(Button)

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
  },
  appearance: {
    type: 'oneOf',
    value: ['stroke', 'flat']
  }
}

const getClassName = props =>
  classNames({
    [props.css['ps-button']]: true,
    [props.css['ps-button--' + props.size]]: props.size,
    [props.css['ps-button--' + props.appearance]]: props.appearance
  })

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

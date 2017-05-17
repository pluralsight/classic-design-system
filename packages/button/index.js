import classNames from 'classnames'
import util from '@pluralsight/ps-design-system-util'
import styleable from 'react-styleable'
import React from 'react'

import css from './index.css'

export const propDefs = {
  appearance: {
    type: 'oneOf',
    value: ['stroke', 'flat']
  },
  disabled: {
    type: 'bool',
    default: false
  },
  size: {
    type: 'oneOf',
    value: ['tiny', 'small', 'medium', 'large'],
    default: 'medium'
  }
}

const getClassName = props =>
  classNames({
    [props.css['ps-button']]: true,
    [props.css['ps-button--' + props.appearance]]: props.appearance,
    [props.css['ps-button--' + props.size]]: props.size,
    [props.css['ps-button--disabled']]: props.disabled
  })

const rmSystemProps = props => {
  const { appearance, disabled, css, size, ...rest } = props
  return rest
}

const formatProps = props => ({
  ...rmSystemProps(props),
  className: getClassName(props),
  disabled: props.disabled
})

export const Button = props => {
  let attrs = rmSystemProps(props)
  return (
    <button {...formatProps(props)}>
      {props.children}
    </button>
  )
}

// TODO: hoc these
Button.propTypes = util.propDefs.generatePropTypes(propDefs)
Button.defaultProps = util.propDefs.generateDefaultProps(propDefs)

export default styleable(css)(Button)

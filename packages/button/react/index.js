import classNames from 'classnames'
import util from '@pluralsight/ps-design-system-util'
import styleable from 'react-styleable'
import React from 'react'

import css from '../css/index.module.css'

export const propDefs = {
  appearance: {
    type: 'oneOf',
    value: ['stroke', 'flat']
  },
  disabled: {
    type: 'bool',
    default: false
  },
  icon: {
    type: 'element'
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
    [props.css['ps-button--disabled']]: props.disabled,
    [props.css['ps-button--icon-align-right']]:
      props.icon && props.iconAlign === 'right',
    [props.css['ps-button--icon-only']]:
      React.Children.count(props.children) <= 0
  })

const rmSystemProps = props => {
  const { appearance, disabled, css, icon, iconAlign, size, ...rest } = props
  return rest
}

const formatProps = props => ({
  ...rmSystemProps(props),
  className: getClassName(props),
  disabled: props.disabled
})

const renderIcon = props =>
  props.icon
    ? <div className={props.css['ps-button__icon']}>
        {React.cloneElement(props.icon, {
          css: {
            'ps-icon__fg--fill': props.css['ps-icon__fg--fill'],
            'ps-icon__fg--stroke': props.css['ps-icon__fg--stroke']
          }
        })}
      </div>
    : null

export const Button = props => {
  return (
    <button {...formatProps(props)}>
      {renderIcon(props)}
      <span>{props.children}</span>
    </button>
  )
}

// TODO: hoc these
Button.propTypes = util.propDefs.generatePropTypes(propDefs)
Button.defaultProps = util.propDefs.generateDefaultProps(propDefs)

export default styleable(css)(Button)

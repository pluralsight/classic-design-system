import classNames from 'classnames'
import styleable from 'react-styleable'
import React from 'react'

import css from '../css/index.module.css'

const getClassName = props =>
  classNames({
    [props.css['ps-button']]: true,
    [props.css['ps-button--' + props.appearance]]: props.appearance,
    [props.css['ps-button--' + props.size]]: props.size,
    [props.css['ps-button--disabled']]: props.disabled,
    [props.css['ps-button--icon-align-right']]:
      props.icon && props.iconAlign === 'right',
    [props.css['ps-button--icon-only']]:
      React.Children.count(props.children) <= 0,
    [props.className]: props.className
  })

const mapIconSize = props => {
  const btnToIconSizes = {
    tiny: 'tiny',
    small: 'small',
    medium: 'small',
    large: 'small'
  }
  return btnToIconSizes[props.size] ? btnToIconSizes[props.size] : 'small'
}

const rmSystemProps = props => {
  const { appearance, disabled, css, icon, iconAlign, size, ...rest } = props
  return rest
}

const formatProps = props => ({
  disabled: props.disabled,
  ...rmSystemProps(props),
  className: getClassName(props)
})

const renderIcon = props =>
  props.icon
    ? <div className={props.css['ps-button__icon']}>
        {React.cloneElement(props.icon, {
          css: {
            'ps-icon__fg--fill': props.css['ps-icon__fg--fill'],
            'ps-icon__fg--stroke': props.css['ps-icon__fg--stroke']
          },
          size: mapIconSize(props)
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

import PropTypes from 'prop-types'
Button.propTypes = {
  appearance: PropTypes.oneOf(['stroke', 'flat']),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large'])
}
Button.defaultProps = {
  disabled: false,
  size: 'medium'
}

export default styleable(css)(Button)

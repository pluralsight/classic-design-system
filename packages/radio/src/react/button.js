import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Halo from '@pluralsight/ps-design-system-halo'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'

const styles = {
  button: () => css(stylesheet['.psds-radio-button']),
  circle: (themeName, { checked }) =>
    compose(
      css(stylesheet['.psds-radio-button__circle']),
      css(stylesheet[`.psds-radio-button__circle.psds-theme--${themeName}`]),
      checked && css(stylesheet['.psds-radio-button__circle--checked'])
    ),
  circleOuter: () => css(stylesheet['.psds-radio-button__circle-outer']),
  circleInner: (themeName, { checked }) =>
    css(stylesheet['.psds-radio-button__circle-inner']),
  halo: () => css(stylesheet['.psds-radio-button__halo']),
  input: () => css(stylesheet['.psds-radio-button__input']),
  label: themeName =>
    compose(
      css(stylesheet['.psds-radio-button__label']),
      css(stylesheet[`.psds-radio-button__label.psds-theme--${themeName}`])
    )
}

const Button = React.forwardRef((props, forwardedRef) => {
  const themeName = useTheme()

  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const circleRef = React.useRef()

  function handleClick(evt) {
    const value = evt.target.value
    props._onClick(evt, value)

    if (isFunction(props.onClick)) props.onClick(evt, value)
    props._onFocus(evt, value)

    circleRef.current.focus()
  }

  const { _disabled, _error, _isFocused, _onFocus, _name } = props

  return (
    <label {...styles.button(themeName, props)}>
      <div {...styles.circleOuter()}>
        <Halo
          error={_error}
          inline
          shape={Halo.shapes.pill}
          visibleOnFocus={!_disabled}
          visible={_isFocused}
          {...styles.halo()}
        >
          <div
            role="radio"
            aria-checked={props.checked}
            tabIndex="-1"
            onFocus={_disabled ? null : _ => _onFocus(props.value)}
            ref={circleRef}
            {...styles.circle(themeName, props)}
          >
            {props.checked && <div {...styles.circleInner(themeName, props)} />}
          </div>
        </Halo>
      </div>

      <input
        {...filterReactProps(props, { tagName: 'input' })}
        onClick={_disabled ? null : handleClick}
        tabIndex="-1"
        type="radio"
        readOnly
        name={_name}
        ref={ref}
        {...styles.input()}
      />

      <div {...styles.label(themeName)}>{props.label}</div>
    </label>
  )
})

Button.displayName = 'Radio.Button'

Button.propTypes = {
  _disabled: PropTypes.bool,
  _error: PropTypes.bool,
  _isFocused: PropTypes.bool,
  _name: PropTypes.string,
  _onClick: PropTypes.func,
  _onFocus: PropTypes.func,

  checked: PropTypes.bool,
  label: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

Button.defaultProps = {
  checked: false
}

export default Button

function isFunction(fn) {
  return typeof fn === 'function'
}

import { compose, css } from 'glamor'
import React from 'react'

import Halo from '@pluralsight/ps-design-system-halo'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css'
import * as vars from '../vars'

const styles = {
  switch: (themeName, { disabled, labelAlign }) =>
    compose(
      css(stylesheet['.psds-switch']),
      css(stylesheet[`.psds-switch--labelAlign-${labelAlign}`]),
      disabled && css(stylesheet['.psds-switch--disabled'])
    ),

  track: (themeName, { checked, color, size }) =>
    compose(
      css(stylesheet['.psds-switch__track']),
      css(stylesheet[`.psds-switch__track.psds-theme--${themeName}`]),
      checked &&
        css(
          stylesheet[
            `.psds-switch__track--checked.psds-switch__track--color-${color}`
          ]
        ),
      css(stylesheet[`.psds-switch__track.psds-switch__track--size-${size}`])
    ),

  thumb: (themeName, { checked, size }) =>
    compose(
      css(stylesheet['.psds-switch__thumb']),
      css(stylesheet[`.psds-switch__thumb--size-${size}`]),
      checked &&
        css(
          stylesheet[
            `.psds-switch__thumb--checked.psds-switch__thumb--size-${size}`
          ]
        )
    ),

  label: (themeName, { labelAlign, checked, size }) =>
    compose(
      css(stylesheet['.psds-switch__label']),
      css(stylesheet[`.psds-switch__label--size-${size}`]),
      css(
        stylesheet[
          `.psds-switch__label--size-${size}.psds-switch__label--labelAlign-${labelAlign}`
        ]
      ),
      css(stylesheet[`.psds-switch__label.psds-theme--${themeName}`])
    ),

  checkbox: _ => css(stylesheet['.psds-switch__checkbox'])
}

const Switch = React.forwardRef((props, forwardedRef) => {
  const { checked, children, disabled, onClick, error, ...rest } = props

  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const themeName = useTheme()
  const [isFocused, setIsFocused] = React.useState(false)

  const handleBlur = combineFns(() => {
    setIsFocused(false)
  }, props.onBlur)

  function handleClick(evt) {
    if (disabled || !isFunction(props.onClick)) return
    evt.preventDefault()
    onClick(!props.checked)
  }

  const handleFocus = combineFns(() => {
    setIsFocused(true)
  }, props.onFocus)

  return (
    <label
      aria-checked={checked}
      role="checkbox"
      {...styles.switch(themeName, props)}
      {...filterReactProps(rest, { tagName: 'label' })}
      {...(disabled && { tabIndex: -1 })}
      onClick={handleClick}
      onBlur={handleBlur}
      onFocus={handleFocus}
    >
      <Halo error={error} shape={Halo.shapes.pill} inline visible={isFocused}>
        <div {...styles.track(themeName, props)}>
          <div {...styles.thumb(themeName, props)} />
        </div>
      </Halo>

      <input
        checked={checked}
        readOnly
        ref={ref}
        tabIndex="-1"
        type="checkbox"
        {...styles.checkbox()}
      />

      {children && <span {...styles.label(themeName, props)}>{children}</span>}
    </label>
  )
})

Switch.displayName = 'Switch'

Switch.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(vars.colors)),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  labelAlign: PropTypes.oneOf(Object.keys(vars.labelAligns)),
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  size: PropTypes.oneOf(Object.keys(vars.sizes)),
  style: PropTypes.object,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Switch.defaultProps = {
  checked: false,
  color: vars.colors.orange,
  disabled: false,
  error: false,
  labelAlign: vars.labelAligns.right,
  size: vars.sizes.large,
  tabIndex: 0
}

Switch.colors = vars.colors
Switch.sizes = vars.sizes
Switch.labelAligns = vars.labelAligns

export const colors = vars.colors
export const sizes = vars.sizes
export const labelAligns = vars.labelAligns

export default Switch

function combineFns(...fns) {
  return (...args) => fns.filter(isFunction).forEach(fn => fn(...args))
}

function isFunction(fn) {
  return typeof fn === 'function'
}

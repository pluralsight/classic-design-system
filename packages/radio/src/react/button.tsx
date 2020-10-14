import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Halo from '@pluralsight/ps-design-system-halo'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { combineFns } from '@pluralsight/ps-design-system-util'
import { useRadioContext } from './context'
import stylesheet from '../css'

const styles = {
  button: ({ disabled }) =>
    compose(
      css(stylesheet['.psds-radio-button']),
      disabled && css(stylesheet['.psds-radio-button--disabled'])
    ),
  circle: (themeName, checked) =>
    compose(
      css(stylesheet['.psds-radio-button__circle']),
      css(stylesheet[`.psds-radio-button__circle.psds-theme--${themeName}`]),
      checked && css(stylesheet['.psds-radio-button__circle--checked'])
    ),
  circleOuter: () => css(stylesheet['.psds-radio-button__circle-outer']),
  circleInner: () => css(stylesheet['.psds-radio-button__circle-inner']),
  halo: () => css(stylesheet['.psds-radio-button__halo']),
  input: () => css(stylesheet['.psds-radio-button__input']),
  label: themeName =>
    compose(
      css(stylesheet['.psds-radio-button__label']),
      css(stylesheet[`.psds-radio-button__label.psds-theme--${themeName}`])
    )
}

const isChecked = (a, b) => a === b

const Button = React.forwardRef(({ value, label, ...props }, forwardedRef) => {
  const themeName = useTheme()
  const { checkedValue, onChange, disabled, error, name } = useRadioContext()
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const circleRef = React.useRef()
  const [isFocused, setFocus] = useState(false)

  const handleFocus = e => {
    if (disabled) return
    combineFns(() => setFocus(true), props.onFocus)(e)
  }
  const handleBlur = e => {
    if (disabled) return
    combineFns(props.onFocus, () => setFocus(false))(e)
  }
  function handleClick(e) {
    const value = e.target.value
    combineFns(onChange, props.onClick)(e, value)
    ref.current.focus()
  }
  const checked = isChecked(value, checkedValue)
  return (
    <label {...styles.button({ disabled })}>
      <div {...styles.circleOuter()}>
        <Halo
          error={error}
          inline
          shape={Halo.shapes.pill}
          visibleOnFocus={!disabled}
          visible={isFocused}
          {...styles.halo()}
        >
          <div
            role="radio"
            aria-checked={checked}
            tabIndex="-1"
            ref={circleRef}
            {...styles.circle(themeName, checked)}
          >
            {checked && <div {...styles.circleInner()} />}
          </div>
        </Halo>
      </div>

      <input
        {...filterReactProps(props, { tagName: 'input' })}
        onClick={disabled ? null : handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="radio"
        readOnly
        name={name}
        ref={ref}
        value={value}
        {...styles.input()}
      />

      <div {...styles.label(themeName)}>{label}</div>
    </label>
  )
})

Button.displayName = 'Radio.Button'

Button.propTypes = {
  label: PropTypes.node.isRequired,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default Button

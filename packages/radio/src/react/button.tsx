import { compose, css } from 'glamor'
import React, { HTMLAttributes, useState, useContext } from 'react'

import Halo from '@pluralsight/ps-design-system-halo'
import { useTheme, names } from '@pluralsight/ps-design-system-theme'
import { combineFns, ValueOf, RefForwardingComponent } from '@pluralsight/ps-design-system-util'
import { RadioContext } from './context'
import stylesheet from '../css'

const styles = {
  button: (disabled: boolean) =>
    compose(
      css(stylesheet['.psds-radio-button']),
      disabled && css(stylesheet['.psds-radio-button--disabled'])
    ),
  circle: (themeName: ValueOf<typeof names>, checked: boolean) =>
    compose(
      css(stylesheet['.psds-radio-button__circle']),
      css(stylesheet[`.psds-radio-button__circle.psds-theme--${themeName}`]),
      checked && css(stylesheet['.psds-radio-button__circle--checked'])
    ),
  circleOuter: () => css(stylesheet['.psds-radio-button__circle-outer']),
  circleInner: () => css(stylesheet['.psds-radio-button__circle-inner']),
  halo: () => css(stylesheet['.psds-radio-button__halo']),
  input: () => css(stylesheet['.psds-radio-button__input']),
  label: (themeName: ValueOf<typeof names>) =>
    compose(
      css(stylesheet['.psds-radio-button__label']),
      css(stylesheet[`.psds-radio-button__label.psds-theme--${themeName}`])
    )
}

const isChecked = (a: React.ReactText, b?: React.ReactText) => a === b

export interface RadioButtonProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onClick'> {
  label: React.ReactNode
  onBlur?: (e?: React.FocusEvent) => void
  onClick?: (e?: React.MouseEvent, v?: React.ReactText) => void
  onFocus?: (e?: React.FocusEvent) => void
  value: React.ReactText
}


const Button = React.forwardRef<HTMLInputElement, RadioButtonProps>(({ value, label, ...props }, forwardedRef) => {
  const themeName = useTheme()
  const { checkedValue, onChange, disabled, error, name } =  useContext(RadioContext)
  const ref = React.useRef<HTMLInputElement>((null as unknown) as HTMLInputElement)
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const [isFocused, setFocus] = useState(false)

  const handleFocus = (e: React.FocusEvent) => {
    if (disabled) return
    combineFns(() => setFocus(true), props.onFocus)(e)
  }
  const handleBlur = (e: React.FocusEvent) => {
    if (disabled) return
    combineFns(props.onBlur, () => setFocus(false))(e)
  }
  function handleClick(e: React.MouseEvent) {
    const value = (e.target as HTMLInputElement).value
    combineFns(onChange, props.onClick)(e, value)
    ref.current.focus()
  }
  const checked = isChecked(value, checkedValue)
  return (
    <label {...styles.button(disabled as boolean)}>
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
            tabIndex={-1}
            {...styles.circle(themeName, checked)}
          >
            {checked && <div {...styles.circleInner()} />}
          </div>
        </Halo>
      </div>

      <input
        {...props}
        onClick={disabled ? () => {} : handleClick}
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

export default Button

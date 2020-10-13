import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Halo from '@pluralsight/ps-design-system-halo'
import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import { RefForwardingComponent } from '@pluralsight/ps-design-system-util'
import { compose, css, StyleAttribute } from 'glamor'
import React from 'react'

import stylesheet from '../css/index.js'

type StyleFn = (
  themeName: typeof Theme.names,
  props: CheckboxProps
) => StyleAttribute

const styles = {
  checkbox: (themeName, props) =>
    compose(
      css(stylesheet['.psds-checkbox']),
      props.disabled && css(stylesheet['.psds-checkbox--disabled'])
    ),
  square: (themeName, props) =>
    compose(
      css(stylesheet['.psds-checkbox__square']),
      css(stylesheet[`.psds-checkbox__square.psds-theme--${themeName}`]),
      (props.checked || props.indeterminate) &&
        css(stylesheet['.psds-checkbox__square--active'])
    ),
  icon: () => css(stylesheet['.psds-checkbox__icon']),
  input: () => css(stylesheet['.psds-checkbox__input']),
  label: (themeName, _props) =>
    compose(
      css(stylesheet['.psds-checkbox__label']),
      css(stylesheet[`.psds-checkbox__label.psds-theme--${themeName}`])
    )
}

interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean
  disabled?: boolean
  error?: boolean
  indeterminate?: boolean
  label: React.ReactNode
  name?: string
  onCheck?: (
    evt: Event,
    checked: boolean,
    value: string | number,
    name: string | undefined
  ) => void
  value: string | number
}

interface CheckboxStatics {}

interface CheckboxComponent
  extends RefForwardingComponent<
    CheckboxProps,
    HTMLInputElement,
    CheckboxStatics
  > {}

const Checkbox = React.forwardRef((props, forwardedRef) => {
  const themeName = useTheme()

  const ref = React.useRef<HTMLInputElement>()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const square = React.createRef<HTMLDivElement>()

  React.useEffect(
    function updateIndetermiateAttr() {
      if (!ref.current) return
      ref.current.indeterminate = props.indeterminate
    },
    [props.indeterminate]
  )

  const handleKeyDown = evt => {
    if (evt.key === 'Enter' || evt.key === ' ') handleClick(evt)
  }

  const handleClick = evt => {
    evt.preventDefault()
    evt.stopPropagation()

    const { onCheck } = props
    if (typeof onCheck === 'function') {
      onCheck(evt, !props.checked, props.value, props.name)
    }

    if (square.current) square.current.focus()
  }

  return (
    <label
      onClick={props.disabled ? null : handleClick}
      onKeyDown={props.disabled ? null : handleKeyDown}
      {...styles.checkbox(themeName, props)}
    >
      <Halo
        error={props.error}
        gapSize={Halo.gapSizes.small}
        inline
        visibleOnFocus={!props.disabled}
      >
        <div
          aria-checked={props.checked}
          ref={square}
          role="checkbox"
          tabIndex={props.disabled ? -1 : 0}
          {...styles.square(themeName, props)}
        >
          {props.indeterminate && <Indeterminate />}
          {props.checked && !props.indeterminate && <Checkmark />}
        </div>
      </Halo>

      <input
        readOnly
        ref={ref}
        tabIndex={-1}
        type="checkbox"
        value={props.value}
        {...styles.input()}
        {...filterReactProps(props, { tagName: 'input' })}
      />
      <div {...styles.label(themeName, props)}>{props.label}</div>
    </label>
  )
}) as CheckboxComponent

export default Checkbox

const Checkmark = () => (
  <svg
    role="img"
    aria-label="Checkmark"
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...styles.icon()}
  >
    <polygon points="6.89667458 13 2.62114014 8.72446556 4.12826603 7.21733967 6.89667458 9.97505938 12.871734 4 14.3788599 5.51781473" />
  </svg>
)

const Indeterminate = () => (
  <svg
    role="img"
    aria-label="Indeterminate Mark"
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...styles.icon()}
  >
    <rect x="3" y="7" width="10" height="2" />
  </svg>
)

import { accessibility } from '@pluralsight/ps-design-system-core'
import Halo from '@pluralsight/ps-design-system-halo'
import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  HTMLPropsFor,
  ValueOf,
  omit,
  isFunction
} from '@pluralsight/ps-design-system-util'
import glamor from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const styles = {
  checkbox: (props: { disabled?: boolean }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-checkbox']),
      props.disabled && glamor.css(stylesheet['.psds-checkbox--disabled'])
    ),
  square: (
    themeName: ValueOf<typeof Theme.names>,
    props: { checked?: boolean; indeterminate?: boolean }
  ) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-checkbox__square']),
      glamor.css(stylesheet[`.psds-checkbox__square.psds-theme--${themeName}`]),
      (props.checked || props.indeterminate) &&
        glamor.css(stylesheet['.psds-checkbox__square--active'])
    ),
  icon: () => glamor.css(stylesheet['.psds-checkbox__icon']),
  input: () => glamor.css(accessibility.screenReaderOnly),
  label: (themeName: ValueOf<typeof Theme.names>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-checkbox__label']),
      glamor.css(stylesheet[`.psds-checkbox__label.psds-theme--${themeName}`])
    )
}

interface CheckboxProps extends HTMLPropsFor<'div'>, Record<string, unknown> {
  checked?: boolean
  disabled?: boolean
  error?: boolean
  indeterminate?: boolean
  label: React.ReactNode
  name?: string
  onCheck?: (
    evt:
      | React.KeyboardEvent<HTMLLabelElement>
      | React.MouseEvent<HTMLLabelElement, MouseEvent>,
    checked: boolean,
    value: React.ReactText,
    name: string | undefined
  ) => void
  value: string | number
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, forwardedRef) => {
    const { checked, disabled, indeterminate, name, value, onCheck } = props

    const themeName = useTheme()

    const ref = React.useRef<HTMLInputElement>(null)
    React.useImperativeHandle(
      forwardedRef,
      () => (ref.current as unknown) as HTMLInputElement
    )

    React.useEffect(
      function updateIndetermiateAttr() {
        if (!ref.current) return
        ref.current.indeterminate = indeterminate || false
      },
      [indeterminate]
    )

    const toggle = (
      evt:
        | React.MouseEvent<HTMLLabelElement>
        | React.KeyboardEvent<HTMLLabelElement>
    ) => {
      if (onCheck && isFunction(onCheck)) onCheck(evt, !checked, value, name)
    }

    const handleClick: React.MouseEventHandler<HTMLLabelElement> = evt => {
      if (disabled) return

      evt.preventDefault()
      evt.stopPropagation()
      evt.persist()

      toggle(evt)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLLabelElement> = evt => {
      if (disabled) return

      const shouldToggle = evt.key === 'Enter' || evt.key === ' '
      if (!shouldToggle) return

      evt.preventDefault()
      evt.stopPropagation()
      evt.persist()

      toggle(evt)
    }

    return (
      <label
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...styles.checkbox({ disabled })}
      >
        <Halo
          error={props.error}
          gapSize={Halo.gapSizes.small}
          inline
          visibleOnFocus={!disabled}
        >
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            readOnly
            {...styles.input()}
            {...omit(props, ['label', 'onCheck', 'error', 'indeterminate'])}
          />

          <div {...styles.square(themeName, { checked, indeterminate })}>
            {indeterminate && <Indeterminate />}
            {!indeterminate && checked && <Checkmark />}
          </div>
        </Halo>

        <div {...styles.label(themeName)}>{props.label}</div>
      </label>
    )
  }
)

export default Checkbox

const Checkmark: React.FC = () => (
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

const Indeterminate: React.FC = () => (
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

import Halo from '@pluralsight/ps-design-system-halo'
import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  omit,
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import { compose, css, StyleAttribute } from 'glamor'
import React from 'react'

import stylesheet from '../css'

type StyleFn = (
  themeName: ValueOf<typeof Theme.names>,
  props: CheckboxProps
) => StyleAttribute

const styles: { [key: string]: StyleFn } = {
  checkbox: (_themeName, props) =>
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

interface CheckboxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Record<string, unknown> {
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

interface CheckboxStatics {}

interface CheckboxComponent
  extends RefForwardingComponent<
    CheckboxProps,
    HTMLInputElement,
    CheckboxStatics
  > {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, forwardedRef) => {
    const themeName = useTheme()

    const ref = React.useRef<HTMLInputElement>(null)
    React.useImperativeHandle(
      forwardedRef,
      () => (ref.current as unknown) as HTMLInputElement
    )

    const square = React.createRef<HTMLDivElement>()

    React.useEffect(
      function updateIndetermiateAttr() {
        if (!ref.current) return
        ref.current.indeterminate = props.indeterminate || false
      },
      [props.indeterminate]
    )

    const handleKeyDown = (evt: React.KeyboardEvent<HTMLLabelElement>) => {
      if (evt.key === 'Enter' || evt.key === ' ') handleClick(evt)
    }

    const handleClick = (
      evt:
        | React.KeyboardEvent<HTMLLabelElement>
        | React.MouseEvent<HTMLLabelElement>
    ) => {
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
        onClick={props.disabled ? undefined : handleClick}
        onKeyDown={props.disabled ? undefined : handleKeyDown}
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
            {props.indeterminate && (
              <Indeterminate {...props} themeName={themeName} />
            )}
            {props.checked && !props.indeterminate && (
              <Checkmark {...props} themeName={themeName} />
            )}
          </div>
        </Halo>

        <input
          readOnly
          ref={ref}
          tabIndex={-1}
          type="checkbox"
          value={props.value}
          {...styles.input(themeName, props)}
          {...omit<
            CheckboxProps,
            ['label', 'onCheck', 'error', 'indeterminate']
          >(props, ['label', 'onCheck', 'error', 'indeterminate'])}
        />
        <div {...styles.label(themeName, props)}>{props.label}</div>
      </label>
    )
  }
) as CheckboxComponent

export default Checkbox

interface CheckmarkProps extends CheckboxProps {
  themeName: ValueOf<typeof Theme.names>
}
const Checkmark: React.FC<CheckmarkProps> = ({ themeName, ...props }) => (
  <svg
    role="img"
    aria-label="Checkmark"
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...styles.icon(themeName, props)}
  >
    <polygon points="6.89667458 13 2.62114014 8.72446556 4.12826603 7.21733967 6.89667458 9.97505938 12.871734 4 14.3788599 5.51781473" />
  </svg>
)

interface IndeterminateProps extends CheckboxProps {
  themeName: ValueOf<typeof Theme.names>
}
const Indeterminate: React.FC<IndeterminateProps> = ({
  themeName,
  ...props
}) => (
  <svg
    role="img"
    aria-label="Indeterminate Mark"
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...styles.icon(themeName, props)}
  >
    <rect x="3" y="7" width="10" height="2" />
  </svg>
)

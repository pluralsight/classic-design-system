import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Halo from '@pluralsight/ps-design-system-halo'
import { WarningIcon } from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const styles = {
  error: _ => css(stylesheet['.psds-text-input__error']),
  field: ({
    appearance,
    error,
    fieldAfter,
    icon,
    iconAlign,
    themeName,
    size
  }) => {
    const small = size === vars.sizes.small
    return css(
      stylesheet['.psds-text-input__field'],
      stylesheet[`.psds-text-input__field--appearance-${appearance}`],
      stylesheet[`.psds-text-input__field.psds-theme--${themeName}`],
      stylesheet[
        `.psds-text-input__field--appearance-${appearance}.psds-theme--${themeName}`
      ],
      fieldAfter && stylesheet[`.psds-text-input__field--w-after`],
      small && stylesheet['.psds-text-input__field.psds-text-input--small'],
      icon &&
        small &&
        stylesheet[
          `.psds-text-input__field--icon-align-${iconAlign}.psds-text-input--small`
        ],
      icon &&
        !small &&
        stylesheet[`.psds-text-input__field--icon-align-${iconAlign}`],
      error &&
        stylesheet[`.psds-text-input__field--error.psds-theme--${themeName}`]
    )
  },
  fieldContainer: _ => css(stylesheet['.psds-text-input__field-container']),
  fieldInput: ({ appearance, themeName }) =>
    css(
      stylesheet['.psds-text-input__field-input'],
      stylesheet[`.psds-text-input__field-input--appearance-${appearance}`],
      stylesheet[`.psds-text-input__field-input.psds-theme--${themeName}`]
    ),
  icon: ({ appearance, icon, iconAlign, themeName }) =>
    css(
      stylesheet['.psds-text-input__icon'],
      icon && stylesheet[`.psds-text-input__icon--icon-align-${iconAlign}`],
      stylesheet[`.psds-text-input__icon--appearance-${appearance}`],
      stylesheet[`.psds-text-input__icon.psds-theme--${themeName}`]
    ),
  textInput: ({ disabled }) =>
    css(
      stylesheet['.psds-text-input'],
      disabled && stylesheet['.psds-text-input--disabled']
    ),
  label: ({ themeName }) =>
    css(
      stylesheet['.psds-text-input__label'],
      stylesheet[`.psds-text-input__label.psds-theme--${themeName}`]
    ),
  subLabel: ({ themeName }) =>
    css(
      stylesheet['.psds-text-input__sub-label'],
      stylesheet[`.psds-text-input__sub-label.psds-theme--${themeName}`]
    )
}

const TextInput = React.forwardRef((props, forwardedRef) => {
  const themeName = useTheme()
  const allProps = { ...props, themeName }
  const {
    className,
    error,
    fieldAfter,
    label,
    icon,
    style,
    subLabel,
    ...inputProps
  } = allProps

  const { fieldRef, inputRef } = useMultipleRefs(forwardedRef)

  return (
    <label
      {...styles.textInput(allProps)}
      {...(allProps.style ? { style: allProps.style } : null)}
      {...(allProps.className ? { className } : null)}
    >
      {label && <div {...styles.label(allProps)}>{label}</div>}

      <div {...styles.fieldContainer(allProps)}>
        <Halo error={error} gapSize={Halo.gapSizes.small}>
          <div ref={fieldRef} {...styles.field(allProps)}>
            <input
              {...filterReactProps(inputProps, { tagName: 'input' })}
              {...styles.fieldInput(allProps)}
              disabled={allProps.disabled}
              placeholder={allProps.placeholder}
              ref={inputRef}
            />
            {fieldAfter}
          </div>
        </Halo>

        {icon && <div {...styles.icon(allProps)}>{icon}</div>}

        {error && (
          <div {...styles.error(allProps)}>
            <WarningIcon />
          </div>
        )}
      </div>

      {subLabel && <div {...styles.subLabel(allProps)}>{subLabel}</div>}
    </label>
  )
})

TextInput.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  fieldAfter: PropTypes.node,
  icon: PropTypes.element,
  iconAlign: PropTypes.oneOf(Object.keys(vars.iconAligns)),
  label: PropTypes.node,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(Object.values(vars.sizes)),
  subLabel: PropTypes.node
}
TextInput.defaultProps = {
  appearance: vars.appearances.default,
  disabled: false,
  error: false,
  iconAlign: vars.iconAligns.left,
  size: vars.sizes.medium
}

TextInput.appearances = vars.appearances
TextInput.iconAligns = vars.iconAligns
TextInput.sizes = vars.sizes

export const appearances = vars.appearances
export const sizes = vars.sizes
export const iconAligns = vars.iconAligns
export default TextInput

function isRef(ref) {
  if (!isPlainObject(ref)) return false

  return Object.prototype.hasOwnProperty.call(ref, 'current')
}

function isRefs(refs) {
  if (!isPlainObject(refs)) return false

  return Object.keys(refs).every(key => isRef(refs[key]))
}

function isPlainObject(obj) {
  return obj && !Array.isArray(obj) && typeof obj === 'object'
}

function useMultipleRefs(refs) {
  const hasMultiple = isRefs(refs)

  const forwardedFieldRef = hasMultiple ? refs.field : React.createRef()
  const forwardedInputRef = hasMultiple ? refs.input : refs

  const fieldRef = React.useRef(forwardedFieldRef)
  const inputRef = React.useRef(forwardedInputRef)

  React.useImperativeHandle(forwardedFieldRef, () => fieldRef.current)
  React.useImperativeHandle(forwardedInputRef, () => inputRef.current)

  return { fieldRef, inputRef }
}

import { css } from 'glamor'
import React, { HTMLAttributes } from 'react'

import Halo from '@pluralsight/ps-design-system-halo'
import { WarningIcon } from '@pluralsight/ps-design-system-icon'
import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  ValueOf,
  RefForwardingComponent
} from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'
import * as vars from '../vars'

const styles = {
  error: () => css(stylesheet['.psds-text-input__error']),
  field: ({
    appearance,
    error,
    fieldAfter,
    icon,
    iconAlign,
    themeName,
    size
  }: {
    appearance: ValueOf<typeof vars.appearances>
    error: boolean
    fieldAfter: React.ReactNode
    icon: React.ReactNode
    iconAlign: ValueOf<typeof vars.iconAligns>
    themeName: ValueOf<typeof Theme.names>
    size: ValueOf<typeof vars.sizes>
  }) => {
    const small = size === vars.sizes.small
    return css(
      stylesheet['.psds-text-input__field'],
      stylesheet[`.psds-text-input__field--appearance-${appearance}`],
      stylesheet[`.psds-text-input__field.psds-theme--${themeName}`],
      stylesheet[
        `.psds-text-input__field--appearance-${appearance}.psds-theme--${themeName}`
      ],
      Boolean(fieldAfter) && stylesheet[`.psds-text-input__field--w-after`],
      small && stylesheet['.psds-text-input__field.psds-text-input--small'],
      Boolean(icon) &&
        small &&
        stylesheet[
          `.psds-text-input__field--icon-align-${iconAlign}.psds-text-input--small`
        ],
      Boolean(icon) &&
        !small &&
        stylesheet[`.psds-text-input__field--icon-align-${iconAlign}`],
      error &&
        stylesheet[`.psds-text-input__field--error.psds-theme--${themeName}`]
    )
  },
  fieldContainer: () => css(stylesheet['.psds-text-input__field-container']),
  fieldInput: (
    appearance: ValueOf<typeof vars.appearances>,
    themeName: ValueOf<typeof Theme.names>
  ) =>
    css(
      stylesheet['.psds-text-input__field-input'],
      stylesheet[`.psds-text-input__field-input--appearance-${appearance}`],
      stylesheet[`.psds-text-input__field-input.psds-theme--${themeName}`]
    ),
  icon: ({
    appearance,
    icon,
    iconAlign,
    themeName
  }: {
    appearance: ValueOf<typeof vars.appearances>
    icon: React.ReactNode
    iconAlign: ValueOf<typeof vars.iconAligns>
    themeName: ValueOf<typeof Theme.names>
  }) =>
    css(
      stylesheet['.psds-text-input__icon'],
      Boolean(icon) &&
        stylesheet[`.psds-text-input__icon--icon-align-${iconAlign}`],
      stylesheet[`.psds-text-input__icon--appearance-${appearance}`],
      stylesheet[`.psds-text-input__icon.psds-theme--${themeName}`]
    ),
  textInput: (disabled: boolean) =>
    css(
      stylesheet['.psds-text-input'],
      disabled && stylesheet['.psds-text-input--disabled']
    ),
  label: (themeName: ValueOf<typeof Theme.names>) =>
    css(
      stylesheet['.psds-text-input__label'],
      stylesheet[`.psds-text-input__label.psds-theme--${themeName}`]
    ),
  subLabel: (themeName: ValueOf<typeof Theme.names>) =>
    css(
      stylesheet['.psds-text-input__sub-label'],
      stylesheet[`.psds-text-input__sub-label.psds-theme--${themeName}`]
    )
}

export interface TextInputStatics {
  appearances: typeof vars.appearances
  iconAligns: typeof vars.iconAligns
  sizes: typeof vars.sizes
}

export interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
  appearance?: ValueOf<typeof vars.appearances>
  disabled?: boolean
  error?: boolean
  fieldAfter?: React.ReactNode
  icon?: React.ReactNode
  iconAlign?: ValueOf<typeof vars.iconAligns>
  label?: React.ReactNode
  placeholder?: string
  type?: string
  name?: string
  size?: ValueOf<typeof vars.sizes>
  subLabel?: React.ReactNode
}

export interface TextInputComponent
  extends RefForwardingComponent<
    TextInputProps,
    HTMLInputElement,
    TextInputStatics
  > {}

export type MultipleRefs =
  | {
      field: React.Ref<HTMLDivElement>
      input: React.Ref<HTMLInputElement>
    }
  | React.Ref<HTMLInputElement>

const TextInput = React.forwardRef(
  (
    {
      appearance = vars.appearances.default,
      disabled = false,
      error = false,
      iconAlign = vars.iconAligns.left,
      size = vars.sizes.medium,
      fieldAfter,
      icon,
      label,
      subLabel,
      ...props
    },
    forwardedRef: MultipleRefs
  ) => {
    const themeName = useTheme()

    const { fieldRef, inputRef } = useMultipleRefObjects(forwardedRef)

    return (
      <label
        {...styles.textInput(disabled)}
        style={props.style}
        className={props.className}
      >
        {label && <div {...styles.label(themeName)}>{label}</div>}

        <div {...styles.fieldContainer()}>
          <Halo error={error} gapSize={Halo.gapSizes.small}>
            <div
              ref={fieldRef}
              {...styles.field({
                appearance,
                error,
                fieldAfter,
                icon,
                iconAlign,
                themeName,
                size
              })}
            >
              <input
                {...props}
                {...styles.fieldInput(appearance, themeName)}
                disabled={disabled}
                placeholder={props.placeholder}
                ref={inputRef}
              />
              {fieldAfter}
            </div>
          </Halo>

          {icon && (
            <div {...styles.icon({ appearance, icon, iconAlign, themeName })}>
              {icon}
            </div>
          )}

          {error && (
            <div {...styles.error()}>
              <WarningIcon />
            </div>
          )}
        </div>

        {subLabel && <div {...styles.subLabel(themeName)}>{subLabel}</div>}
      </label>
    )
  }
) as TextInputComponent

TextInput.appearances = vars.appearances
TextInput.iconAligns = vars.iconAligns
TextInput.sizes = vars.sizes

export const appearances = vars.appearances
export const sizes = vars.sizes
export const iconAligns = vars.iconAligns
export default TextInput

interface MultipleRefObjects {
  field: React.RefObject<HTMLDivElement>
  input: React.RefObject<HTMLInputElement>
}

function isRef(
  ref: React.RefObject<HTMLDivElement> | React.RefObject<HTMLInputElement>
) {
  if (!isPlainObject(ref)) return false

  return Object.prototype.hasOwnProperty.call(ref, 'current')
}

function isRefs(refs: MultipleRefs) {
  if (!isPlainObject(refs)) return false

  return Object.keys(refs as MultipleRefObjects).every(key =>
    isRef((refs as MultipleRefObjects)[key as keyof MultipleRefObjects])
  )
}

function isPlainObject(obj: unknown) {
  return obj && !Array.isArray(obj) && typeof obj === 'object'
}

function useMultipleRefObjects(refs: MultipleRefs) {
  const hasMultiple = isRefs(refs)

  const forwardedFieldRef: React.RefObject<HTMLDivElement> =
    hasMultiple && refs ? (refs as MultipleRefObjects).field : React.createRef()
  const forwardedInputRef: React.RefObject<HTMLInputElement> =
    hasMultiple && refs
      ? (refs as MultipleRefObjects).input
      : (refs as React.RefObject<HTMLInputElement>)

  const fieldRef: React.RefObject<HTMLDivElement> = React.useRef<
    HTMLDivElement
  >(null)
  const inputRef: React.RefObject<HTMLInputElement> = React.useRef<
    HTMLInputElement
  >(null)

  React.useImperativeHandle(forwardedFieldRef, () => fieldRef.current as HTMLDivElement)
  React.useImperativeHandle(forwardedInputRef, () => inputRef.current as HTMLInputElement)

  return { fieldRef, inputRef }
}

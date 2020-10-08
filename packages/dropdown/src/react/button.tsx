import React, { forwardRef, useLayoutEffect, useRef, HTMLAttributes } from 'react'
import { compose, css } from 'glamor'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import stylesheet from '../css/index.js'
import Icon from '@pluralsight/ps-design-system-icon'
import Halo from '@pluralsight/ps-design-system-halo'
import { ValueOf } from '@pluralsight/ps-design-system-util'
import { CaretDown } from './caret-down.js'
import { ErrorIcon } from './error-icon.js'
import * as vars from '../vars/index.js'
const styles = {
  field: ({ appearance, error, themeName, size }) => {
    const label = 'psds-dropdown__field'
    const isSmall = size === vars.sizes.small

    return compose(
      css(stylesheet[`.${label}`]),
      isSmall && css(stylesheet[`.${label}.psds-dropdown--small`]),
      css(stylesheet[`.${label}--appearance-${appearance}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      error && css(stylesheet[`.${label}-error.psds-theme--${themeName}`])
    )
  },
  fieldAligner: () => css(stylesheet['.psds-dropdown__field-aligner']),
  fieldContainer: () => css(stylesheet['.psds-dropdown__field-container']),
  halo: () => css(stylesheet['.psds-dropdown__field-halo']),
  icon: ({ appearance, themeName }) => {
    const label = 'psds-dropdown__icon'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--appearance-${appearance}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  },
  inner: () => css(stylesheet['.psds-dropdown__field-inner'])
}

interface DropdownButtonProps extends HTMLAttributes<HTMLButtonElement> {
  appearance?: ValueOf<typeof vars.appearances>
  disabled?: boolean
  error?: boolean
  isOpen?: boolean
  onClick?: (Event) => void
  setMenuPosition?: ({left, top}: {left: number, top: number}) => void
  size?: ValueOf<typeof vars.sizes>
}

export const Button = forwardRef<HTMLButtonElement, DropdownButtonProps>(
  (
    {
      appearance,
      children,
      disabled,
      error,
      isOpen,
      onClick,
      setMenuPosition,
      size,
      ...rest
    },
    ref
  ) => {
    const themeName = useTheme()
    const fieldContainerRef = useRef<HTMLDivElement>()
    useLayoutEffect(() => {
      if (!isOpen) return
      const { left, bottom } = fieldContainerRef.current.getBoundingClientRect()
      requestAnimationFrame(() => setMenuPosition({ left, top: bottom }))
    }, [fieldContainerRef, isOpen, setMenuPosition])
    return (
      <div {...styles.fieldContainer()} ref={fieldContainerRef}>
        <Halo error={error} gapSize={Halo.gapSizes.small} {...styles.halo()}>
          <div {...styles.fieldAligner()}>
            <button
              {...rest}
              {...styles.field({ appearance, error, themeName, size })}
              disabled={disabled}
              onClick={disabled ? null : onClick}
              ref={ref}
            >
              <span {...styles.inner()}>{children}</span>
            </button>
            <div {...styles.icon({ appearance, themeName })}>
              <Icon>
                <CaretDown />
              </Icon>
            </div>
          </div>
        </Halo>
        <ErrorIcon error={error} />
      </div>
    )
  }
)

Button.displayName = 'Dropdown.Button'
import React, { forwardRef, useLayoutEffect, useRef } from 'react'
import { compose, css } from 'glamor'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import stylesheet from '../css'
import Icon from '@pluralsight/ps-design-system-icon'
import Halo from '@pluralsight/ps-design-system-halo'
import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import { CaretDown } from './caret-down'
import { ErrorIcon } from './error-icon'
import * as vars from '../vars'

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

interface DropdownButtonProps extends HTMLPropsFor<'button'> {
  appearance?: ValueOf<typeof vars.appearances>
  disabled?: boolean
  error?: boolean
  isOpen?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  setMenuPosition?: ({
    left,
    top,
    width
  }: {
    left: number
    top: number
    width: number
  }) => void
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
      const {
        left,
        bottom,
        width
      } = fieldContainerRef.current.getBoundingClientRect()
      const requestId = requestAnimationFrame(() =>
        setMenuPosition({ left, top: bottom, width })
      )
      return () => cancelAnimationFrame(requestId)
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
              <div {...styles.icon({ appearance, themeName })}>
                <Icon>
                  <CaretDown />
                </Icon>
              </div>
            </button>
          </div>
        </Halo>
        <ErrorIcon error={error} />
      </div>
    )
  }
)

Button.displayName = 'Dropdown.Button'

import React, { forwardRef, useLayoutEffect, useRef } from 'react'
import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import stylesheet from '../css/index.js'
import Icon from '@pluralsight/ps-design-system-icon'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Halo from '@pluralsight/ps-design-system-halo'
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
export const Button = forwardRef(
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
    const fieldContainerRef = useRef()
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
              {...filterReactProps(rest, { tagName: 'button' })}
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

Button.displayName = 'Dorpdown.Button'
Button.propTypes = {
  appearance: PropTypes.oneOf(
    Object.keys(vars.appearances).map(k => vars.appearances[k])
  ),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  setMenuPosition: PropTypes.func,
  size: PropTypes.oneOf(Object.values(vars.sizes)),
  themeName: PropTypes.string
}

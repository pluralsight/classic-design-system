import { WarningIcon, CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import * as vars from '../vars/index'

const styles = {
  button: ({
    error,
    size,
    themeName,
    isOpen
  }: {
    error: boolean
    size: ValueOf<typeof vars.sizes>
    themeName: ValueOf<typeof themeNames>
    isOpen: boolean
  }) => {
    const label = 'psds-select__button'
    return compose(
      css(stylesheet[`.${label}`]),
      error && css(stylesheet['.psds-select__button--error']),
      size === vars.sizes.small &&
        css(stylesheet['.psds-select__button--small']),
      css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      isOpen && css(stylesheet[`.${label}--is-open.psds-theme--${themeName}`])
    )
  },
  inner: () => css(stylesheet['.psds-select__button-inner']),
  icon: (themeName: ValueOf<typeof themeNames>) =>
    compose(
      css(stylesheet['.psds-select__icon']),
      css(stylesheet[`.psds-select__icon.psds-theme--${themeName}`])
    ),
  warningIcon: () => css(stylesheet['.psds-select__error'])
}

interface SelectButtonProps extends HTMLPropsFor<'button'> {
  disabled?: boolean
  error?: boolean
  isOpen?: boolean
  'aria-haspopup'?: 'listbox'
  onClick?: (evt: React.MouseEvent | React.KeyboardEvent) => void
  onKeyDown?: (evt: React.MouseEvent | React.KeyboardEvent) => void
  size?: ValueOf<typeof vars.sizes>
}

export const Button = React.forwardRef<HTMLButtonElement, SelectButtonProps>(
  (
    {
      children,
      disabled,
      error,
      onClick,
      size = vars.sizes.medium,
      isOpen = false,
      ...rest
    },
    ref
  ) => {
    const themeName = useTheme()

    return (
      <button
        {...styles.button({ error: Boolean(error), size, themeName, isOpen })}
        ref={ref}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        {...rest}
      >
        <div {...styles.inner()}>
          {children}
          <CaretDownIcon {...styles.icon(themeName)} />
        </div>
        {error && <WarningIcon {...styles.warningIcon()} />}
      </button>
    )
  }
)

Button.displayName = 'Select.Button'

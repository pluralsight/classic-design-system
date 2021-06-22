import { WarningIcon, CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports

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
    return glamor.compose(
      glamor.css(stylesheet[`.${label}`]),
      error && glamor.css(stylesheet['.psds-select__button--error']),
      size === vars.sizes.small &&
        glamor.css(stylesheet['.psds-select__button--small']),
      glamor.css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      isOpen &&
        glamor.css(stylesheet[`.${label}--is-open.psds-theme--${themeName}`])
    )
  },
  inner: () => glamor.css(stylesheet['.psds-select__button-inner']),
  icon: (themeName: ValueOf<typeof themeNames>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-select__icon']),
      glamor.css(stylesheet[`.psds-select__icon.psds-theme--${themeName}`])
    ),
  warningIcon: () => glamor.css(stylesheet['.psds-select__error'])
}

interface SelectButtonProps extends HTMLPropsFor<HTMLButtonElement> {
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

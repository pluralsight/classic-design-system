import Halo from '@pluralsight/ps-design-system-halo'
import Icon from '@pluralsight/ps-design-system-icon'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import glamor from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import { CaretDown } from './caret-down'
import { ErrorIcon } from './error-icon'
import * as vars from '../vars/index'

const styles = {
  field: (
    {
      appearance,
      error,
      size
    }: Pick<DropdownButtonProps, 'appearance' | 'error' | 'size'>,
    themeName: ValueOf<typeof themeNames>
  ) => {
    const label = 'psds-dropdown__field'
    const isSmall = size === vars.sizes.small

    return glamor.compose(
      glamor.css(stylesheet[`.${label}`]),
      isSmall && glamor.css(stylesheet[`.${label}.psds-dropdown--small`]),
      glamor.css(stylesheet[`.${label}--appearance-${appearance}`]),
      glamor.css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      error &&
        glamor.css(stylesheet[`.${label}-error.psds-theme--${themeName}`])
    )
  },
  fieldAligner: () => glamor.css(stylesheet['.psds-dropdown__field-aligner']),
  fieldContainer: () =>
    glamor.css(stylesheet['.psds-dropdown__field-container']),
  halo: () => glamor.css(stylesheet['.psds-dropdown__field-halo']),
  icon: (
    appearance: DropdownButtonProps['appearance'],
    themeName: ValueOf<typeof themeNames>
  ) => {
    const label = 'psds-dropdown__icon'

    return glamor.compose(
      glamor.css(stylesheet[`.${label}`]),
      glamor.css(stylesheet[`.${label}--appearance-${appearance}`]),
      glamor.css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  },
  inner: () => glamor.css(stylesheet['.psds-dropdown__field-inner'])
}

interface DropdownButtonProps extends HTMLPropsFor<'button'> {
  appearance?: ValueOf<typeof vars.appearances>
  disabled?: boolean
  error?: boolean
  isOpen?: boolean
  'aria-haspopup': 'listbox'
  onClick: (evt: React.MouseEvent | React.KeyboardEvent) => void
  onKeyDown: (evt: React.MouseEvent | React.KeyboardEvent) => void
  // TODO: see if we can make more of these non-null
  setMenuPosition: ({
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

export const Button = React.forwardRef<HTMLButtonElement, DropdownButtonProps>(
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
    const fieldContainerRef = React.useRef<HTMLDivElement>(null)
    React.useLayoutEffect(() => {
      if (!isOpen || !fieldContainerRef.current) return
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
              {...styles.field({ appearance, error, size }, themeName)}
              disabled={disabled}
              onClick={disabled ? undefined : onClick}
              ref={ref}
            >
              <span {...styles.inner()}>{children}</span>
              <div {...styles.icon(appearance, themeName)}>
                <Icon>
                  <CaretDown />
                </Icon>
              </div>
            </button>
          </div>
        </Halo>
        <ErrorIcon error={!!error} />
      </div>
    )
  }
)

Button.displayName = 'Dropdown.Button'

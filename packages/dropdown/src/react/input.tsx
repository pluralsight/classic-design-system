import ScreenReaderOnly from '@pluralsight/ps-design-system-screenreaderonly'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import React, { forwardRef, ReactText } from 'react'

interface DropdownInputProps extends HTMLPropsFor<'input'> {
  activeItemId?: string
  disabled?: boolean
  isOpen: boolean
  labelId: string
  menuId: string
  selectedLabel?: string
  selectedValue?: ReactText
}

export const Input = forwardRef<HTMLInputElement, DropdownInputProps>(
  (
    // TODO: rename labelId to inputId
    {
      activeItemId,
      disabled,
      isOpen,
      labelId,
      menuId,
      selectedLabel,
      selectedValue,
      ...rest
    },
    ref
  ) => {
    const value = selectedValue || selectedLabel || ''
    return (
      <ScreenReaderOnly key={value}>
        <input
          id={labelId}
          defaultValue={value}
          disabled={disabled}
          ref={ref}
          tabIndex={-1}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-activedescendant={activeItemId}
          {...rest}
        />
      </ScreenReaderOnly>
    )
  }
)

Input.displayName = 'Dropdown.Input'

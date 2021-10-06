import { useTheme } from '@pluralsight/ps-design-system-theme'
import { classNames } from '@pluralsight/ps-design-system-util'
import React from 'react'

import '../css/index.css'
interface SelectSelectedProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'placeholder'> {
  label?: React.ReactText
  placeholder?: React.ReactText
}

export const Selected: React.FC<SelectSelectedProps> = ({
  placeholder,
  label,
  className
}) => {
  const themeName = useTheme()
  return (
    <>
      <span
        className={classNames(
          className,
          'psds-select__selected',
          Boolean(placeholder) &&
            `psds-select__placeholder psds-theme--${themeName}`
        )}
      >
        {label || placeholder}
      </span>
    </>
  )
}

Selected.displayName = 'Select.Selected'

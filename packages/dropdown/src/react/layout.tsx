import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import React from 'react'
import { compose, css } from 'glamor'
import stylesheet from '../css'

const styles = ({ disabled }) => {
  const label = 'psds-dropdown'

  return compose(
    css(stylesheet[`.${label}`]),
    disabled && css(stylesheet[`.${label}--disabled`])
  )
}

interface DropdownLayoutProps extends HTMLPropsFor<'label'> {
  button: React.ReactNode
  disabled?: boolean
  label?: React.ReactNode
  menu?: React.ReactNode
  onKeyDown?: (e: React.KeyboardEvent) => void
  subLabel?: React.ReactNode
}

export const Layout: React.FC<DropdownLayoutProps> = ({
  className,
  button,
  disabled,
  label,
  menu,
  onKeyDown,
  style,
  subLabel
}) => {
  return (
    <label
      {...styles({ disabled })}
      style={style}
      className={className}
      onKeyDown={onKeyDown}
    >
      {label}
      {button}
      {menu}
      {subLabel}
    </label>
  )
}

Layout.displayName = 'Dropdown.Layout'

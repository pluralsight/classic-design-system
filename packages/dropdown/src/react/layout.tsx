import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  layout: (disabled?: boolean) =>
    glamor.css(
      stylesheet[`.psds-dropdown`],
      disabled && stylesheet[`.psds-dropdown--disabled`]
    )
}

interface DropdownLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  button: React.ReactNode
  disabled?: boolean
  input?: React.ReactNode
  label?: React.ReactNode
  menu?: React.ReactNode
  onKeyDown?: (e: React.KeyboardEvent) => void
  subLabel?: React.ReactNode
}

export const Layout: React.FC<DropdownLayoutProps> = ({
  button,
  disabled,
  input,
  label,
  menu,
  onKeyDown,
  subLabel,
  ...rest
}) => {
  return (
    <div {...styles.layout(disabled)} onKeyDown={onKeyDown} {...rest}>
      {label}
      {input}
      {button}
      {menu}
      {subLabel}
    </div>
  )
}

Layout.displayName = 'Dropdown.Layout'

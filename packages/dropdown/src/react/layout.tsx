import React, {HTMLAttributes} from 'react'
import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import stylesheet from '../css/index.js'

const styles = ({ disabled }) => {
  const label = 'psds-dropdown'

  return compose(
    css(stylesheet[`.${label}`]),
    disabled && css(stylesheet[`.${label}--disabled`])
  )
}

interface DropdownLayoutProps extends HTMLAttributes<HTMLLabelElement> {
  button: React.ReactNode,
  disabled: boolean,
  label: React.ReactNode
  menu: React.ReactNode,
  onKeyDown: () => void,
  subLabel: React.ReactNode
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

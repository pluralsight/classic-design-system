import React from 'react'
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

export const Layout = ({
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
Layout.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  button: PropTypes.node,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  menu: PropTypes.node,
  onKeyDown: PropTypes.func,
  subLabel: PropTypes.node
}

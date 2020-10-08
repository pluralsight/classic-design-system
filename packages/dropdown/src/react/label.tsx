import React from 'react'
import { compose, css } from 'glamor'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import stylesheet from '../css'

const styles = ({ themeName }) => {
  const label = 'psds-dropdown__label'

  return compose(
    css(stylesheet[`.${label}`]),
    css(stylesheet[`.${label}.psds-theme--${themeName}`])
  )
}

export const Label: React.FC<{ label?: React.ReactNode }> = ({ label }) => {
  const themeName = useTheme()
  return label ? <div {...styles({ themeName })}>{label}</div> : null
}

Label.displayName = 'Dropdown.Label'

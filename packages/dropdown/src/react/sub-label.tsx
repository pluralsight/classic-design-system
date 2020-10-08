import React from 'react'
import { compose, css } from 'glamor'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import stylesheet from '../css'

const styles = ({ themeName }) => {
  const label = 'psds-dropdown__sub-label'

  return compose(
    css(stylesheet[`.${label}`]),
    css(stylesheet[`.${label}.psds-theme--${themeName}`])
  )
}

export const SubLabel: React.FC<{ subLabel?: React.ReactNode }> = ({
  subLabel
}) => {
  const themeName = useTheme()
  return subLabel ? <div {...styles({ themeName })}>{subLabel}</div> : null
}

SubLabel.displayName = 'Dropdown.SubLabel'

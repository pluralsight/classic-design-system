import { ValueOf } from '@pluralsight/ps-design-system-util'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { compose, css } from 'glamor'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = (themeName: ValueOf<typeof themeNames>) => {
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
  return subLabel ? <div {...styles(themeName)}>{subLabel}</div> : null
}

SubLabel.displayName = 'Dropdown.SubLabel'

import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = (themeName: ValueOf<typeof themeNames>) => {
  const label = 'psds-dropdown__sub-label'

  return glamor.compose(
    glamor.css(stylesheet[`.${label}`]),
    glamor.css(stylesheet[`.${label}.psds-theme--${themeName}`])
  )
}

export const SubLabel: React.FC<{ subLabel?: React.ReactNode }> = ({
  subLabel
}) => {
  const themeName = useTheme()
  return subLabel ? <div {...styles(themeName)}>{subLabel}</div> : null
}

SubLabel.displayName = 'Dropdown.SubLabel'

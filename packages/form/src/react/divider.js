import { css } from 'glamor'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'

const styles = {
  divider: ({ themeName }) =>
    css(
      stylesheet['.psds-form-divider'],
      stylesheet[`.psds-form-divider.psds-theme--${themeName}`]
    )
}

const Divider = props => {
  const themeName = useTheme()

  return (
    <div
      {...styles.divider({
        ...props,
        themeName
      })}
    />
  )
}
Divider.displayName = 'Divider'

export default Divider

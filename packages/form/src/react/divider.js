import * as glamor from 'glamor'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'

const styles = {
  divider: ({ themeName }) =>
    glamor.css(
      css['.psds-form-divider'],
      css[`.psds-form-divider.psds-theme--${themeName}`]
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

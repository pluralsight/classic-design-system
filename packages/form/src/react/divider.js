import * as glamor from 'glamor'
import PropTypes from 'prop-types'
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
Divider.contextTypes = {
  themeName: PropTypes.string
}

export default Divider

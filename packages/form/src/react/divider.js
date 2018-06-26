import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'

import css from '../css'

const styles = {
  divider: ({ themeName }) =>
    glamor.css(
      css['.psds-form-divider'],
      css[`.psds-form-divider.psds-theme--${themeName}`]
    )
}

const Divider = (props, context) => (
  <div
    {...styles.divider({
      ...props,
      themeName: context.themeName || themeDefaultName
    })}
  />
)
Divider.displayName = 'Divider'
Divider.contextTypes = {
  themeName: PropTypes.string
}

export default Divider

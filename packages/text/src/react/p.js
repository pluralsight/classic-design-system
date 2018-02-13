import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/react'

import css from '../css'

const style = ({ themeName }) =>
  glamor.css({
    ...css[`.psds-text__p.psds-theme--${themeName}`],
    ...css[`.psds-text__p`]
  })

const P = (props, context) => (
  <p {...props} {...style({ ...props, themeName: context.themeName })}>
    {props.children}
  </p>
)

P.contextTypes = {
  themeName: PropTypes.string
}

export default P

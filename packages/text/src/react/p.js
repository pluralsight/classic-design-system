import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'

import css from '../css'

const style = ({ themeName }) =>
  glamor.css({
    ...css[`.psds-text__p`],
    ...css[`.psds-text__p.psds-theme--${themeName}`]
  })

const P = (props, context) => {
  const themeName = context.themeName || themeDefaultName

  return (
    <p {...props} {...style({ ...props, themeName })}>
      {props.children}
    </p>
  )
}

P.contextTypes = {
  themeName: PropTypes.string
}

export default P

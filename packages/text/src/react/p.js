import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import css from '../css/index.js'

const style = ({ themeName }) =>
  glamor.css({
    ...css[`.psds-text__p`],
    ...css[`.psds-text__p.psds-theme--${themeName}`]
  })

const P = (props, context) => {
  const themeName = useTheme()

  return (
    <p {...props} {...style({ ...props, themeName })}>
      {props.children}
    </p>
  )
}

P.propTypes = {
  children: PropTypes.node
}

export default P

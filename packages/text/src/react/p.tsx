import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'

const style = ({ themeName }) =>
  compose(
    css(stylesheet[`.psds-text__p`]),
    css(stylesheet[`.psds-text__p.psds-theme--${themeName}`])
  )

const P = props => {
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

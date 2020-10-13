import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'

const style = ({ themeName }) =>
  compose(
    css(stylesheet[`.psds-text__code`]),
    css(stylesheet[`.psds-text__code.psds-theme--${themeName}`])
  )
const Code = props => {
  const themeName = useTheme()

  return props.children ? (
    <code {...props} {...style({ ...props, themeName })}>
      {props.children}
    </code>
  ) : null
}

Code.propTypes = {
  children: PropTypes.node
}

export default Code

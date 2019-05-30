import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'

const style = ({ themeName }) =>
  glamor.css({
    ...css[`.psds-text__code`],
    ...css[`.psds-text__code.psds-theme--${themeName}`]
  })

const Code = (props, context) => {
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

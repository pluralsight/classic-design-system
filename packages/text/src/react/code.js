import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { useFeatureFlags } from '@pluralsight/ps-design-system-featureflags'

import stylesheet from '../css/index.js'

const style = ({ themeName, psds2020Colors }) => {
  const flag = psds2020Colors ? '.psds-text--2020-colors' : ''
  return compose(
    css(stylesheet[`.psds-text__code`]),
    css(stylesheet[`.psds-text__code.psds-theme--${themeName}${flag}`])
  )
}
const Code = props => {
  const themeName = useTheme()
  const {
    flags: { psds2020Colors }
  } = useFeatureFlags()

  return props.children ? (
    <code {...props} {...style({ ...props, themeName, psds2020Colors })}>
      {props.children}
    </code>
  ) : null
}

Code.propTypes = {
  children: PropTypes.node
}

export default Code

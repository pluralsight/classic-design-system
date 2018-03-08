import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/react'

import css from '../css'

const style = ({ themeName }) =>
  glamor.css({
    ...css[`.psds-text__code`],
    ...css[`.psds-text__code.psds-theme--${themeName}`]
  })

const Code = (props, context) =>
  props.children ? (
    <code {...props} {...style({ ...props, themeName: context.themeName })}>
      {props.children}
    </code>
  ) : null

Code.contextTypes = {
  themeName: PropTypes.string
}

export default Code

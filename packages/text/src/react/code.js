import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'

const style = ({ themeName }) =>
  glamor.css({
    ...css[`.psds-text__code`],
    ...css[`.psds-text__code.psds-theme--${themeName}`]
  })

const Code = (props, context) =>
  props.children ? (
    <code
      {...props}
      {...style({ ...props, themeName: context.themeName || themeDefaultName })}
    >
      {props.children}
    </code>
  ) : null

Code.contextTypes = {
  themeName: PropTypes.string
}
Code.propTypes = {
  children: PropTypes.node
}

export default Code

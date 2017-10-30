import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/react'

const style = ({ themeName }) =>
  glamor.css({
    color:
      themeName === themeNames.light ? core.colors.gray06 : core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    margin: `${core.layout.spacingSmall} 0`,
    lineHeight: core.type.lineHeightStandard
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

import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'

import css from '../css'
import * as vars from '../vars'

const style = props =>
  glamor.css({
    ...css['.psds-text__heading'],
    ...css[`.psds-text__heading.psds-theme--${props.themeName}`],
    ...css[`.psds-text__heading--size-${props.size}`],
    ...css[
      `.psds-text__heading--size-${props.size}.psds-theme--${props.themeName}`
    ]
  })

const rmChildren = ({ children, ...rest }) => rest

const Heading = (props, context) =>
  React.cloneElement(React.Children.only(props.children), {
    ...rmChildren(props),
    ...style({
      ...props,
      themeName: context.themeName || themeDefaultName
    }),
    className: props.className
  })

Heading.propTypes = {
  size: PropTypes.oneOf(Object.keys(vars.headingSizes))
}
Heading.defaultProps = {
  size: vars.headingSizes.large
}
Heading.contextTypes = {
  themeName: PropTypes.string
}

Heading.sizes = vars.headingSizes

export const sizes = vars.headingSizes

export default Heading

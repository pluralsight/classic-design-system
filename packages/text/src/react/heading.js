import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import css from '../css/index.js'
import * as vars from '../vars/index.js'

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

const Heading = (props, context) => {
  const themeName = useTheme()

  return React.cloneElement(React.Children.only(props.children), {
    ...rmChildren(props),
    ...style({
      ...props,
      themeName
    }),
    className: props.className
  })
}

Heading.propTypes = {
  size: PropTypes.oneOf(Object.keys(vars.headingSizes))
}
Heading.defaultProps = {
  size: vars.headingSizes.large
}

Heading.sizes = vars.headingSizes

export const sizes = vars.headingSizes

export default Heading

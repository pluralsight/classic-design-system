import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { useFeatureFlags } from '@pluralsight/ps-design-system-featureflags'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const style = props => {
  const flag = props.psds2020Colors ? '.psds-button--psds2020Colors' : ''
  return compose(
    css(stylesheet['.psds-text__heading']),
    css(
      stylesheet[`.psds-text__heading.psds-theme--${props.themeName}${flag}`]
    ),
    css(stylesheet[`.psds-text__heading--size-${props.size}`]),
    css(
      stylesheet[
        `.psds-text__heading--size-${props.size}.psds-theme--${props.themeName}${flag}`
      ]
    )
  )
}
const rmChildren = ({ children, ...rest }) => rest

const Heading = props => {
  const themeName = useTheme()
  const {
    flags: { psds2020Colors }
  } = useFeatureFlags()

  return React.cloneElement(React.Children.only(props.children), {
    ...rmChildren(props),
    ...style({
      ...props,
      themeName,
      psds2020Colors
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

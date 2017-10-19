import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import React from 'react'

const sizes = {
  smallCaps: 'smallCaps',
  medium: 'medium',
  large: 'large',
  xLarge: 'xLarge'
}

const style = props =>
  glamor.css({
    color: core.colors.white,
    margin: `${core.layout.spacingMedium} 0`,
    ...(({ size }) =>
      ({
        [sizes.smallCaps]: {
          color: core.colors.gray02,
          textTransform: 'uppercase',
          fontSize: core.type.fontSizeXSmall,
          letterSpacing: core.type.letterSpacingXSmall,
          lineHeight: core.type.lineHeighTight,
          fontWeight: core.type.fontWeightMedium
        },
        [sizes.medium]: {
          fontSize: core.type.fontSizeMedium,
          letterSpacing: core.type.letterSpacingMedium,
          lineHeight: core.type.lineHeightStandard,
          fontWeight: core.type.fontWeightMedium
        },
        [sizes.large]: {
          fontSize: core.type.fontSizeLarge,
          letterSpacing: core.type.letterSpacingLarge,
          lineHeight: core.type.lineHeightStandard,
          fontWeight: core.type.fontWeightBook
        },
        [sizes.xLarge]: {
          fontSize: core.type.fontSizeXXLarge,
          letterSpacing: core.type.letterSpacingXXLarge,
          lineHeight: core.type.lineHeightHuge,
          fontWeight: core.type.fontWeightLight
        }
      }[size]))(props)
  })

const rmChildren = ({ children, ...rest }) => rest

const Heading = props =>
  React.cloneElement(React.Children.only(props.children), {
    ...rmChildren(props),
    ...style(props),
    className: props.className
  })

import PropTypes from 'prop-types'
Heading.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes))
}
Heading.defaultProps = {
  size: sizes.smallCaps
}
Heading.sizes = sizes
export default Heading

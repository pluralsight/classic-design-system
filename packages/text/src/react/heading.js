import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'

export const sizes = {
  smallCaps: 'smallCaps',
  medium: 'medium',
  large: 'large',
  xLarge: 'xLarge'
}

const style = props =>
  glamor.css({
    margin: `${core.layout.spacingMedium} 0`,
    ...(({ themeName }) =>
      ({
        [themeNames.light]: {
          color: core.colors.gray06
        },
        [themeNames.dark]: {
          color: core.colors.white
        }
      }[themeName]))(props),
    ...(({ size, themeName }) =>
      ({
        [sizes.smallCaps]: {
          color:
            themeName === themeNames.light
              ? core.colors.gray03
              : core.colors.gray02,
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
          lineHeight: core.type.lineHeightExtra,
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
  size: PropTypes.oneOf(Object.keys(sizes))
}
Heading.defaultProps = {
  size: sizes.large
}
Heading.contextTypes = {
  themeName: PropTypes.string
}

Heading.sizes = sizes
export default Heading

import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import React from 'react'

export const appearances = { stroke: 'stroke', flat: 'flat' }

export const sizes = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large'
}

export const iconAligns = { left: 'left', right: 'right' }

const styleSize = ({ size }) =>
  ({
    tiny: {
      fontSize: core.type.fontSizeXSmall,
      lineHeight: core.type.lineHeightStandard,
      padding: `0 ${core.layout.spacingXSmall}`,
      height: '24px'
    },
    small: {
      fontSize: core.type.fontSizeSmall,
      lineHeight: core.type.lineHeightStandard,
      padding: `${core.layout.spacingTiny} ${core.layout.spacingXSmall}`,
      height: '32px'
    },
    medium: {
      fontSize: core.type.fontSizeSmall,
      lineHeight: core.type.lineHeightStandard,
      padding: `${core.layout.spacingTiny} ${core.layout.spacingMedium}`,
      height: '40px'
    },
    large: {
      fontSize: core.type.fontSizeMedium,
      lineHeight: core.type.lineHeightExtra,
      padding: `${core.layout.spacingTiny} ${core.layout.spacingMedium}`,
      height: '48px'
    }
  }[size])

const styleAppearance = ({ appearance }) =>
  ({
    stroke: {
      border: `1px solid ${core.colors.orange}`,
      color: core.colors.orange,
      background: 'none',
      ':hover': {
        border: `1px solid ${core.colors.orangeLight}`,
        color: core.colors.orangeLight,
        background: 'none'
      }
    },
    flat: {
      border: 'none',
      color: core.colors.gray02,
      background: 'none',
      ':hover': {
        color: core.colors.white,
        background: core.colors.gray04
      }
    }
  }[appearance])

const styleDisabled = ({ disabled, appearance }) =>
  disabled
    ? {
        color: core.colors.gray02,
        background: core.colors.gray03,
        ':hover': { color: core.colors.gray02, background: core.colors.gray03 }
      }
    : null

const styleDisabledStroke = ({ disabled, appearance }) =>
  disabled && appearance === 'stroke'
    ? {
        border: 'none',
        ':hover': {
          border: 'none'
        }
      }
    : null

const styleDisabledFlat = ({ disabled, appearance }) =>
  disabled && appearance === 'flat'
    ? {
        opacity: 0.4,
        background: 'none',
        ':hover': { color: core.colors.gray02, background: 'none' }
      }
    : null

const styleIconAlign = ({ iconAlign }) =>
  iconAlign === 'right' ? { flexDirection: 'row-reverse' } : null

const styleIconOnly = ({ iconOnly, size }) =>
  iconOnly
    ? {
        padding: 0,
        width: { tiny: '24px', small: '32px', medium: '40px', large: '48px' }[
          size
        ]
      }
    : null

const Button = glamorous.button(
  {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: `${core.layout.spacingSmall} ${core.layout.spacingMedium}`,
    border: 0,
    borderRadius: 2,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    fontWeight: core.type.fontWeightMedium,
    textAlign: 'center',
    color: core.colors.white,
    background: core.colors.orange,
    cursor: 'pointer',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    transition: `all ${core.motion.speedNormal}`,
    ':hover': {
      background: core.colors.orangeLight
    }
  },
  styleSize,
  styleAppearance,
  styleDisabled,
  styleDisabledStroke,
  styleDisabledFlat,
  styleIconAlign,
  styleIconOnly
)

const styleIconAlignIconContainer = ({ iconAlign }) =>
  iconAlign === 'right'
    ? {
        marginRight: 0,
        marginLeft: core.layout.spacingXSmall
      }
    : null

const styleIconOnlyIconContainer = ({ iconOnly }) =>
  iconOnly ? { margin: 0 } : null

const IconContainer = glamorous.div(
  {
    display: 'flex',
    alignItems: 'center',
    minHeight: '100%',
    marginRight: core.layout.spacingXSmall
  },
  styleIconAlignIconContainer,
  styleIconOnlyIconContainer
)

const mapIconSize = props => {
  const btnToIconSizes = {
    tiny: 'tiny',
    small: 'small',
    medium: 'small',
    large: 'small'
  }
  return btnToIconSizes[props.size] ? btnToIconSizes[props.size] : 'small'
}

const styleIcon = _ => ({
  '> svg': { transition: `all ${core.motion.speedNormal}` }
})

const rmNonHtmlProps = props => {
  const { icon, ...rest } = props
  return rest
}

const renderIcon = props =>
  props.icon
    ? <IconContainer
        {...rmNonHtmlProps(props)}
        iconOnly={React.Children.count(props.children) <= 0}
      >
        {React.cloneElement(props.icon, {
          css: styleIcon(),
          size: mapIconSize(props)
        })}
      </IconContainer>
    : null

const Btn = props =>
  <Button
    {...rmNonHtmlProps(props)}
    iconOnly={React.Children.count(props.children) <= 0}
  >
    {renderIcon(props)}<span>{props.children}</span>
  </Button>

import PropTypes from 'prop-types'
Btn.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(appearances)),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  size: PropTypes.oneOf(Object.keys(sizes))
}
Btn.defaultProps = {
  disabled: false,
  size: sizes.medium
}

export default Btn

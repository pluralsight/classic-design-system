import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import glamorous from 'glamorous'
import Icon, {
  sizes as iconSizes
} from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/react'
import { transparentize } from 'polished'

import * as vars from '../vars'

const styleSize = ({ size }) =>
  ({
    [vars.sizes.xSmall]: {
      fontSize: core.type.fontSizeXSmall,
      lineHeight: core.type.lineHeightStandard,
      padding: `0 ${core.layout.spacingXSmall}`,
      height: '24px'
    },
    [vars.sizes.small]: {
      fontSize: core.type.fontSizeSmall,
      lineHeight: core.type.lineHeightStandard,
      padding: `${core.layout.spacingXXSmall} ${core.layout.spacingXSmall}`,
      height: '32px'
    },
    [vars.sizes.medium]: {
      fontSize: core.type.fontSizeSmall,
      lineHeight: core.type.lineHeightStandard,
      padding: `${core.layout.spacingXXSmall} ${core.layout.spacingMedium}`,
      height: '40px'
    },
    [vars.sizes.large]: {
      fontSize: core.type.fontSizeMedium,
      lineHeight: core.type.lineHeightExtra,
      padding: `${core.layout.spacingXXSmall} ${core.layout.spacingMedium}`,
      height: '48px'
    }
  }[size])

const styleAppearance = ({ appearance, themeName }) =>
  ({
    [vars.appearances.stroke]: {
      border: `1px solid ${core.colors.orange}`,
      color: core.colors.orange,
      background: 'none',
      ':hover': {
        border: `1px solid ${core.colors.orangeLight}`,
        color: core.colors.orangeLight,
        background: 'none'
      }
    },
    [vars.appearances.flat]: {
      border: 'none',
      color:
        themeName === themeNames.light
          ? core.colors.gray03
          : core.colors.gray02,
      background: 'none',
      ':hover':
        themeName === themeNames.light
          ? {
              background: transparentize(0.85, core.colors.gray03)
            }
          : {
              color: core.colors.white,
              background: transparentize(0.85, core.colors.white)
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

const styleIcon = ({ icon, iconAlign, iconOnly, size }) =>
  icon && !iconOnly
    ? {
        [iconAlign === vars.iconAligns.right ? 'paddingRight' : 'paddingLeft']:
          size === sizes.large
            ? core.layout.spacingSmall
            : core.layout.spacingXSmall
      }
    : null

const styleIconAlign = ({ iconAlign }) =>
  iconAlign === vars.iconAligns.right ? { flexDirection: 'row-reverse' } : null

const styleIconOnly = ({ iconOnly, size }) =>
  iconOnly
    ? {
        padding: 0,
        width: {
          [vars.sizes.xSmall]: '24px',
          [vars.sizes.small]: '32px',
          [vars.sizes.medium]: '40px',
          [vars.sizes.large]: '48px'
        }[size]
      }
    : null

const getButtonStyles = props =>
  glamor.css(
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
      textDecoration: 'none',
      transition: `all ${core.motion.speedNormal}`,
      ':hover': {
        background: core.colors.orangeLight
      }
    },
    styleSize(props),
    styleAppearance(props),
    styleDisabled(props),
    styleDisabledStroke(props),
    styleDisabledFlat(props),
    styleIcon(props),
    styleIconAlign(props),
    styleIconOnly(props),
    props.css
  )

const styleIconAlignIconContainer = ({ iconAlign }) =>
  iconAlign === vars.iconAligns.right
    ? {
        marginLeft: core.layout.spacingXSmall,
        marginRight: 0
      }
    : {
        marginLeft: 0,
        marginRight: core.layout.spacingXSmall
      }

const styleIconOnlyIconContainer = ({ iconOnly, isLoadingWithNoText }) =>
  iconOnly || isLoadingWithNoText
    ? { justifyContent: 'center', width: '100%', margin: 0 }
    : null

const IconContainer = glamorous.div(
  {
    display: 'flex',
    alignItems: 'center',
    minHeight: '100%'
  },
  styleIconAlignIconContainer,
  styleIconOnlyIconContainer
)

const mapIconSize = props => {
  const btnToIconSizes = {
    [vars.sizes.xSmall]: iconSizes.small,
    [vars.sizes.small]: iconSizes.medium,
    [vars.sizes.medium]: iconSizes.medium,
    [vars.sizes.large]: iconSizes.medium
  }
  return btnToIconSizes[props.size]
    ? btnToIconSizes[props.size]
    : iconSizes.medium
}

const rmNonHtmlProps = props => {
  const {
    appearance,
    icon,
    iconAlign,
    iconOnly,
    innerRef,
    size,
    themeName,
    ...rest
  } = props
  return rest
}

const spinAnimation = glamor.css.keyframes({
  '100%': {
    transform: 'rotate(360deg)'
  }
})
const LoadingIndicator = glamorous.span(
  {
    display: 'inline-block',
    height: 'calc(100% - 4px)',
    width: 'calc(100% - 4px)',
    margin: '2px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '100%',
    animation: `${spinAnimation} 1s linear infinite`
  },
  ({ appearance, themeName }) =>
    ({
      [vars.appearances.primary]: {
        borderColor: transparentize(0.8, core.colors.gray04),
        borderTopColor: core.colors.white
      },
      [vars.appearances.stroke]: {
        borderColor: transparentize(0.8, core.colors.white),
        borderTopColor: core.colors.orange
      },
      [vars.appearances.flat]: {
        borderColor:
          themeName === themeNames.light
            ? transparentize(0.8, core.colors.gray04)
            : transparentize(0.8, core.colors.white),
        borderTopColor:
          themeName === themeNames.light
            ? core.colors.gray04
            : core.colors.white
      }
    }[appearance])
)

const renderIcon = props =>
  props.loading ? (
    <IconContainer
      iconAlign={props.iconAlign}
      iconOnly={React.Children.count(props.children) <= 0}
      isLoadingNoText={props.isLoadingNoText}
    >
      <Icon size={mapIconSize(props)}>
        <LoadingIndicator
          appearance={props.appearance}
          themeName={props.themeName}
        />
      </Icon>
    </IconContainer>
  ) : props.icon ? (
    <IconContainer
      iconAlign={props.iconAlign}
      iconOnly={React.Children.count(props.children) <= 0}
      isLoadingNoText={props.isLoadingNoText}
    >
      {React.cloneElement(props.icon, {
        size: mapIconSize(props)
      })}
    </IconContainer>
  ) : null

const BtnText = glamorous.span({
  display: 'inline-flex',
  alignItems: 'center'
})

const buttonHtmlPropsWhitelist = [
  'href',
  'onClick',
  'onMouseDown',
  'disabled',
  'className',
  'style',
  'title',
  'tabIndex',
  /^aria-/,
  /^data-/
]

const isPropInWhitelist = (whitelist, key) =>
  whitelist.some(
    regex =>
      typeof regex === 'string' ? new RegExp(regex).test(key) : regex.test(key)
  )

const whitelistProps = (props, whitelist) =>
  Object.keys(props).reduce((newProps, key) => {
    if (isPropInWhitelist(whitelist, key)) newProps[key] = props[key]
    return newProps
  }, {})

class Button extends React.Component {
  render() {
    return React.createElement(
      this.props.href ? 'a' : 'button',
      {
        ...(this.props.innerRef ? { ref: this.props.innerRef } : {}),
        ...getButtonStyles(this.props),
        ...whitelistProps(this.props, buttonHtmlPropsWhitelist),
        disabled: this.props.disabled || this.props.loading
      },
      this.props.children
    )
  }
}

class Btn extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loading && !this.props.icon && this.el) {
      this.nonLoadingWidth = this.el.offsetWidth
    } else {
      this.nonLoadingWidth = null
    }
  }
  render() {
    const { context, props } = this
    const isLoadingWithNoText = !!this.nonLoadingWidth
    return (
      <Button
        {...props}
        iconOnly={React.Children.count(props.children) <= 0}
        innerRef={el => {
          this.el = el
          if (typeof props.innerRef === 'function') props.innerRef(el)
        }}
        style={isLoadingWithNoText ? { width: this.nonLoadingWidth } : {}}
        themeName={context.themeName}
      >
        {renderIcon({
          ...props,
          isLoadingWithNoText,
          themeName: context.themeName
        })}
        {!isLoadingWithNoText && <BtnText>{props.children}</BtnText>}
      </Button>
    )
  }
}

Btn.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  iconAlign: PropTypes.oneOf(Object.keys(vars.iconAligns)),
  innerRef: PropTypes.func,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(vars.sizes))
}
Btn.defaultProps = {
  appearance: vars.appearances.primary,
  disabled: false,
  loading: false,
  size: vars.sizes.medium
}
Btn.contextTypes = {
  themeName: PropTypes.string
}

Btn.appearances = vars.appearances
Btn.iconAligns = vars.iconAligns
Btn.sizes = vars.sizes

export const appearances = vars.appearances
export const iconAlignss = vars.iconAlignss
export const sizes = vars.sizes

export default Btn

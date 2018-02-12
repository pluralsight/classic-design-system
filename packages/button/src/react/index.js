import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import glamorous from 'glamorous'
import Icon, {
  sizes as iconSizes
} from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'
import { transparentize } from 'polished'

import css from '../css'
import * as vars from '../vars'

const styleSize = ({ size }) => css[`.psds-button--size-${size}`]

const styleAppearance = ({ appearance, themeName }) => ({
  ...css[`.psds-button--appearance-${appearance}`],
  ...css[`.psds-button--appearance-${appearance}.psds-theme--${themeName}`],
  ':hover': {
    ...css[`.psds-button--appearance-${appearance}:hover`],
    ...css[
      `.psds-button--appearance-${appearance}.psds-theme--${themeName}:hover`
    ]
  }
})

const styleDisabled = ({ disabled, appearance }) =>
  disabled
    ? {
        ...css[`.psds-button--disabled`],
        ...css[`.psds-button--disabled.psds-button--appearance-${appearance}`],
        ':hover': {
          ...css[`.psds-button--disabled:hover`],
          ...css[
            `.psds-button--disabled.psds-button--appearance-${appearance}:hover`
          ]
        }
      }
    : null

const styleIcon = ({ icon, iconAlign, iconOnly, size }) =>
  icon && !iconOnly
    ? {
        ...css[
          `.psds-button--iconAlign-${iconAlign}.psds-button--not-iconOnly`
        ],
        ...css[
          `.psds-button--iconAlign-${iconAlign}.psds-button--not-iconOnly.psds-button--size-${size}`
        ]
      }
    : null

const styleIconAlign = ({ iconAlign }) =>
  iconAlign === vars.iconAligns.right
    ? css[`.psds-button--iconAlign-${iconAlign}`]
    : null

const styleIconOnly = ({ iconOnly, size }) =>
  iconOnly
    ? {
        ...css[`.psds-button--iconOnly`],
        ...css[`.psds-button--iconOnly.psds-button--size-${size}`]
      }
    : null

const getButtonStyles = props =>
  glamor.css(
    {
      ...css['.psds-button'],
      ':hover': css['.psds-button:hover']
    },
    styleSize(props),
    styleAppearance(props),
    styleDisabled(props),
    styleIcon(props),
    styleIconAlign(props),
    styleIconOnly(props),
    props.css
  )

const styleIconAlignIconContainer = ({ iconAlign }) =>
  css[`.psds-button__icon--iconAlign-${iconAlign}`]

const styleIconOnlyIconContainer = ({ iconOnly, isLoadingWithNoText }) =>
  iconOnly || isLoadingWithNoText ? css['.psds-button__icon--iconOnly'] : null

const IconContainer = glamorous.div(
  css['.psds-button__icon'],
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

const spin = glamor.css.keyframes(
  css['@keyframes psds-button__keyframes__spin']
)
const LoadingIndicator = glamorous.span(
  css[`.psds-button__loading`]({ spin }),
  ({ appearance, themeName }) => ({
    ...css[`.psds-button__loading--appearance-${appearance}`],
    ...css[
      `.psds-button__loading--appearance-${appearance}.psds-button__loading--theme-${themeName}`
    ]
  })
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

const BtnText = glamorous.span(css[`.psds-button__text`])

const buttonHtmlPropsWhitelist = [
  'href',
  'onClick',
  'disabled',
  'className',
  'style',
  'title',
  'tabIndex',
  /onMouse/,
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
    const whitelistedProps =
      this.props.disabled && this.props.href
        ? buttonHtmlPropsWhitelist.filter(prop => prop !== 'onClick')
        : buttonHtmlPropsWhitelist

    return React.createElement(
      this.props.href ? 'a' : 'button',
      {
        ...(this.props.innerRef ? { ref: this.props.innerRef } : {}),
        ...getButtonStyles(this.props),
        ...whitelistProps(this.props, whitelistedProps),
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
        style={
          isLoadingWithNoText
            ? { ...props.style, width: this.nonLoadingWidth }
            : props.style || {}
        }
        themeName={context.themeName || themeDefaultName}
      >
        {renderIcon({
          ...props,
          isLoadingWithNoText,
          themeName: context.themeName || themeDefaultName
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
  iconAlign: vars.iconAligns.left,
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
export const iconAligns = vars.iconAligns
export const sizes = vars.sizes

export default Btn

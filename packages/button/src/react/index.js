import * as glamor from 'glamor'
import Icon, {
  sizes as iconSizes
} from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import * as propsUtil from '@pluralsight/ps-design-system-util/props'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'

import css from '../css'
import * as vars from '../vars'

const spin = glamor.css.keyframes(
  css['@keyframes psds-button__keyframes__spin']
)
const styles = {
  button: ({
    appearance,
    disabled,
    css: cssProp,
    icon,
    iconAlign,
    iconOnly,
    size,
    themeName
  }) =>
    glamor.css(
      {
        ...css['.psds-button'],
        ':hover': css['.psds-button:hover']
      },
      css[`.psds-button--size-${size}`],
      css[`.psds-button--appearance-${appearance}`],
      css[`.psds-button--appearance-${appearance}.psds-theme--${themeName}`],
      {
        ':hover': {
          ...css[`.psds-button--appearance-${appearance}:hover`],
          ...css[
            `.psds-button--appearance-${appearance}.psds-theme--${themeName}:hover`
          ]
        }
      },
      disabled && {
        ...css[`.psds-button--disabled`],
        ...css[`.psds-button--disabled.psds-button--appearance-${appearance}`],
        ':hover': {
          ...css[`.psds-button--disabled:hover`],
          ...css[
            `.psds-button--disabled.psds-button--appearance-${appearance}:hover`
          ]
        }
      },
      icon &&
        !iconOnly && {
          ...css[
            `.psds-button--iconAlign-${iconAlign}.psds-button--not-iconOnly`
          ],
          ...css[
            `.psds-button--iconAlign-${iconAlign}.psds-button--not-iconOnly.psds-button--size-${size}`
          ]
        },
      iconAlign === vars.iconAligns.right &&
        css[`.psds-button--iconAlign-${iconAlign}`],
      iconOnly && {
        ...css[`.psds-button--iconOnly`],
        ...css[`.psds-button--iconOnly.psds-button--size-${size}`]
      },
      cssProp
    ),
  loading: ({ appearance, themeName }) =>
    glamor.css(
      css[`.psds-button__loading`]({ spin }),
      css[`.psds-button__loading--appearance-${appearance}`],
      css[
        `.psds-button__loading--appearance-${appearance}.psds-button__loading--theme-${themeName}`
      ]
    ),
  icon: ({ iconAlign, iconOnly, isLoadingWithNoText }) =>
    glamor.css(
      css['.psds-button__icon'],
      css[`.psds-button__icon--iconAlign-${iconAlign}`],
      (iconOnly || isLoadingWithNoText) && css['.psds-button__icon--iconOnly']
    ),
  text: _ => glamor.css(css[`.psds-button__text`])
}

const buttonHtmlPropsWhitelist = [
  'href',
  'onClick',
  'disabled',
  'className',
  'role',
  'style',
  'title',
  'tabIndex',
  'target',
  /onMouse/,
  /^aria-/,
  /^data-/
]

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

const renderIcon = props =>
  props.loading ? (
    <div {...styles.icon(props)}>
      <Icon size={mapIconSize(props)}>
        <span {...styles.loading(props)} />
      </Icon>
    </div>
  ) : props.icon ? (
    <div {...styles.icon(props)}>
      {React.cloneElement(props.icon, {
        size: mapIconSize(props)
      })}
    </div>
  ) : null

class Button extends React.Component {
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
    const allProps = {
      ...props,
      isLoadingWithNoText,
      iconOnly: React.Children.count(props.children) <= 0,
      themeName: context.themeName || themeDefaultName
    }
    return React.createElement(
      this.props.href ? 'a' : 'button',
      {
        ...styles.button(allProps),
        ...propsUtil.whitelistProps(
          allProps,
          allProps.disabled && allProps.href
            ? buttonHtmlPropsWhitelist.filter(prop => prop !== 'onClick')
            : buttonHtmlPropsWhitelist
        ),
        disabled: this.props.disabled || this.props.loading,
        ref: el => {
          this.el = el
          if (typeof props.innerRef === 'function') props.innerRef(el)
        },
        style: isLoadingWithNoText
          ? { ...props.style, width: this.nonLoadingWidth }
          : props.style || {}
      },
      renderIcon(allProps),
      !isLoadingWithNoText && (
        <span {...styles.text(allProps)}>{allProps.children}</span>
      )
    )
  }
}

Button.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  iconAlign: PropTypes.oneOf(Object.keys(vars.iconAligns)),
  innerRef: PropTypes.func,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(vars.sizes))
}
Button.defaultProps = {
  appearance: vars.appearances.primary,
  disabled: false,
  iconAlign: vars.iconAligns.left,
  loading: false,
  size: vars.sizes.medium
}
Button.contextTypes = {
  themeName: PropTypes.string
}

Button.appearances = vars.appearances
Button.iconAligns = vars.iconAligns
Button.sizes = vars.sizes

export const appearances = vars.appearances
export const iconAligns = vars.iconAligns
export const sizes = vars.sizes

export default Button

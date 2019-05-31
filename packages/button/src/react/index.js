import * as glamor from 'glamor'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Icon, {
  sizes as iconSizes
} from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'
import * as vars from '../vars/index.js'

const spin = glamor.css.keyframes(
  css['@keyframes psds-button__keyframes__spin']
)

const styles = {
  button: ({
    appearance,
    css: cssProp,
    disabled,
    icon,
    iconAlign,
    iconOnly,
    loading,
    size,
    themeName
  }) =>
    glamor.css(
      {
        ...css['.psds-button'],
        ':focus': {
          ...css['.psds-button:focus'],
          ':before': {
            ...css['.psds-button:focus:before'],
            ...css[`.psds-button.psds-theme--${themeName}:focus:before`]
          },
          ':after': {
            ...css['.psds-button:focus:after'],
            ...css[`.psds-button.psds-theme--${themeName}:focus:after`]
          }
        }
      },
      css[`.psds-button--size-${size}`],
      css[`.psds-button--appearance-${appearance}`],
      css[`.psds-button--appearance-${appearance}.psds-theme--${themeName}`],
      !disabled &&
        !loading && {
          ':hover': {
            ...css['.psds-button:hover'],
            ...css[`.psds-button--appearance-${appearance}:hover`],
            ...css[
              `.psds-button--appearance-${appearance}.psds-theme--${themeName}:hover`
            ]
          }
        },
      disabled && {
        ...css[`.psds-button--disabled`],
        ...css[`.psds-button--disabled.psds-theme--${themeName}`],
        ...css[`.psds-button--disabled.psds-button--appearance-${appearance}`]
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

renderIcon.propTypes = {
  loading: PropTypes.bool,
  icon: PropTypes.element
}

const Button = React.forwardRef((props, ref) => {
  const themeName = useTheme()
  if (!ref) ref = React.useRef()
  const nonLoadingWidth = React.useMemo(
    () => {
      if (props.loading && ref && ref.current) {
        return ref.current.offsetWidth
      }
    },
    [props.loading, ref]
  )

  const tagName = props.href ? 'a' : 'button'
  const isLoadingWithNoText = !!nonLoadingWidth
  const allProps = {
    ...props,
    isLoadingWithNoText,
    iconOnly: React.Children.count(props.children) <= 0,
    themeName
  }

  const isDisabledLink = allProps.disabled && allProps.href
  let filteredProps = filterReactProps(props, { tagName })
  delete filteredProps.icon
  if (isDisabledLink) {
    delete filteredProps.onClick
  }

  return React.createElement(
    tagName,
    {
      ...styles.button(allProps),
      ...filteredProps,
      disabled: props.disabled || props.loading,
      ref,
      style: isLoadingWithNoText
        ? { ...props.style, width: nonLoadingWidth }
        : props.style || {}
    },
    renderIcon(allProps),
    !isLoadingWithNoText && (
      <span {...styles.text(allProps)}>{allProps.children}</span>
    )
  )
})

Button.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  children: PropTypes.any,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.element,
  iconAlign: PropTypes.oneOf(Object.keys(vars.iconAligns)),
  innerRef: PropTypes.func,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(vars.sizes)),
  style: PropTypes.object
}
Button.defaultProps = {
  appearance: vars.appearances.primary,
  disabled: false,
  iconAlign: vars.iconAligns.left,
  loading: false,
  size: vars.sizes.medium
}
Button.appearances = vars.appearances
Button.iconAligns = vars.iconAligns
Button.sizes = vars.sizes

export const appearances = vars.appearances
export const iconAligns = vars.iconAligns
export const sizes = vars.sizes

export default Button

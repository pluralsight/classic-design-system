import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { css } from 'glamor'
import Icon, { sizes as iconSizes } from '@pluralsight/ps-design-system-icon'
import PropTypes from 'prop-types'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { useFeatureFlags } from '@pluralsight/ps-design-system-featureflags'
import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const spin = css.keyframes(
  stylesheet['@keyframes psds-button__keyframes__spin']
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
    themeName,
    psds2020Colors
  }) => {
    const flag = psds2020Colors ? '.psds-button--2020-colors' : ''
    return css(
      stylesheet['.psds-button'],
      stylesheet[`.psds-button--size-${size}`],
      stylesheet[`.psds-button--appearance-${appearance}${flag}`],
      stylesheet[
        `.psds-button--appearance-${appearance}.psds-theme--${themeName}${flag}`
      ],
      disabled && {
        ...stylesheet[`.psds-button--disabled${flag}`],
        ...stylesheet[`.psds-button--disabled.psds-theme--${themeName}${flag}`],
        ...stylesheet[
          `.psds-button--disabled.psds-button--appearance-${appearance}${flag}`
        ]
      },
      icon &&
        !iconOnly && {
          ...stylesheet[
            `.psds-button--iconAlign-${iconAlign}.psds-button--not-iconOnly`
          ],
          ...stylesheet[
            `.psds-button--iconAlign-${iconAlign}.psds-button--not-iconOnly.psds-button--size-${size}`
          ]
        },
      iconAlign === vars.iconAligns.right &&
        stylesheet[`.psds-button--iconAlign-${iconAlign}`],
      iconOnly && {
        ...stylesheet[`.psds-button--iconOnly`],
        ...stylesheet[`.psds-button--iconOnly.psds-button--size-${size}`]
      },
      cssProp
    )
  },
  loading: ({ appearance, themeName }) =>
    css(
      stylesheet[`.psds-button__loading`]({ spin }),
      stylesheet[`.psds-button__loading--appearance-${appearance}`],
      stylesheet[
        `.psds-button__loading--appearance-${appearance}.psds-button__loading--theme-${themeName}`
      ]
    ),
  icon: ({ iconAlign, iconOnly, isLoadingWithNoText }) =>
    css(
      stylesheet['.psds-button__icon'],
      stylesheet[`.psds-button__icon--iconAlign-${iconAlign}`],
      (iconOnly || isLoadingWithNoText) &&
        stylesheet['.psds-button__icon--iconOnly']
    ),
  text: _ => css(stylesheet[`.psds-button__text`])
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
  const {
    flags: { psds2020Colors }
  } = useFeatureFlags()
  if (!ref) ref = React.useRef()
  const nonLoadingWidth = React.useMemo(() => {
    if (props.loading && ref && ref.current) {
      return ref.current.offsetWidth
    }
  }, [props.loading, ref])

  const tagName = props.href ? 'a' : 'button'
  const isLoadingWithNoText = !!nonLoadingWidth
  const allProps = {
    ...props,
    isLoadingWithNoText,
    iconOnly: React.Children.count(props.children) <= 0,
    themeName,
    psds2020Colors
  }

  const isDisabledLink = allProps.disabled && allProps.href
  const filteredProps = filterReactProps(props, { tagName })
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

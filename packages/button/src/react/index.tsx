import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { css, keyframes } from 'glamor'
import Icon, { sizes as iconSizes } from '@pluralsight/ps-design-system-icon'
import { RefForwardingComponent } from '@pluralsight/ps-design-system-util'
import React, { HTMLAttributes } from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import stylesheet from '../css'
import * as vars from '../vars'

const spin = keyframes(
  stylesheet['@keyframes psds-button__keyframes__spin']
)


interface ButtonStatics {
  appearances: typeof vars.appearances
  iconAligns: typeof vars.iconAligns 
  sizes: typeof vars.sizes
}


interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | Array<React.ReactNode>
  appearance:string,
  disabled: boolean,
  href: string,
  icon: React.ReactNode,
  iconAlign: string,
  loading: boolean,
  size: string,
}
interface ButtonComponent
  extends RefForwardingComponent<Props, HTMLDivElement, ButtonStatics> {}


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
    css(
      stylesheet['.psds-button'],
      stylesheet[`.psds-button--size-${size}`],
      stylesheet[`.psds-button--appearance-${appearance}`],
      stylesheet[
        `.psds-button--appearance-${appearance}.psds-theme--${themeName}`
      ],
      disabled && {
        ...stylesheet[`.psds-button--disabled`],
        ...stylesheet[`.psds-button--disabled.psds-theme--${themeName}`],
        ...stylesheet[
          `.psds-button--disabled.psds-button--appearance-${appearance}`
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
    ),
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
  text: () => css(stylesheet[`.psds-button__text`])
}

const mapIconSize = size => {
  const btnToIconSizes = {
    [vars.sizes.xSmall]: iconSizes.small,
    [vars.sizes.small]: iconSizes.medium,
    [vars.sizes.medium]: iconSizes.medium,
    [vars.sizes.large]: iconSizes.medium
  }
  return btnToIconSizes[size]
    ? btnToIconSizes[size]
    : iconSizes.medium
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  loading: boolean,
  icon: React.ReactNode,
  appearance: string,
  themeName: string,
  size: string,
  iconOnly: boolean
  isLoadingWithNoText: boolean
}
const renderIcon: React.FC<Props> = (props) =>
  props.loading ? (
    <div {...styles.icon({iconAlign: props.iconAlign, iconOnly: props.iconOnly, isLoadingWithNoText: props.isLoadingWithNoText})}>
      <Icon size={mapIconSize(props.size)}>
        <span {...styles.loading({ appearance: props.appearance, themeName: props.themeName })} />
      </Icon>
    </div>
  ) : props.icon ? (
    <div {...styles.icon({iconAlign: props.iconAlign, iconOnly: props.iconOnly, isLoadingWithNoText: props.isLoadingWithNoText})}>
      {React.cloneElement(props.icon, {
        size: mapIconSize(props.size)
      })}
    </div>
  ) : null

const Button = React.forwardRef<DynamicButton, Props>((props, forwardedRef) => {
  const themeName = useTheme()
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)
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
    themeName
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
      ...styles.button({
        appearance: props.appearance,
        css: props.css,
        disabled: props.disabled,
        icon: props.icon,
        iconAlign: props.iconAlign,
        iconOnly: props.iconOnly,
        loading: props.loading,
        size: props.size,
        themeName: props.themeName
      }),
      ...filteredProps,
      disabled: props.disabled || props.loading,
      ref,
      style: isLoadingWithNoText
        ? { ...props.style, width: nonLoadingWidth }
        : props.style || {}
    },
    renderIcon(allProps),
    !isLoadingWithNoText && (
      <span {...styles.text()}>{allProps.children}</span>
    )
  )
}) as ButtonComponent

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

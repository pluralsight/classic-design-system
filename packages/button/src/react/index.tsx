import Icon, { sizes as iconSizes } from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import { css, keyframes } from 'glamor'
import React, { Children, HTMLAttributes, RefObject } from 'react'

import stylesheet from '../css'
import * as vars from '../vars'

const spin = keyframes(stylesheet['@keyframes psds-button__keyframes__spin'])

const styles = {
  button: ({
    appearance,
    disabled,
    icon,
    iconAlign,
    iconOnly,
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
      }
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

const mapIconSize = (size: string) => {
  const btnToIconSizes = {
    [vars.sizes.xSmall]: iconSizes.small,
    [vars.sizes.small]: iconSizes.medium,
    [vars.sizes.medium]: iconSizes.medium,
    [vars.sizes.large]: iconSizes.medium
  }
  return btnToIconSizes[size] ? btnToIconSizes[size] : iconSizes.medium
}

interface RenderIconProps extends HTMLAttributes<HTMLDivElement> {
  loading: boolean
  icon: React.ReactNode
  appearance: string
  themeName: string
  size: string
  iconOnly: boolean
  isLoadingWithNoText: boolean
  iconAlign: string
}

const renderIcon: React.FC<RenderIconProps> = props =>
  props.loading ? (
    <div
      {...styles.icon({
        iconAlign: props.iconAlign,
        iconOnly: props.iconOnly,
        isLoadingWithNoText: props.isLoadingWithNoText
      })}
    >
      <Icon size={mapIconSize(props.size)}>
        <span
          {...styles.loading({
            appearance: props.appearance,
            themeName: props.themeName
          })}
        />
      </Icon>
    </div>
  ) : props.icon ? (
    <div
      {...styles.icon({
        iconAlign: props.iconAlign,
        iconOnly: props.iconOnly,
        isLoadingWithNoText: props.isLoadingWithNoText
      })}
    >
      {React.cloneElement(props.icon as React.ReactElement, {
        size: mapIconSize(props.size)
      })}
    </div>
  ) : null

interface ButtonStatics {
  appearances: typeof vars.appearances
  iconAligns: typeof vars.iconAligns
  sizes: typeof vars.sizes
}
interface BaseButtonProps {
  appearance?: ValueOf<typeof vars.appearances>
  // TODO: rm? dup of html attr
  disabled?: boolean
  icon?: React.ReactNode
  iconAlign?: ValueOf<typeof vars.iconAligns>
  loading?: boolean
  size?: ValueOf<typeof vars.sizes>
}
type AnchorEl = JSX.IntrinsicElements['a']
interface ButtonAnchorProps extends BaseButtonProps, AnchorEl {
  href: string
}
type ButtonEl = JSX.IntrinsicElements['button']
interface ButtonButtonProps extends BaseButtonProps, ButtonEl {
  href?: undefined
}
type ButtonProps = ButtonAnchorProps | ButtonButtonProps

type ButtonComponent = RefForwardingComponent<
  ButtonProps,
  HTMLAnchorElement | HTMLButtonElement,
  ButtonStatics
> & {
  (props: ButtonAnchorProps, ref?: RefObject<HTMLAnchorElement>): JSX.Element
  (props: ButtonButtonProps, ref?: RefObject<HTMLButtonElement>): JSX.Element
}

const Button = React.forwardRef((props, forwardedRef) => {
  const {
    appearance = vars.appearances.primary,
    children,
    disabled = false,
    icon,
    iconAlign = vars.iconAligns.left,
    loading = false,
    size = vars.sizes.medium,
    ...rest
  } = props

  const iconOnly = Children.count(children) <= 0

  const themeName = useTheme()

  const ref = React.useRef<HTMLAnchorElement | HTMLButtonElement>()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const nonLoadingWidth = React.useMemo(() => {
    if (loading && ref && ref.current) return ref.current.offsetWidth
  }, [loading, ref])
  const isLoadingWithNoText = !!nonLoadingWidth

  const glamorStyle = styles.button({
    appearance,
    disabled,
    icon,
    iconAlign,
    iconOnly,
    size,
    themeName
  })
  const style = {
    ...(props.style || {}),
    ...(isLoadingWithNoText && { width: nonLoadingWidth })
  }
  const iconEl = renderIcon({
    appearance,
    icon,
    iconAlign,
    iconOnly,
    isLoadingWithNoText,
    loading,
    size,
    themeName
  })
  const labelEl = !isLoadingWithNoText && (
    <span {...styles.text()}>{children}</span>
  )

  if ('href' in props && typeof props.href === 'string') {
    const anchorProps = rest as HTMLAttributes<HTMLAnchorElement>

    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...glamorStyle}
        {...anchorProps}
        onClick={disabled ? undefined : anchorProps.onClick}
        style={style}
      >
        {iconEl}
        {labelEl}
      </a>
    )
  } else {
    const buttonProps = rest as HTMLAttributes<HTMLButtonElement>
    delete (buttonProps as any).download

    return (
      <button
        disabled={disabled || loading}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...glamorStyle}
        {...buttonProps}
        style={style}
      >
        {iconEl}
        {labelEl}
      </button>
    )
  }
}) as ButtonComponent

Button.appearances = vars.appearances
Button.iconAligns = vars.iconAligns
Button.sizes = vars.sizes

export const appearances = vars.appearances
export const iconAligns = vars.iconAligns
export const sizes = vars.sizes

export default Button

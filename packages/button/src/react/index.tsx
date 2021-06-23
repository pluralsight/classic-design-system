import Icon, { sizes as iconSizes } from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  HTMLPropsFor,
  RefFor,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports

const spin = glamor.keyframes(
  stylesheet['@keyframes psds-button__keyframes__spin']
)

const styles = {
  button: ({
    appearance,
    disabled,
    icon,
    iconAlign,
    iconOnly,
    layout,
    size,
    themeName
  }) =>
    glamor.css(
      stylesheet['.psds-button'],
      stylesheet[`.psds-button--layout-${layout}`],
      stylesheet[`.psds-button--size-${size}`],
      stylesheet[`.psds-button--appearance-${appearance}`],
      stylesheet[`.psds-button.psds-theme--${themeName}`],
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
  loading: ({ appearance, size, themeName }) =>
    glamor.css(
      stylesheet[`.psds-button__loading`]({ spin }),
      stylesheet[`.psds-button__loading--size-${size}`],
      stylesheet[`.psds-button__loading--appearance-${appearance}`],
      stylesheet[
        `.psds-button__loading--appearance-${appearance}.psds-button__loading--theme-${themeName}`
      ]
    ),
  icon: ({ iconAlign, iconOnly, labelOnly, loading, size }) => {
    return glamor.css(
      stylesheet['.psds-button__icon'],
      stylesheet[`.psds-button__icon--iconAlign-${iconAlign}`],
      stylesheet[
        `.psds-button__icon--iconAlign-${iconAlign}.psds-button--size-${size}`
      ],
      (iconOnly || (loading && labelOnly)) &&
        stylesheet['.psds-button__icon--iconOnly'],
      loading && labelOnly && stylesheet['.psds-button__icon--loadingLabelOnly']
    )
  },
  text: (invisible?: boolean) =>
    glamor.compose(
      glamor.css(stylesheet[`.psds-button__text`]),
      invisible && glamor.css(stylesheet[`.psds-button__text--invisible`])
    )
}

const mapIconSize = (size: string) => {
  const btnToIconSizes = {
    [vars.sizes.xSmall]: iconSizes.xSmall,
    [vars.sizes.small]: iconSizes.small,
    [vars.sizes.medium]: iconSizes.medium,
    [vars.sizes.large]: iconSizes.medium
  }
  return btnToIconSizes[size] ? btnToIconSizes[size] : iconSizes.medium
}

interface IconContainerProps extends HTMLPropsFor<'div'> {
  labelOnly: boolean
  loading: boolean
  icon: React.ReactNode
  appearance: string
  themeName: string
  size: string
  iconOnly: boolean
  iconAlign: string
}

const IconContainer: React.FC<IconContainerProps> = props =>
  props.loading ? (
    <div
      {...styles.icon({
        iconAlign: props.iconAlign,
        iconOnly: props.iconOnly,
        labelOnly: props.labelOnly,
        loading: props.loading,
        size: props.size
      })}
    >
      <Icon size={mapIconSize(props.size)}>
        <span
          {...styles.loading({
            appearance: props.appearance,
            size: props.size,
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
        labelOnly: props.labelOnly,
        loading: props.loading,
        size: props.size
      })}
    >
      {React.cloneElement(props.icon as React.ReactElement, {
        size: mapIconSize(props.size)
      })}
    </div>
  ) : null

interface BaseButtonProps {
  appearance?: ValueOf<typeof vars.appearances>
  disabled?: boolean
  layout?: ValueOf<typeof vars.layouts>
  icon?: React.ReactNode
  iconAlign?: ValueOf<typeof vars.iconAligns>
  loading?: boolean
  size?: ValueOf<typeof vars.sizes>
}
interface ButtonAnchorProps extends BaseButtonProps, HTMLPropsFor<'a'> {
  href: string
}
interface ButtonButtonProps extends BaseButtonProps, HTMLPropsFor<'button'> {
  href?: undefined
}
type ButtonElement = HTMLAnchorElement | HTMLButtonElement
type ButtonProps = ButtonAnchorProps | ButtonButtonProps
interface ButtonStatics {
  appearances: typeof vars.appearances
  layouts: typeof vars.layouts
  iconAligns: typeof vars.iconAligns
  sizes: typeof vars.sizes
}

type ButtonComponent = React.ForwardRefExoticComponent<unknown> & {
  (props: ButtonAnchorProps, ref?: RefFor<'a'>): JSX.Element
  (props: ButtonButtonProps, ref?: RefFor<'button'>): JSX.Element
}

const Button = React.forwardRef<ButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const {
      appearance = vars.appearances.primary,
      children,
      disabled = false,
      icon,
      iconAlign = vars.iconAligns.left,
      layout = vars.layouts.inline,
      loading = false,
      size = vars.sizes.medium,
      ...rest
    } = props

    const themeName = useTheme()

    const ref = React.useRef<HTMLAnchorElement | HTMLButtonElement>()
    React.useImperativeHandle(forwardedRef, () => ref.current)

    const hasLabel = React.Children.count(children) > 0
    const iconOnly = !hasLabel

    const glamorStyle = styles.button({
      appearance,
      disabled,
      icon,
      iconAlign,
      iconOnly,
      layout,
      size,
      themeName
    })

    const iconEl = (
      <IconContainer
        appearance={appearance}
        icon={icon}
        iconAlign={iconAlign}
        iconOnly={iconOnly}
        labelOnly={hasLabel && !icon}
        loading={loading}
        size={size}
        themeName={themeName}
      ></IconContainer>
    )

    const isLoadingAndLabelOnly = hasLabel && loading && !icon
    const labelEl = (
      <span
        {...styles.text(isLoadingAndLabelOnly)}
        aria-hidden={isLoadingAndLabelOnly}
      >
        {children}
      </span>
    )

    if ('href' in props && typeof props.href === 'string') {
      const anchorProps = rest as HTMLPropsFor<'a'>

      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...glamorStyle}
          {...anchorProps}
          onClick={disabled ? undefined : anchorProps.onClick}
        >
          {iconEl}
          {labelEl}
        </a>
      )
    } else {
      const buttonProps = rest as HTMLPropsFor<'button'>
      delete (buttonProps as any).download

      return (
        <button
          disabled={disabled || loading}
          ref={ref as React.Ref<HTMLButtonElement>}
          {...glamorStyle}
          {...buttonProps}
        >
          {iconEl}
          {labelEl}
        </button>
      )
    }
  }
) as ButtonComponent & ButtonStatics

Button.appearances = vars.appearances
Button.iconAligns = vars.iconAligns
Button.layouts = vars.layouts
Button.sizes = vars.sizes

export const appearances = vars.appearances
export const iconAligns = vars.iconAligns
export const sizes = vars.sizes

export default Button

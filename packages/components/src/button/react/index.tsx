import { Icon } from '../../icon'
import { useTheme, themeNames } from '../../theme'
import { HTMLPropsFor, RefFor, ValueOf } from '../../util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports

const spin = glamor.keyframes(
  stylesheet['@keyframes psds-button__keyframes__spin']
)
interface ButtonStyleProps {
  appearance: ValueOf<typeof vars.appearances>
  disabled: boolean
  icon: boolean
  iconAlign: ValueOf<typeof vars.iconAligns>
  iconOnly: boolean
  layout: ValueOf<typeof vars.layouts>
  size: ValueOf<typeof vars.sizes>
  themeName: ValueOf<typeof themeNames>
  isLoadingWithNoText: boolean
}
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
  }: Omit<ButtonStyleProps, 'isLoadingWithNoText'>) =>
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
  loading: ({
    appearance,
    themeName
  }: Pick<ButtonStyleProps, 'appearance' | 'themeName'>) =>
    glamor.css(
      stylesheet[`.psds-button__loading`]({ spin }),
      stylesheet[`.psds-button__loading--appearance-${appearance}`],
      stylesheet[
        `.psds-button__loading--appearance-${appearance}.psds-button__loading--theme-${themeName}`
      ]
    ),
  icon: ({
    iconAlign,
    iconOnly,
    isLoadingWithNoText,
    size
  }: Pick<
    ButtonStyleProps,
    'iconAlign' | 'iconOnly' | 'isLoadingWithNoText' | 'size'
  >) =>
    glamor.css(
      stylesheet['.psds-button__icon'],
      stylesheet[`.psds-button__icon--iconAlign-${iconAlign}`],
      stylesheet[
        `.psds-button__icon--iconAlign-${iconAlign}.psds-button--size-${size}`
      ],
      (iconOnly || isLoadingWithNoText) &&
        stylesheet['.psds-button__icon--iconOnly']
    ),
  text: () => glamor.css(stylesheet[`.psds-button__text`])
}

const mapIconSize = (size: ValueOf<typeof vars.sizes>) => {
  const btnToIconSizes = {
    [vars.sizes.xSmall]: Icon.sizes.xSmall,
    [vars.sizes.small]: Icon.sizes.small,
    [vars.sizes.medium]: Icon.sizes.medium,
    [vars.sizes.large]: Icon.sizes.medium
  }
  return btnToIconSizes[size] ? btnToIconSizes[size] : Icon.sizes.medium
}

interface RenderIconProps extends HTMLPropsFor<'div'> {
  loading: boolean
  icon: React.ReactNode
  appearance: ValueOf<typeof vars.appearances>
  themeName: ValueOf<typeof themeNames>
  size: ValueOf<typeof vars.sizes>
  iconOnly: boolean
  isLoadingWithNoText: boolean
  iconAlign: ValueOf<typeof vars.iconAligns>
}

const renderIcon: React.FC<RenderIconProps> = props =>
  props.loading ? (
    <div
      {...styles.icon({
        iconAlign: props.iconAlign,
        iconOnly: props.iconOnly,
        isLoadingWithNoText: props.isLoadingWithNoText,
        size: props.size
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
        isLoadingWithNoText: props.isLoadingWithNoText,
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
  href?: string
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

export const Button = React.forwardRef<ButtonElement, ButtonProps>(
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

    const iconOnly = React.Children.count(children) <= 0

    const themeName = useTheme()

    const ref = React.useRef<HTMLAnchorElement | HTMLButtonElement>()

    React.useImperativeHandle(
      forwardedRef,
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      () => ref.current as HTMLAnchorElement | HTMLButtonElement
    )

    const nonLoadingWidth = React.useMemo(() => {
      if (loading && ref && ref.current) return ref.current.offsetWidth
    }, [loading, ref])
    const isLoadingWithNoText = !!nonLoadingWidth

    const glamorStyle = styles.button({
      appearance,
      disabled,
      icon: Boolean(icon),
      iconAlign,
      iconOnly,
      layout,
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
      const anchorProps = rest as HTMLPropsFor<'a'>

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
      const buttonProps = rest as HTMLPropsFor<'button'>
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
  }
) as ButtonComponent & ButtonStatics

Button.appearances = vars.appearances
Button.iconAligns = vars.iconAligns
Button.layouts = vars.layouts
Button.sizes = vars.sizes

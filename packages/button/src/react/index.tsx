import Icon, { sizes as iconSizes } from '@pluralsight/ps-design-system-icon'
import {
  useTheme,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'
import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports

const spin = glamor.keyframes(
  stylesheet['@keyframes psds-button__keyframes__spin']
)

interface StyleProps {
  appearance: ValueOf<typeof vars.appearances>
  disabled: boolean
  icon: boolean
  iconOnly: boolean
  iconAlign: ValueOf<typeof vars.iconAligns>
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
  }: Omit<StyleProps, 'isLoadingWithNoText'>) =>
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
  }: Pick<StyleProps, 'appearance' | 'themeName'>) =>
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
    StyleProps,
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
    [vars.sizes.xSmall]: iconSizes.xSmall,
    [vars.sizes.small]: iconSizes.small,
    [vars.sizes.medium]: iconSizes.medium,
    [vars.sizes.large]: iconSizes.medium
  }
  return btnToIconSizes[size] ? btnToIconSizes[size] : iconSizes.medium
}

interface RenderIconProps extends HTMLPropsFor<HTMLDivElement> {
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

export interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'value'
  > {
  appearance?: ValueOf<typeof vars.appearances>
  disabled?: boolean
  value?: React.ReactText
  layout?: ValueOf<typeof vars.layouts>
  icon?: React.ReactNode
  iconAlign?: ValueOf<typeof vars.iconAligns>
  loading?: boolean
  size?: ValueOf<typeof vars.sizes>
  href?: string
  target?: string
  rel?: string
}
interface ButtonStatics {
  appearances: typeof vars.appearances
  layouts: typeof vars.layouts
  iconAligns: typeof vars.iconAligns
  sizes: typeof vars.sizes
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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

    const ref = React.useRef<HTMLButtonElement>()
    React.useImperativeHandle(
      forwardedRef,
      () => (ref.current as unknown) as HTMLButtonElement
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
    const isAnchor = Boolean(rest.href)
    const Component = isAnchor ? 'a' : 'button'
    !isAnchor && delete (rest as any).download
    const isDisabled = isAnchor ? undefined : disabled || loading
    const handleClick =
      disabled && isAnchor
        ? undefined
        : (rest.onClick as React.MouseEventHandler<
            HTMLAnchorElement | HTMLButtonElement
          >)
    return (
      <Component
        {...(rest as HTMLPropsFor<HTMLAnchorElement | HTMLButtonElement>)}
        disabled={isDisabled}
        {...glamorStyle}
        onClick={handleClick}
        ref={ref as any}
        style={style}
      >
        {iconEl}
        {labelEl}
      </Component>
    )
  }
) as React.ForwardRefExoticComponent<ButtonProps> & ButtonStatics

Button.appearances = vars.appearances
Button.iconAligns = vars.iconAligns
Button.layouts = vars.layouts
Button.sizes = vars.sizes

export const appearances = vars.appearances
export const iconAligns = vars.iconAligns
export const sizes = vars.sizes

export default Button

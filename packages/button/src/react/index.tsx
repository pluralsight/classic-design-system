import Icon, { sizes as iconSizes } from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  ValueOf,
  forwardRefWithAsAndStatics
} from '@pluralsight/ps-design-system-util'

import { css, keyframes } from 'glamor'
import React, { Children } from 'react'

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
    layout,
    size,
    themeName
  }) =>
    css(
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
  loading: ({ appearance, themeName }) =>
    css(
      stylesheet[`.psds-button__loading`]({ spin }),
      stylesheet[`.psds-button__loading--appearance-${appearance}`],
      stylesheet[
        `.psds-button__loading--appearance-${appearance}.psds-button__loading--theme-${themeName}`
      ]
    ),
  icon: ({ iconAlign, iconOnly, isLoadingWithNoText, size }) =>
    css(
      stylesheet['.psds-button__icon'],
      stylesheet[`.psds-button__icon--iconAlign-${iconAlign}`],
      stylesheet[
        `.psds-button__icon--iconAlign-${iconAlign}.psds-button--size-${size}`
      ],
      (iconOnly || isLoadingWithNoText) &&
        stylesheet['.psds-button__icon--iconOnly']
    ),
  text: () => css(stylesheet[`.psds-button__text`])
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

export interface ButtonProps {
  appearance?: ValueOf<typeof vars.appearances>
  layout?: ValueOf<typeof vars.layouts>
  icon?: React.ReactNode
  iconAlign?: ValueOf<typeof vars.iconAligns>
  loading?: boolean
  size?: ValueOf<typeof vars.sizes>
}

interface ButtonStatics {
  appearances: typeof vars.appearances
  layouts: typeof vars.layouts
  iconAligns: typeof vars.iconAligns
  sizes: typeof vars.sizes
}

const Button = forwardRefWithAsAndStatics<ButtonProps, 'button', ButtonStatics>(
  (props, forwardedRef) => {
    const {
      appearance = vars.appearances.primary,
      as: Comp = 'button',
      children,
      disabled = false,
      icon,
      iconAlign = vars.iconAligns.left,
      layout = vars.layouts.inline,
      loading = false,
      onClick,
      size = vars.sizes.medium,
      style = {},
      ...rest
    } = props

    const iconOnly = Children.count(children) <= 0
    const themeName = useTheme()

    const ref = React.useRef<any>()
    React.useImperativeHandle(forwardedRef, () => ref.current)

    const nonLoadingWidth = React.useMemo(() => {
      if (!loading) return
      if (!ref || !ref.current) return

      return ref.current.offsetWidth
    }, [loading, ref])

    const isLoadingWithNoText = !!nonLoadingWidth

    const conditionallyHandleClick = disabled ? undefined : onClick

    const isButton = Comp === 'button'
    return (
      <Comp
        {...(isButton ? { disabled: disabled || loading } : {})}
        ref={ref}
        onClick={conditionallyHandleClick}
        {...styles.button({
          appearance,
          disabled,
          icon,
          iconAlign,
          iconOnly,
          layout,
          size,
          themeName
        })}
        style={{
          ...style,
          ...(isLoadingWithNoText && { width: nonLoadingWidth })
        }}
        {...rest}
      >
        {renderIcon({
          appearance,
          icon,
          iconAlign,
          iconOnly,
          isLoadingWithNoText,
          loading,
          size,
          themeName
        })}

        {!isLoadingWithNoText && <span {...styles.text()}>{children}</span>}
      </Comp>
    )
  }
)

const renderIcon: React.FC<{
  appearance: string
  icon: React.ReactNode
  iconAlign: string
  iconOnly: boolean
  isLoadingWithNoText: boolean
  loading: boolean
  size: string
  themeName: string
}> = props => {
  const { loading, icon } = props

  if (!loading && !icon) return null

  const iconSize = mapIconSize(props.size)

  return (
    <div
      {...styles.icon({
        iconAlign: props.iconAlign,
        iconOnly: props.iconOnly,
        isLoadingWithNoText: props.isLoadingWithNoText,
        size: props.size
      })}
    >
      {loading ? (
        <Icon size={iconSize}>
          <span
            {...styles.loading({
              appearance: props.appearance,
              themeName: props.themeName
            })}
          />
        </Icon>
      ) : (
        <>
          {React.isValidElement(icon) &&
            React.cloneElement(icon, { size: iconSize })}
        </>
      )}
    </div>
  )
}

Button.appearances = vars.appearances
Button.iconAligns = vars.iconAligns
Button.layouts = vars.layouts
Button.sizes = vars.sizes

export const appearances = vars.appearances
export const iconAligns = vars.iconAligns
export const sizes = vars.sizes

export default Button

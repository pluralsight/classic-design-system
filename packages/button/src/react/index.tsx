import Icon, { sizes as iconSizes } from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  HTMLPropsFor,
  RefFor,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import { compose, css, keyframes, StyleAttribute, Rule } from 'glamor'
import React, { Children } from 'react'

import stylesheet from '../css'
import * as vars from '../vars'

const spin = keyframes(stylesheet['@keyframes psds-button__keyframes__spin'])

interface SelectorInfo {
  styleAttribute: StyleAttribute
  rawSelectors: string[]
}

const selectAll = (...infos: SelectorInfo[]) => ({
  styleAttribute: compose(infos.map(info => info?.styleAttribute)),
  rawSelectors: infos.reduce<string[]>(
    (acc, info) => acc.concat(info?.rawSelectors),
    []
  )
})

type RuleFunction = (args: unknown) => Rule
const select = (
  stylesheet: Record<string, Rule>,
  selector: string,
  args: unknown | undefined
) => {
  const rawSelectors = selector.split('.').filter(Boolean)
  return {
    styleAttribute: css(
      typeof args === 'undefined'
        ? stylesheet[selector]
        : (stylesheet[selector] as RuleFunction)(args)
    ),
    rawSelectors: Array.isArray(rawSelectors) ? rawSelectors : []
  }
}

const selectToString = (...infos: SelectorInfo[]) => {
  const finalInfo = infos.length > 1 ? selectAll(...infos) : infos[0]
  const hashedSelector = finalInfo.styleAttribute.toString()
  const dedupedRawSelectors = finalInfo.rawSelectors
    .filter((selector, i, self) => self.indexOf(selector) === i)
    .join(' ')
  return `${hashedSelector} ${dedupedRawSelectors}`
}

const mergeProps = (first: unknown, second: unknown) => {
  if (typeof first === 'string' || typeof second === 'string') {
    return [first, second].filter(Boolean).join(' ')
  }
  // TODO: etc
}

const selectButton = select.bind(null, stylesheet)

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
    selectToString(
      selectAll(
        selectButton('.psds-button'),
        selectButton(`.psds-button--layout-${layout}`),
        selectButton(`.psds-button--size-${size}`),
        selectButton(`.psds-button--appearance-${appearance}`),
        selectButton(
          `.psds-button--appearance-${appearance}.psds-theme--${themeName}`
        ),
        disabled &&
          selectAll(
            selectButton(`.psds-button--disabled`),
            selectButton(`.psds-button--disabled.psds-theme--${themeName}`),
            selectButton(
              `.psds-button--disabled.psds-button--appearance-${appearance}`
            )
          ),
        icon &&
          !iconOnly &&
          selectAll(
            selectButton(
              `.psds-button--iconAlign-${iconAlign}.psds-button--not-iconOnly`
            ),
            selectButton(
              `.psds-button--iconAlign-${iconAlign}.psds-button--not-iconOnly.psds-button--size-${size}`
            )
          ),
        iconAlign === vars.iconAligns.right &&
          selectButton(`.psds-button--iconAlign-${iconAlign}`),
        iconOnly &&
          selectAll(
            selectButton(`.psds-button--iconOnly`),
            selectButton(`.psds-button--iconOnly.psds-button--size-${size}`)
          )
      )
    ),
  loading: ({ appearance, themeName }) =>
    selectToString(
      selectAll(
        selectButton(`.psds-button__loading`, { spin }),
        selectButton(`.psds-button__loading--appearance-${appearance}`),
        selectButton(
          `.psds-button__loading--appearance-${appearance}.psds-button__loading--theme-${themeName}`
        )
      )
    ),
  icon: ({ iconAlign, iconOnly, isLoadingWithNoText }) =>
    selectToString(
      selectAll(
        selectButton('.psds-button__icon'),
        selectButton(`.psds-button__icon--iconAlign-${iconAlign}`),
        (iconOnly || isLoadingWithNoText) &&
          selectButton('.psds-button__icon--iconOnly')
      )
    ),
  text: () => selectToString(selectButton(`.psds-button__text`))
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

interface RenderIconProps extends HTMLPropsFor<'div'> {
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
      className={styles.icon({
        iconAlign: props.iconAlign,
        iconOnly: props.iconOnly,
        isLoadingWithNoText: props.isLoadingWithNoText
      })}
    >
      <Icon size={mapIconSize(props.size)}>
        <span
          className={styles.loading({
            appearance: props.appearance,
            themeName: props.themeName
          })}
        />
      </Icon>
    </div>
  ) : props.icon ? (
    <div
      className={styles.icon({
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
      <span className={styles.text()}>{children}</span>
    )

    if ('href' in props && typeof props.href === 'string') {
      const anchorProps = rest as HTMLPropsFor<'a'>

      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={mergeProps(glamorStyle, props.className)}
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
          className={mergeProps(glamorStyle, props.className)}
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

export const appearances = vars.appearances
export const iconAligns = vars.iconAligns
export const sizes = vars.sizes

export default Button

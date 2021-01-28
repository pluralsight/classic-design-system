import Halo from '@pluralsight/ps-design-system-halo'
import { WarningIcon } from '@pluralsight/ps-design-system-icon'
import {
  HTMLPropsFor,
  ValueOf,
  combineFns
} from '@pluralsight/ps-design-system-util'
import Theme, { names as themeNames } from '@pluralsight/ps-design-system-theme'
import { compose, css } from 'glamor'
import React, {
  ForwardRefExoticComponent,
  MouseEventHandler,
  RefAttributes,
  ReactNode,
  SyntheticEvent,
  forwardRef,
  useCallback,
  useMemo,
  useRef
} from 'react'

import { appearances, sizes } from '../vars'
import stylesheet from '../css/field'

import Input from './input'
import Label from './label'
import SubLabel from './sub-label'
import TextArea from './text-area'

const styles = {
  container: (opts: { disabled?: boolean; error?: boolean }) =>
    compose(
      css(stylesheet['.psds-field__container']),
      opts.disabled && css(stylesheet['.psds-field__container--disabled']),
      opts.error && css(stylesheet['.psds-field__container--error'])
    ),
  field: (opts: { size?: string }) =>
    compose(
      css(stylesheet['.psds-field']),
      css(stylesheet[`.psds-field--${opts.size}`])
    ),
  prefix: () => css(stylesheet['.psds-field__prefix']),
  suffix: () => css(stylesheet['.psds-field__suffix']),
  errorIcon: () => css(stylesheet['.psds-field__error-icon'])
}

type InputElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

interface FieldProps extends Omit<HTMLPropsFor<'div'>, 'prefix' | 'ref'> {
  disabled?: boolean
  error?: boolean
  label?: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
  prefix?: ReactNode
  renderContainer?: typeof defaultRenderContainer
  renderTag?: typeof defaultRenderTag
  size?: ValueOf<typeof sizes>
  subLabel?: ReactNode
  suffix?: ReactNode
}

export interface FieldStatics {
  Input: typeof Input
  Label: typeof Label
  SubLabel: typeof SubLabel
  TextArea: typeof TextArea

  appearances: typeof appearances
  sizes: typeof sizes
}

type FieldPropsWithRefAttributes = FieldProps & RefAttributes<HTMLDivElement>
type FieldComponent = ForwardRefExoticComponent<FieldPropsWithRefAttributes> &
  FieldStatics

const Field = forwardRef<HTMLDivElement, FieldProps>((props, forwardedRef) => {
  const {
    children,
    disabled,
    error,
    label,
    onClick,
    prefix,
    renderContainer = defaultRenderContainer,
    renderTag = defaultRenderTag,
    size = sizes.medium,
    subLabel,
    suffix,
    ...rest
  } = props

  const containerRef = useRef<HTMLDivElement>(null)
  const Container = useMemo(() => renderContainer, [renderContainer])
  const Tag = useMemo(() => renderTag, [renderTag])

  const focusOnClick: MouseEventHandler = useCallback(evt => {
    const focusableTags = ['input', 'select', 'textarea']
    const { current: el } = containerRef

    if (!el || el.contains(document.activeElement)) return
    if (focusableTags.includes(getTargetTag(evt))) return

    const node = el.querySelector<InputElements>(focusableTags.join(','))
    if (node) node.focus()
  }, [])

  const handleClick = combineFns(onClick, focusOnClick)

  return (
    <Container
      {...styles.container({ disabled, error })}
      onClick={handleClick}
      ref={containerRef}
    >
      {label && label}

      <Theme name={themeNames.light}>
        <div>
          <Halo error={error} gapSize={Halo.gapSizes.small}>
            <Tag {...styles.field({ size })} ref={forwardedRef} {...rest}>
              {prefix && <div {...styles.prefix()}>{prefix}</div>}

              {children}

              {suffix && <div {...styles.suffix()}>{suffix}</div>}

              {error && (
                <div {...styles.errorIcon()}>
                  <WarningIcon />
                </div>
              )}
            </Tag>
          </Halo>
        </div>
      </Theme>

      {subLabel && subLabel}
    </Container>
  )
}) as FieldComponent

const defaultRenderContainer = forwardRef<
  HTMLDivElement,
  Omit<HTMLPropsFor<'div'>, 'ref'>
>((props, ref) => <div ref={ref} {...props} />)

const defaultRenderTag = forwardRef<
  HTMLDivElement,
  Omit<HTMLPropsFor<'div'>, 'ref'>
>((props, ref) => <div ref={ref} {...props} />)

Field.displayName = 'Field'

Field.Input = Input
Field.Label = Label
Field.SubLabel = SubLabel
Field.TextArea = TextArea

Field.appearances = appearances
Field.sizes = sizes

export { appearances, sizes }
export default Field

const getTargetTag = (evt: SyntheticEvent | Event): string => {
  if (!(evt.target instanceof Element)) return 'unknown'
  return evt.target.tagName.toLowerCase()
}

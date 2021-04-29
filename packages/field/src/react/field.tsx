import Halo from '@pluralsight/ps-design-system-halo'
import { WarningIcon } from '@pluralsight/ps-design-system-icon'
import {
  HTMLPropsFor,
  ValueOf,
  combineFns,
  forwardRefWithStatics
} from '@pluralsight/ps-design-system-util'
import Theme, { names as themeNames } from '@pluralsight/ps-design-system-theme'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { FieldContext } from './context'
import stylesheet from '../css/field'
import Input from './input'
import Label from './label'
import SubLabel from './sub-label'
import TextArea from './text-area'
import { appearances, sizes } from '../vars/index'

const glamor = glamorDefault || glamorExports

const styles = {
  container: (opts: { disabled?: boolean; error?: boolean }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-field__container']),
      opts.disabled &&
        glamor.css(stylesheet['.psds-field__container--disabled']),
      opts.error && glamor.css(stylesheet['.psds-field__container--error'])
    ),
  field: (opts: { hasPrefix: boolean; hasSuffix: boolean; size?: string }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-field']),
      glamor.css(stylesheet[`.psds-field--${opts.size}`]),
      opts.hasPrefix && glamor.css(stylesheet['.psds-field--prefix']),
      opts.hasSuffix && glamor.css(stylesheet['.psds-field--suffix'])
    ),
  halo: () => glamor.css(stylesheet['.psds-field__halo']),
  prefix: () => glamor.css(stylesheet['.psds-field__prefix']),
  suffix: () => glamor.css(stylesheet['.psds-field__suffix']),
  errorIcon: () => glamor.css(stylesheet['.psds-field__error-icon'])
}

type InputElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

export interface FieldProps
  extends Omit<HTMLPropsFor<'div'>, 'prefix' | 'ref'> {
  disabled?: boolean
  error?: boolean
  label?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLDivElement>
  prefix?: React.ReactNode
  renderContainer?: React.ForwardRefExoticComponent<React.RefAttributes<any>>
  renderTag?: React.FC
  size?: ValueOf<typeof sizes>
  subLabel?: React.ReactNode
  suffix?: React.ReactNode
}

export interface FieldStatics {
  Input: typeof Input
  Label: typeof Label
  SubLabel: typeof SubLabel
  TextArea: typeof TextArea

  appearances: typeof appearances
  sizes: typeof sizes
}

const Field = forwardRefWithStatics<FieldProps, HTMLDivElement, FieldStatics>(
  (props, forwardedRef) => {
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

    const containerRef = React.useRef<HTMLDivElement>(null)
    React.useImperativeHandle(
      forwardedRef,
      () => (containerRef.current as unknown) as HTMLDivElement
    )
    const Container = React.useMemo(() => renderContainer, [renderContainer])
    const Tag = React.useMemo(() => renderTag, [renderTag])

    const focusOnClick: React.MouseEventHandler = React.useCallback(evt => {
      const focusableTags = ['input', 'select', 'textarea']

      const { current: el } = containerRef
      if (!el || el.contains(document.activeElement)) return
      if (focusableTags.includes(getTargetTag(evt))) return

      const node = el.querySelector<InputElements>(focusableTags.join(','))
      if (node) node.focus()
    }, [])

    const handleClick = combineFns(onClick, focusOnClick)

    return (
      <FieldContext.Provider
        value={{
          size
        }}
      >
        <Container
          {...styles.container({ disabled, error })}
          onClick={handleClick}
          ref={containerRef}
        >
          {label && label}

          <Theme name={themeNames.light}>
            <Halo
              error={error}
              gapSize={Halo.gapSizes.small}
              {...styles.halo()}
            >
              <Tag
                {...styles.field({
                  hasPrefix: !!prefix,
                  hasSuffix: !!suffix,
                  size
                })}
                {...rest}
              >
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
          </Theme>

          {subLabel && subLabel}
        </Container>
      </FieldContext.Provider>
    )
  }
)

const defaultRenderContainer = React.forwardRef<
  HTMLDivElement,
  Omit<HTMLPropsFor<'div'>, 'ref'>
>((props, ref) => <div ref={ref} {...props} />)

const defaultRenderTag: React.FC = props => <div {...props} />

const getTargetTag = (evt: React.SyntheticEvent | Event): string => {
  if (!(evt.target instanceof Element)) return 'unknown'
  return evt.target.tagName.toLowerCase()
}

Field.displayName = 'Field'

Field.Input = Input
Field.Label = Label
Field.SubLabel = SubLabel
Field.TextArea = TextArea

Field.appearances = appearances
Field.sizes = sizes

export default Field

import { Story } from '@storybook/react/types-6-0'

import { colorsPink, layout } from '@pluralsight/ps-design-system-core'
import { CloseIcon } from '@pluralsight/ps-design-system-icon'
import Tag from '@pluralsight/ps-design-system-tag'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'

import Field from '..'

import React, {
  ComponentProps,
  ForwardRefExoticComponent,
  MouseEventHandler,
  RefAttributes,
  forwardRef,
  useMemo
} from 'react'

const variables = {
  pills: { gutter: 2 }
}

export const ConstrainWidthDecorator = (Story: Story) => {
  return (
    <div {...css({ maxWidth: '400px' })}>
      <Story />
    </div>
  )
}

export const OutlineDecorator = (Story: Story) => {
  return (
    <div {...css({ outline: `2px dashed ${colorsPink.base}` })}>
      <Story />
    </div>
  )
}

export const SetWidthDecorator = (Story: Story) => {
  return (
    <div {...css({ width: '400px' })}>
      <Story />
    </div>
  )
}

interface PillsProps
  extends Omit<HTMLPropsFor<'div'>, 'ref'>,
    RefAttributes<HTMLDivElement> {}

interface PillsStatics {
  Pill: typeof Pill
  Input: typeof PillAdjacentInput
}

export const Pills = forwardRef<HTMLDivElement, PillsProps>((props, ref) => {
  const { children, ...rest } = props

  const styles = {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    maxHeight: 75,
    overflowY: 'scroll',
    padding: `${layout.spacingXSmall}`,
    width: '100%'
  }

  return (
    <div ref={ref} {...rest} {...css(styles)}>
      {children}
    </div>
  )
}) as ForwardRefExoticComponent<PillsProps> & PillsStatics

interface PillProps extends ComponentProps<typeof Tag> {
  onRequestRemove: MouseEventHandler
}
const Pill = forwardRef<HTMLDivElement, PillProps>((props, ref) => {
  const { children, onRequestRemove, ...rest } = props

  const styles = {
    margin: `calc(${variables.pills.gutter}px / 2)`
  }

  return (
    <div ref={ref} {...rest} {...css(styles)}>
      <Tag
        icon={<CloseIcon onClick={onRequestRemove} />}
        isPressed
        size={Tag.sizes.small}
      >
        {children}
      </Tag>
    </div>
  )
})
Pills.Pill = Pill

const PillAdjacentInput = forwardRef<
  HTMLInputElement,
  ComponentProps<typeof Field.Input>
>((props, ref) => {
  const Container = useMemo(
    () =>
      forwardRef<HTMLDivElement>((p, r) => (
        <div
          ref={r}
          {...p}
          {...css({ margin: `calc(${variables.pills.gutter}px / 2)` })}
        />
      )),
    []
  )

  return (
    <Field.Input
      ref={ref}
      renderContainer={Container}
      type="text"
      {...props}
      {...css({ minWidth: 50 })}
    />
  )
})
Pills.Input = PillAdjacentInput

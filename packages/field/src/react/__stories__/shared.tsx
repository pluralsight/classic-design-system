import { colorsPink, layout } from '@pluralsight/ps-design-system-core'
import { CloseIcon } from '@pluralsight/ps-design-system-icon'
import Tag from '@pluralsight/ps-design-system-tag'

import { Story } from '@storybook/react/types-6-0'

import Field from '../index'

import React from 'react'

const variables = {
  pills: { gutter: 2 }
}

export const ConstrainWidthDecorator = (Story: Story) => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <Story />
    </div>
  )
}

export const OutlineDecorator = (Story: Story) => {
  return (
    <div style={{ outline: `2px dashed ${colorsPink[6]}` }}>
      <Story />
    </div>
  )
}

export const SetWidthDecorator = (Story: Story) => {
  return (
    <div style={{ width: '400px' }}>
      <Story />
    </div>
  )
}

interface PillsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'>,
    React.RefAttributes<HTMLDivElement> {}

interface PillsStatics {
  Pill: typeof Pill
  Input: typeof PillAdjacentInput
}

export const Pills = React.forwardRef<HTMLDivElement, PillsProps>(
  (props, ref) => {
    const { children, ...rest } = props

    return (
      <div
        ref={ref}
        {...rest}
        style={{
          alignItems: 'center',
          display: 'flex',
          flex: 1,
          flexWrap: 'wrap',
          maxHeight: 75,
          overflowY: 'scroll',
          padding: `${layout.spacingXSmall}`,
          width: '100%'
        }}
      >
        {children}
      </div>
    )
  }
) as React.ForwardRefExoticComponent<PillsProps> & PillsStatics

interface PillProps extends React.ComponentProps<typeof Tag> {
  onRequestRemove: React.MouseEventHandler
}
const Pill = React.forwardRef<HTMLDivElement, PillProps>((props, ref) => {
  const { children, onRequestRemove, ...rest } = props

  return (
    <div
      ref={ref}
      {...rest}
      style={{
        margin: `calc(${variables.pills.gutter}px / 2)`
      }}
    >
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

const PillAdjacentInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Field.Input>
>((props, ref) => {
  const Container = React.useMemo(
    () =>
      React.forwardRef<HTMLDivElement>((p, r) => (
        <div
          ref={r}
          {...p}
          style={{ margin: `calc(${variables.pills.gutter}px / 2)` }}
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
      style={{ minWidth: 50 }}
    />
  )
})
Pills.Input = PillAdjacentInput

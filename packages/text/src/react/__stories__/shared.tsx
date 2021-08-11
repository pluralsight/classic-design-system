import { layout } from '@pluralsight/ps-design-system-core'
import { DecoratorFn } from '@storybook/react'
import React from 'react'

export const PaddingDecorator: DecoratorFn = storyFn => (
  <div style={{ padding: layout.spacingLarge }}>{storyFn()}</div>
)

export const StoryGrid: React.FC<{ cols?: number }> = props => {
  const { cols = 2, ...rest } = props

  return (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: Array(cols).fill('1fr').join(' ')
      }}
      {...rest}
    />
  )
}

import { Meta, Story } from '@storybook/react/types-6-0'

import React from 'react'

import { Badge } from '../index'

export default {
  title: 'Components/Badge',
  component: Badge
} as Meta

export const AppearancesAndColors: Story = () => (
  <StoryGrid>
    {Object.values(Badge.colors).map((color, i) =>
      Object.values(Badge.appearances).map((appearance, i) => (
        <Badge key={i} color={color} appearance={appearance}>
          {appearance} {color}
        </Badge>
      ))
    )}
  </StoryGrid>
)

const StoryGrid: React.FC<{ cols?: number }> = props => {
  const { cols = 2, ...rest } = props

  return (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: Array(cols).fill('1fr').join(' '),
        justifyItems: 'left'
      }}
      {...rest}
    />
  )
}

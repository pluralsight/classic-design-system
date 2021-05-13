import { Meta, Story } from '@storybook/react/types-6-0'

import React from 'react'

import * as core from '@pluralsight/ps-design-system-core'

import Tooltip from '../index'

export default {
  title: 'Components/Tooltip',
  component: Tooltip
} as Meta

export const Appearances: Story = () => (
  <StoryGrid>
    {Object.values(Tooltip.appearances).map((appearance, i) => (
      <Tooltip appearance={appearance}>{appearance}</Tooltip>
    ))}
  </StoryGrid>
)

export const TailPositions: Story = () => (
  <StoryGrid cols={Object.keys(Tooltip.appearances).length}>
    {Object.values(Tooltip.tailPositions).map(tailPosition =>
      Object.values(Tooltip.appearances).map(appearance => (
        <Tooltip
          key={appearance + tailPosition}
          appearance={appearance}
          tailPosition={tailPosition}
        >
          {tailPosition}
        </Tooltip>
      ))
    )}
  </StoryGrid>
)

export const OnClose: Story = () => (
  <StoryGrid>
    {Object.values(Tooltip.appearances).map((appearance, i) => (
      <Tooltip
        key={appearance}
        appearance={appearance}
        tailPosition={Tooltip.tailPositions.topLeft}
        onClose={() => {}}
      >
        Consectetur adipisicing elit, sed do ab eiusmod tempor incididunt ut
      </Tooltip>
    ))}
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
        alignItems: 'center',
        justifyItems: 'left'
      }}
      {...rest}
    />
  )
}

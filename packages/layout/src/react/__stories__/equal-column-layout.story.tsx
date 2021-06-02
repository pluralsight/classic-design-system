import { Meta, Story } from '@storybook/react/types-6-0'

import React from 'react'

import Button from '@pluralsight/ps-design-system-button'
import * as core from '@pluralsight/ps-design-system-core'
import Link from '@pluralsight/ps-design-system-link'

import { EqualColumnLayout } from '..'

export default {
  title: 'Components/EqualColumnLayout',
  component: EqualColumnLayout
} as Meta

const Box: React.FC = props => (
  <div style={{ background: core.colorsPink[6] }} {...props}>
    {props.children}
  </div>
)

export const Counts: Story = () => (
  <div style={{ display: 'grid', gap: '64px' }}>
    {Object.keys(EqualColumnLayout.counts).map(key => (
      <div style={{ color: 'white' }} key={key}>
        <EqualColumnLayout
          count={
            EqualColumnLayout.counts[
              key as keyof typeof EqualColumnLayout.counts
            ]
          }
        >
          <Box>(count: {key}) First child</Box>
          <Box>Second child</Box>
          <Box>Third child</Box>
          <Box>Fourth child</Box>
          <Box>Fifth child</Box>
          <Box>Sixth child</Box>
        </EqualColumnLayout>
      </div>
    ))}
  </div>
)

export const CustomMarkup: Story = () => (
  <div style={{ color: 'white' }}>
    <EqualColumnLayout count={EqualColumnLayout.counts.four}>
      <ul style={{ listStyle: 'none' }}>
        <li>Renders list... First child</li>
        <li>Second child</li>
        <li>Third child</li>
        <li>Fourth child</li>
        <li>Fifth child</li>
        <li>Sixth child</li>
      </ul>
    </EqualColumnLayout>
  </div>
)

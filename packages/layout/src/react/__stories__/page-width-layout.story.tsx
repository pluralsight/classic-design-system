import { Meta, Story } from '@storybook/react/types-6-0'

import React from 'react'

import { PageWidthLayout } from '..'

export default {
  title: 'Components/PageWidthLayout',
  component: PageWidthLayout
} as Meta

export const Default: Story = () => (
  <PageWidthLayout style={{ color: 'white', outline: '1px solid red' }}>
    My content
  </PageWidthLayout>
)

export const FullBleed: Story = () => (
  <div style={{ background: 'rebeccapurple' }}>
    <PageWidthLayout style={{ color: 'white', outline: '1px solid red' }}>
      My content
    </PageWidthLayout>
  </div>
)

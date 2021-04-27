import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { PaddingDecorator, StoryGrid } from './shared'
import { List } from '../index'

export default {
  title: 'Components/Text/List',
  component: List,
  decorators: [PaddingDecorator]
} as Meta

const defaultArgs = {
  children: (
    <>
      <List.Item>one</List.Item>
      <List.Item>two</List.Item>
      <List.Item>three</List.Item>
      <List.Item>four</List.Item>
      <List.Item>five</List.Item>
    </>
  ),
  onClick: action('click')
}

const Template: Story<React.ComponentProps<typeof List>> = args => (
  <List {...args} />
)

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const Sizes: Story<React.ComponentProps<typeof List>> = args => (
  <StoryGrid cols={1}>
    {Object.values(List.sizes).map((size, i) => (
      <List {...args} key={i} size={size} />
    ))}
  </StoryGrid>
)
Sizes.args = { ...defaultArgs }

export const Types: Story<React.ComponentProps<typeof List>> = args => (
  <StoryGrid cols={1}>
    {Object.values(List.types).map((type, i) => (
      <List {...args} key={i} type={type} />
    ))}
  </StoryGrid>
)
Types.args = { ...defaultArgs }

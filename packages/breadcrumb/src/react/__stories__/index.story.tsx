import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Breadcrumb from '../index'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb
} as Meta

const Template: Story = args => <Breadcrumb {...args} />

export const Basic = Template.bind({})
Basic.args = { children: 'All the things' }

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled',
  disabled: true,
  onClick: action('never clicks')
}

export const AsLink = Template.bind({})
AsLink.args = {
  children: 'Click as link',
  href: 'https://duckduckgo.com'
}

export const AsButton = Template.bind({})
AsButton.args = {
  children: 'Clicks once',
  onClick: action('click count')
}

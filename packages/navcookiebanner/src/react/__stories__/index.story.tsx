import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import NavCookieBanner from '..'

const defaultArgs = {}

export default {
  title: 'Components/NavCookieBanner',
  component: NavCookieBanner
} as Meta

const Template: Story<ComponentProps<typeof NavCookieBanner>> = args => (
  <NavCookieBanner {...args} />
)

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const CustomMessage = Template.bind({})
CustomMessage.args = {
  ...defaultArgs,
  message: <label>This is here to annoy you.</label>
}

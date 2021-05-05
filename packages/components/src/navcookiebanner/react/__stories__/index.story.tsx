import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import NavCookieBanner from '../index'

const defaultArgs = {}

export default {
  title: 'Components/NavCookieBanner',
  component: NavCookieBanner
} as Meta

const Template: Story<React.ComponentProps<typeof NavCookieBanner>> = args => (
  <NavCookieBanner {...args} />
)

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const CustomMessage = Template.bind({})
CustomMessage.args = {
  ...defaultArgs,
  message: <label>This is here to annoy you.</label>
}

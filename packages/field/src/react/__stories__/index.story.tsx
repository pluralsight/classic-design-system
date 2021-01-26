import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import Field from '..'

export default {
  title: 'Components/Field',
  component: Field,
  args: {
    label: <Field.Label>some name</Field.Label>,
    subLabel: <Field.SubLabel>hint text</Field.SubLabel>
  }
} as Meta

const Template: Story<ComponentProps<typeof Field>> = args => {
  return <Field {...args} />
}

export const Basic = Template.bind({})

export const NoLabels = Template.bind({})
NoLabels.args = { label: undefined, subLabel: undefined }

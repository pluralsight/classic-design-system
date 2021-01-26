import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Field from '..'

export default {
  title: 'Components/Field',
  component: Field,
  args: {}
} as Meta

export const TextInput: Story = () => {
  return (
    <Field
      label={<Field.Label>some name</Field.Label>}
      subLabel={<Field.SubLabel>hint text</Field.SubLabel>}
    >
      <Field.Input type="text" />
    </Field>
  )
}

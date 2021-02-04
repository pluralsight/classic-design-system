import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { periodicElements } from '../__fixtures__/options'
import MultiSelectField from '..'

const ConstrainWidthDecorator = (Story: Story) => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <Story />
    </div>
  )
}

export default {
  title: 'Components/MultiSelectField',
  component: MultiSelectField,
  decorators: [ConstrainWidthDecorator]
} as Meta

const defaultArgs = {
  placeholder: 'Search...',
  label: 'Multi select field label',
  subLabel: 'Multi select field sublabel',
  menu: periodicElements.map(option => (
    <MultiSelectField.Item key={option.value} value={option.value}>
      {option.label}
    </MultiSelectField.Item>
  ))
}

const Template: Story<ComponentProps<typeof MultiSelectField>> = args => {
  const [value, setValue] = React.useState(['H', 'Be'])

  return (
    <MultiSelectField
      {...args}
      onChange={(_, nextValue) => {
        setValue(nextValue)
      }}
      value={value}
    />
  )
}

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

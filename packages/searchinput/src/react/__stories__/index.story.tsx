import { storiesOf } from '@storybook/react'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import SearchInput from '../index'

export default {
  title: 'SearchInput',
  component: SearchInput,
  args: {
    placeholder: 'Search'
  }
} as Meta

const Template: Story<React.ComponentProps<typeof SearchInput>> = args => {
  const [value, setValue] = React.useState('')
  return (
    <SearchInput
      value={value}
      onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value)
      }}
      onClear={() => setValue('')}
      {...args}
    />
  )
}

export const Onclear = Template.bind({})

export const NoOnclear = Template.bind({})
NoOnclear.args = { onClear: undefined }

export const StaticValue = Template.bind({})
StaticValue.args = { value: 'Set, not updated with state' }

export const Loading = Template.bind({})
Loading.args = { loading: true }

export const FieldProps = Template.bind({})
FieldProps.args = { error: true, label: 'Label', subLabel: 'Sub Label' }

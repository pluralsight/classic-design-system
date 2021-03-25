import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps, useState } from 'react'

import SearchInput from '..'

const defaultArgs = {
  onFocus: action('on focus'),
  onBlur: action('on blur'),
  label: 'The label',
  placeholder: 'Some placeholder',
  subLabel: 'The sub label'
}

export default {
  title: 'Components/SearchInput',
  component: SearchInput
} as Meta

const Template: Story<ComponentProps<typeof SearchInput>> = args => {
  const [value, setValue] = useState('')

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

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const NoOnClear = Template.bind({})
NoOnClear.args = { onClear: undefined }

export const StaticValue = Template.bind({})
StaticValue.args = { value: 'Set, not updated with state' }

export const Loading = Template.bind({})
Loading.args = { loading: true }

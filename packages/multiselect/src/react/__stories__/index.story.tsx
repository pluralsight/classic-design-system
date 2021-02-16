import { PlaceholderIcon } from '@pluralsight/ps-design-system-icon'
import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps, useMemo, useState } from 'react'

import { periodicElements } from '../__fixtures__/options'
import MultiSelect, { Option } from '..'

const SetWidthDecorator = (Story: Story) => {
  return (
    <div style={{ width: '400px' }}>
      <Story />
    </div>
  )
}

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  decorators: [SetWidthDecorator]
} as Meta

const defaultArgs = {
  label: 'The label',
  subLabel: 'The sub label'
}

const Template: Story<ComponentProps<typeof MultiSelect>> = args => {
  const options = useMemo(() => periodicElements, [])
  const [value, setValue] = useState<Option[]>(options.slice(0, 2))

  return (
    <MultiSelect
      {...args}
      onChange={(_, nextValue) => {
        setValue(nextValue)
      }}
      options={options}
      value={value}
    />
  )
}

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const ReactNodeLabel = Template.bind({})
ReactNodeLabel.args = {
  ...defaultArgs,
  label: <MultiSelect.Label>React node label</MultiSelect.Label>
}

export const NoLabels = Template.bind({})
NoLabels.args = {
  ...defaultArgs,
  label: undefined,
  placeholder: 'Placeholder...', // NOTE: a11y requirement when there are no labels
  subLabel: undefined
}

export const Disabled = Template.bind({})
Disabled.args = { ...defaultArgs, disabled: true }

export const Error = Template.bind({})
Error.args = { ...defaultArgs, error: true }

export const IconPrefix = Template.bind({})
IconPrefix.args = { ...defaultArgs, prefix: <PlaceholderIcon /> }

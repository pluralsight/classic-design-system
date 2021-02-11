import { PlaceholderIcon } from '@pluralsight/ps-design-system-icon'
import { Meta, Story } from '@storybook/react/types-6-0'
import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  ComponentProps,
  useState
} from 'react'

import TagsInput, { Option } from '..'

const ConstrainWidthDecorator = (Story: Story) => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <Story />
    </div>
  )
}

const uniqBy = (arr: any[], key: string) =>
  Array.from(new Set(arr.map(item => item[key]))).map(k =>
    arr.find(i => i[key] === k)
  )

export default {
  title: 'Components/TagsInput',
  component: TagsInput,
  decorators: [ConstrainWidthDecorator]
} as Meta

const defaultArgs = {
  label: 'The label',
  subLabel: 'The sub label'
}

const Template: Story<ComponentProps<typeof TagsInput>> = args => {
  const [searchTerm, setSearchTerm] = useState('')
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = evt => {
    setSearchTerm(evt.target.value)
  }

  const [value, setValue] = useState<Option[]>([
    { label: 'first', value: 'first' },
    { label: 'second', value: 'second' }
  ])

  const handleOnKeyPress: KeyboardEventHandler = evt => {
    if (evt.key !== 'Enter') return

    if (evt.target instanceof HTMLInputElement) {
      const { value: targetValue } = evt.target
      if (targetValue.length < 1) return

      const nextOption = { label: targetValue, value: targetValue }
      const nextValue = uniqBy([...value, nextOption], 'value')

      setSearchTerm('')
      setValue(nextValue)
    }
  }

  return (
    <TagsInput
      {...args}
      onChange={(_, nextValue) => {
        setValue(nextValue)
      }}
      onKeyPress={handleOnKeyPress}
      onSearchInputChange={handleInputChange}
      searchInputValue={searchTerm}
      value={value}
    />
  )
}

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const ReactNodeLabel = Template.bind({})
ReactNodeLabel.args = {
  ...defaultArgs,
  label: <TagsInput.Label>React node label</TagsInput.Label>
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

export const IconSuffix = Template.bind({})
IconSuffix.args = { ...defaultArgs, suffix: <PlaceholderIcon /> }

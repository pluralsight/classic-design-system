import { Meta, Story } from '@storybook/react/types-6-0'
import React, {
  ChangeEventHandler,
  ComponentProps,
  SyntheticEvent,
  useMemo,
  useState
} from 'react'

import { periodicElements } from '../__fixtures__/options'
import TagsInput, { Option } from '..'

const ConstrainWidthDecorator = (Story: Story) => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <Story />
    </div>
  )
}

export default {
  title: 'Components/TagsInput',
  component: TagsInput,
  decorators: [ConstrainWidthDecorator]
} as Meta

const defaultArgs = {
  label: 'The label',
  subLabel: 'The sub label'
}

type TemplateArgs = Pick<
  ComponentProps<typeof TagsInput>,
  'placeholder' | 'label' | 'subLabel'
>
const Template: Story<TemplateArgs> = args => {
  const options = useMemo(() => periodicElements, [])

  const [searchTerm, setSearchTerm] = useState('')
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = evt => {
    setSearchTerm(evt.target.value)
  }

  const [value, setValue] = useState(options.slice(0, 2))

  const handleAddSelected = (_: SyntheticEvent, o: Option) => {
    setValue([...value, o])
    setSearchTerm('')
  }

  const unselectedOptions = useMemo(() => {
    return options.filter(option => value.indexOf(option) < 0)
  }, [options, value])

  return (
    <>
      <TagsInput
        {...args}
        onChange={(_, nextValue) => {
          setValue(nextValue)
        }}
        onSearchInputChange={handleInputChange}
        searchInputValue={searchTerm}
        value={value}
      />

      <div
        style={{
          border: '2px dashed pink',
          margin: '20px 0',
          maxHeight: 200,
          overflow: 'scroll',
          padding: 20
        }}
      >
        <ul>
          {unselectedOptions.map((option, index) => (
            <li key={`filter-result-${index}`}>
              <span>{option.label} </span>
              <button onClick={e => handleAddSelected(e, option)}>add</button>
            </li>
          ))}
        </ul>
      </div>
    </>
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
  placeholder: 'Placeholder...',
  subLabel: undefined
}

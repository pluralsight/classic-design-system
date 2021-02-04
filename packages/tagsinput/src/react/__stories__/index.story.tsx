import { Meta, Story } from '@storybook/react/types-6-0'
import React, {
  ChangeEventHandler,
  ComponentProps,
  SyntheticEvent,
  useMemo,
  useState
} from 'react'

import { periodicElements } from '../__fixtures__/options'
import TagsInput from '..'

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
  placeholder: 'Search...',
  label: 'Tags input label',
  subLabel: 'Tags input sublabel',
  menu: periodicElements.map(option => (
    <TagsInput.Item key={option.value} value={option.value}>
      {option.label}
    </TagsInput.Item>
  ))
}

type TemplateArgs = Pick<
  ComponentProps<typeof TagsInput>,
  'placeholder' | 'label' | 'subLabel' | 'menu'
>
const Template: Story<TemplateArgs> = args => {
  const [searchTerm, setSearchTerm] = useState('')
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = evt => {
    setSearchTerm(evt.target.value)
  }

  const [value, setValue] = useState(['H', 'Be'])
  const options = useMemo(() => periodicElements, [])

  const handleAddSelected = (_: SyntheticEvent, itemValue: string) => {
    setValue([...value, itemValue])
    setSearchTerm('')
  }

  const unselectedOptions = useMemo(() => {
    return options.filter(option => !value.includes(option.value))
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
              <button onClick={e => handleAddSelected(e, option.value)}>
                add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

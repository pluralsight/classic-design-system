import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'
import { css } from 'glamor'
import React, { MouseEvent, useState } from 'react'

import ViewToggle from '..'

const defaultArgs = {
  onSelect: action('on select')
}

export default {
  title: 'Components/ViewToggle',
  component: ViewToggle
} as Meta

const Template: Story = args => {
  return <ViewToggle {...args} />
}

export const OneOption = Template.bind({})
OneOption.args = {
  ...defaultArgs,
  children: <ViewToggle.Option>Option 1</ViewToggle.Option>
}

export const TwoOptions = Template.bind({})
TwoOptions.args = {
  ...defaultArgs,
  children: [
    <ViewToggle.Option key="opt-1">Option 1</ViewToggle.Option>,
    <ViewToggle.Option key="opt-2">Option 2</ViewToggle.Option>
  ]
}

export const ThreeOptions = Template.bind({})
ThreeOptions.args = {
  ...defaultArgs,
  children: [
    <ViewToggle.Option key="opt-1">Option 1</ViewToggle.Option>,
    <ViewToggle.Option key="opt-2">Option 2</ViewToggle.Option>,
    <ViewToggle.Option key="opt-3">Option 3</ViewToggle.Option>
  ]
}

export const MaxOptions = Template.bind({})
MaxOptions.args = {
  ...defaultArgs,
  children: [
    <ViewToggle.Option key="opt-1">Option 1</ViewToggle.Option>,
    <ViewToggle.Option key="opt-2">Option 2</ViewToggle.Option>,
    <ViewToggle.Option key="opt-3">Option 3</ViewToggle.Option>,
    <ViewToggle.Option key="opt-4">Should Not Be Visible</ViewToggle.Option>,
    <ViewToggle.Option key="opt-5">Should Not Be Visible</ViewToggle.Option>,
    <ViewToggle.Option key="opt-6">Should Not Be Visible</ViewToggle.Option>
  ]
}

export const DefaultFirstOption = Template.bind({})
DefaultFirstOption.args = {
  ...defaultArgs,
  children: [
    <ViewToggle.Option key="opt-1">I'm active</ViewToggle.Option>,
    <ViewToggle.Option key="opt-2">Option 2</ViewToggle.Option>,
    <ViewToggle.Option key="opt-3">Option 3</ViewToggle.Option>
  ]
}

export const ExplicitActiveFirst = Template.bind({})
ExplicitActiveFirst.args = {
  ...defaultArgs,
  children: [
    <ViewToggle.Option key="opt-1" active>
      I'm active
    </ViewToggle.Option>,
    <ViewToggle.Option key="opt-2">Option 2</ViewToggle.Option>,
    <ViewToggle.Option key="opt-3">Option 3</ViewToggle.Option>
  ]
}

export const ExplicitActiveSecond = Template.bind({})
ExplicitActiveSecond.args = {
  ...defaultArgs,
  children: [
    <ViewToggle.Option key="opt-1">I'm active</ViewToggle.Option>,
    <ViewToggle.Option active key="opt-2">
      Option 2
    </ViewToggle.Option>,
    <ViewToggle.Option key="opt-3">Option 3</ViewToggle.Option>
  ]
}

export const ExplicitActiveThird = Template.bind({})
ExplicitActiveThird.args = {
  ...defaultArgs,
  children: [
    <ViewToggle.Option key="opt-1">I'm active</ViewToggle.Option>,
    <ViewToggle.Option key="opt-2">Option 2</ViewToggle.Option>,
    <ViewToggle.Option active key="opt-3">
      Option 3
    </ViewToggle.Option>
  ]
}

export const DifferingTextLengths = Template.bind({})
DifferingTextLengths.args = {
  ...defaultArgs,
  children: [
    <ViewToggle.Option key="opt-1">
      This one is really long because everyone likes those
    </ViewToggle.Option>,
    <ViewToggle.Option key="opt-2">This is medium</ViewToggle.Option>,
    <ViewToggle.Option key="opt-3">Short</ViewToggle.Option>
  ]
}
export const AllLongTextLengths = Template.bind({})
AllLongTextLengths.args = {
  ...defaultArgs,
  children: [
    <ViewToggle.Option key="opt-1">
      This one is really long because everyone likes those
    </ViewToggle.Option>,
    <ViewToggle.Option key="opt-2">
      This one is really long because everyone likes those
    </ViewToggle.Option>,
    <ViewToggle.Option key="opt-3">
      This one is really long because everyone likes those
    </ViewToggle.Option>
  ]
}

export const ExampleDynamicOptions: Story = () => {
  const [count, updateCount] = useState(2)

  const add = () => updateCount(count + 1)
  const remove = () => updateCount(count - 1)

  return (
    <>
      <ViewToggle>
        {new Array(count).fill(null).map((_, index) => (
          <ViewToggle.Option key={index}>Item: {index + 1}</ViewToggle.Option>
        ))}
      </ViewToggle>

      <div
        {...css({
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          margin: '10px auto'
        })}
      >
        <button disabled={count <= 1} onClick={remove}>
          remove
        </button>

        <button disabled={count >= 3} onClick={add}>
          add
        </button>
      </div>
    </>
  )
}

export const ExampleControlled: Story = () => {
  const options = ['Apple', 'Banana', 'Orange']
  const [selected, setSelected] = useState(options[2])

  const handleSelect = (_evt: MouseEvent<HTMLButtonElement>, i: number) => {
    setSelected(options[i])
  }

  return (
    <ViewToggle onSelect={handleSelect}>
      {options.map(option => (
        <ViewToggle.Option active={option === selected} key={option}>
          {option}
        </ViewToggle.Option>
      ))}
    </ViewToggle>
  )
}

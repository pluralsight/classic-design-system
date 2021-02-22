import { CheckIcon, PlaceholderIcon } from '@pluralsight/ps-design-system-icon'
import { BelowRight } from '@pluralsight/ps-design-system-position'
import { Meta, Story } from '@storybook/react/types-6-0'
import { css } from 'glamor'
import React, { ComponentProps, forwardRef, useState } from 'react'

import { periodicElements } from '../__fixtures__/options'
import Select, { Option } from '..'
import { Menu } from '../menu'

const SetWidthDecorator = (Story: Story) => {
  return (
    <div {...css({ width: '400px' })}>
      <Story />
    </div>
  )
}

export default {
  title: 'Components/Select',
  component: Select,
  decorators: [SetWidthDecorator]
} as Meta

const defaultArgs = {
  label: 'The label',
  options: periodicElements,
  subLabel: 'The sub label'
}

const Template: Story<ComponentProps<typeof Select>> = args => {
  const { options, ...rest } = args
  const [value, setValue] = useState<Option | null | undefined>(options[1])

  return (
    <Select
      {...rest}
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
  label: <Select.Label>React node label</Select.Label>
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

export const OptionDescription = Template.bind({})
OptionDescription.args = {
  ...defaultArgs,
  options: defaultArgs.options.map(o => ({
    ...o,
    description: 'description here'
  }))
}

export const CustomOptionRenderer = Template.bind({})
CustomOptionRenderer.args = {
  ...defaultArgs,
  options: defaultArgs.options.map(o => ({
    ...o,
    description: 'description here'
  })),
  renderOption: forwardRef(
    ({ highlighted, option, selected, ...rest }, ref) => (
      <Menu.Item
        ref={ref}
        highlighted={highlighted}
        {...rest}
        {...css({
          backgroundColor: selected ? 'yellow' : 'initial'
        })}
      >
        <div {...css({ display: 'flex', alignItems: 'center' })}>
          <div>
            <Menu.ItemLabel>{option.label}</Menu.ItemLabel>

            {option.description && (
              <Menu.ItemDesc>{option.description}</Menu.ItemDesc>
            )}
          </div>

          <span {...css({ marginLeft: 'auto' })}>
            {selected && <CheckIcon />}
          </span>
        </div>
      </Menu.Item>
    )
  )
}

export const CustomPosition = Template.bind({})
CustomPosition.args = {
  ...defaultArgs,
  position: BelowRight
}

export const StyleOverrideDisplayBlock = Template.bind({})
StyleOverrideDisplayBlock.args = {
  ...defaultArgs,
  renderContainer: forwardRef((props, ref) => (
    <div ref={ref} {...props} style={{ display: 'block' }} />
  ))
}

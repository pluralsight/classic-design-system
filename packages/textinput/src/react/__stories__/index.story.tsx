import { PlaceholderIcon } from '@pluralsight/ps-design-system-icon'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import TextInput from '../index'

const glamor = glamorDefault || glamorExports

const defaultArgs = {
  onFocus: action('on focus'),
  onBlur: action('on blur'),
  label: 'The label',
  placeholder: 'Some placeholder',
  subLabel: 'The sub label'
}

export default {
  title: 'Components/TextInput',
  component: TextInput
} as Meta

const StoryGrid: React.FC<{ cols?: number }> = props => {
  const { cols = 2, ...rest } = props

  return (
    <div
      {...glamor.css({
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: Array(cols).fill('1fr').join(' ')
      })}
      {...rest}
    />
  )
}

const Template: Story<React.ComponentProps<typeof TextInput>> = args => (
  <TextInput {...args} />
)

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const LongPlaceholder = Template.bind({})
LongPlaceholder.args = {
  ...defaultArgs,
  placeholder:
    "some placeholder that goes on forever when the little things can't handle it"
}

export const LabelOnly = Template.bind({})
LabelOnly.args = {
  ...defaultArgs,
  subLabel: undefined
}

export const SubLabelOnly = Template.bind({})
SubLabelOnly.args = {
  ...defaultArgs,
  'aria-label': 'You need an a11y label',
  label: undefined
}

export const NoLabels = Template.bind({})
NoLabels.args = {
  ...defaultArgs,
  'aria-label': 'You need an a11y label',
  label: undefined,
  subLabel: undefined
}

export const FieldAfter = Template.bind({})
FieldAfter.args = { ...defaultArgs, fieldAfter: <PlaceholderIcon /> }

export const Disabled = Template.bind({})
Disabled.args = { ...defaultArgs, disabled: true }

export const Error = Template.bind({})
Error.args = { ...defaultArgs, error: true }

export const PasswordInput = Template.bind({})
PasswordInput.args = { ...defaultArgs, type: 'password' }

export const DateInput = Template.bind({})
DateInput.args = { ...defaultArgs, type: 'date' }

export const PropsInclusion = Template.bind({})
PropsInclusion.args = {
  ...defaultArgs,
  className: 'className is allowed',
  title: 'title is allowed'
}

export const Appearances: Story = () => (
  <StoryGrid cols={1}>
    {Object.values(TextInput.sizes).map(size =>
      Object.values(TextInput.appearances).map(app => (
        <TextInput
          {...defaultArgs}
          appearance={app}
          key={`${size}-${app}`}
          label={`${size} ${app}`}
          size={size}
        />
      ))
    )}
  </StoryGrid>
)

export const AppearancesWithError: Story = () => (
  <StoryGrid cols={1}>
    {Object.values(TextInput.sizes).map(size =>
      Object.values(TextInput.appearances).map(app => (
        <TextInput
          {...defaultArgs}
          appearance={app}
          error
          key={`${size}-${app}`}
          label={`${size} ${app}`}
          size={size}
        />
      ))
    )}
  </StoryGrid>
)

export const CompareDisabled: Story = () => (
  <StoryGrid cols={1}>
    <TextInput
      {...defaultArgs}
      label="Normal"
      subLabel="Still normal"
      placeholder="I'm normal, see"
    />

    <TextInput
      {...defaultArgs}
      label="I'm not usable"
      subLabel="Neither am I"
      disabled
      placeholder="I'm untouchable"
    />
  </StoryGrid>
)

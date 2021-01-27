import { LockIcon, PlaceholderIcon } from '@pluralsight/ps-design-system-icon'
import { useUniqueId } from '@pluralsight/ps-design-system-util'
import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { sizes } from '../../vars'
import Field from '..'

interface TextInputFieldProps extends ComponentProps<typeof Field> {
  placeholder?: string
  type: 'text' | 'search' | 'password'
}

const TextInputField: React.FC<TextInputFieldProps> = props => {
  const { disabled, placeholder, type, ...rest } = props

  const labelId = useUniqueId('text-input__label-')
  const inputId = useUniqueId('text-input__input-')

  return (
    <Field
      disabled={disabled}
      label={
        <Field.Label htmlFor={inputId} id={labelId}>
          Text input label area
        </Field.Label>
      }
      subLabel={
        <Field.SubLabel>Area for additional information</Field.SubLabel>
      }
      {...rest}
    >
      <Field.Input
        disabled={disabled}
        id={inputId}
        placeholder={placeholder}
        type={type}
      />
    </Field>
  )
}

export default {
  title: 'Components/Field/TextInputField',
  component: TextInputField,
  args: { size: sizes.medium, type: 'text' }
} as Meta

const Template: Story<ComponentProps<typeof TextInputField>> = args => {
  return <TextInputField {...args} />
}

export const Basic = Template.bind({})

export const SizeSmall = Template.bind({})
SizeSmall.args = { size: sizes.small }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const Error = Template.bind({})
Error.args = { error: true }

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = { placeholder: 'Enter some text here' }

export const IconPrefix = Template.bind({})
IconPrefix.args = { prefix: <PlaceholderIcon /> }

export const IconSuffix = Template.bind({})
IconSuffix.args = { suffix: <PlaceholderIcon /> }

export const PasswordType = Template.bind({})
PasswordType.args = { suffix: <LockIcon />, type: 'password' }

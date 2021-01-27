import { PlaceholderIcon } from '@pluralsight/ps-design-system-icon'
import { useUniqueId } from '@pluralsight/ps-design-system-util'
import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { sizes } from '../../vars'
import Field from '..'

interface TextAreaFieldProps extends ComponentProps<typeof Field> {}

const TextAreaField: React.FC<TextAreaFieldProps> = props => {
  const { disabled, placeholder, ...rest } = props

  const labelId = useUniqueId('text-area__label-')
  const areaId = useUniqueId('text-area__area-')

  return (
    <Field
      disabled={disabled}
      label={
        <Field.Label htmlFor={areaId} id={labelId}>
          Text area label area
        </Field.Label>
      }
      subLabel={
        <Field.SubLabel>Area for additional information</Field.SubLabel>
      }
      {...rest}
    >
      <Field.TextArea
        disabled={disabled}
        id={areaId}
        placeholder={placeholder}
      />
    </Field>
  )
}

export default {
  title: 'Components/Field/TextAreaField',
  component: TextAreaField,
  args: {}
} as Meta

const Template: Story<ComponentProps<typeof TextAreaField>> = args => {
  return <TextAreaField {...args} />
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

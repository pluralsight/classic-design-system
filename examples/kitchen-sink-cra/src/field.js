import React, { ComponentProps } from 'react'
import Field from '@pluralsight/ps-design-system-field'

const TextInputField = props => {
  const { disabled, placeholder, type = 'text', ...rest } = props

  const labelId = 'this-needs-to-be-a-unique-label-id-1'
  const inputId = 'this-needs-to-be-a-unique-input-id-1'

  return (
    <div>
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
    </div>
  )
}

const Example = () => <TextInputField />

export default Example

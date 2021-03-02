import Field from '@pluralsight/ps-design-system-field'
import { CalendarIcon } from '@pluralsight/ps-design-system-icon'
import { useUniqueId } from '@pluralsight/ps-design-system-util'
import React, { ComponentProps, FC } from 'react'

interface TextInputFieldProps extends ComponentProps<typeof Field> {
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  value?: React.ReactText
}

export const TextInputField: FC<TextInputFieldProps> = props => {
  let {
    disabled,
    label,
    onChange,
    onClick,
    placeholder,
    prefix,
    subLabel,
    value,
    ...rest
  } = props

  if (!prefix) {
    prefix = <CalendarIcon onClick={onClick} style={{ cursor: 'pointer' }} />
  }
  if (typeof label === 'string') {
    label = (
      <Field.Label htmlFor={inputId} id={labelId}>
        {label}
      </Field.Label>
    )
  }
  if (typeof subLabel === 'string') {
    subLabel = <Field.SubLabel>{subLabel}</Field.SubLabel>
  }

  const labelId = useUniqueId('text-input__label-')
  const inputId = useUniqueId('text-input__input-')

  return (
    <Field
      disabled={disabled}
      prefix={prefix}
      label={label}
      subLabel={subLabel}
      {...rest}
    >
      <Field.Input
        disabled={disabled}
        id={inputId}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </Field>
  )
}

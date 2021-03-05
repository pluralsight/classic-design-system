import Field from '@pluralsight/ps-design-system-field'
import { CalendarIcon } from '@pluralsight/ps-design-system-icon'
import { useUniqueId } from '@pluralsight/ps-design-system-util'
import React, { ComponentProps, FC, isValidElement, useMemo } from 'react'

interface TextInputFieldProps extends ComponentProps<typeof Field> {
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  value?: React.ReactText
}

export const TextInputField: FC<TextInputFieldProps> = props => {
  const {
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
  const labelId = useUniqueId('text-input__label-')
  const inputId = useUniqueId('text-input__input-')

  const Prefix = useMemo(() => {
    if (isValidElement(prefix)) return prefix

    return <CalendarIcon onClick={onClick} style={{ cursor: 'pointer' }} />
  }, [prefix])

  const Label = useMemo(() => {
    if (!label) return
    if (isValidElement(label)) return label

    return (
      <Field.Label htmlFor={inputId} id={labelId}>
        {label}
      </Field.Label>
    )
  }, [label])

  const SubLabel = useMemo(() => {
    if (!subLabel) return
    if (isValidElement(subLabel)) return subLabel

    return <Field.SubLabel>{subLabel}</Field.SubLabel>
  }, [subLabel])

  return (
    <Field
      disabled={disabled}
      prefix={Prefix}
      label={Label}
      subLabel={SubLabel}
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

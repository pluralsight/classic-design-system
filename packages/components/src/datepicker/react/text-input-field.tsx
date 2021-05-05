import Field, { FieldProps } from '../../field'
import { CalendarIcon } from '../../icon'
import { uniqueId as defaultUniqueId } from '../../util'
import React from 'react'

interface TextInputFieldProps extends FieldProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  value?: React.ReactText
  _uniqueId?: (prefix: string) => string
}

export const TextInputField: React.FC<TextInputFieldProps> = props => {
  const {
    disabled,
    label,
    onChange,
    onClick,
    placeholder,
    prefix,
    subLabel,
    value,
    _uniqueId: uniqueId = defaultUniqueId,
    ...rest
  } = props
  const labelId = uniqueId('text-input__label-')
  const inputId = uniqueId('text-input__input-')

  const Prefix = React.useMemo(() => {
    if (React.isValidElement(prefix)) return prefix

    return <CalendarIcon onClick={onClick} style={{ cursor: 'pointer' }} />
  }, [prefix])

  const Label = React.useMemo(() => {
    if (!label) return
    if (React.isValidElement(label)) return label

    return (
      <Field.Label htmlFor={inputId} id={labelId}>
        {label}
      </Field.Label>
    )
  }, [label])

  const SubLabel = React.useMemo(() => {
    if (!subLabel) return
    if (React.isValidElement(subLabel)) return subLabel

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

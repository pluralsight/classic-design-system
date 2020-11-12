import { combineFns, ValueOf } from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React, { FC, useRef } from 'react'

import stylesheet from '../css'
import * as vars from '../vars'

const styles = {
  subField: (appearance: ValueOf<typeof vars.appearances>) =>
    compose(
      css(stylesheet['.psds-date-picker__sub-field']),
      css(stylesheet[`.psds-date-picker__sub-field--appearance-${appearance}`])
    ),
  subFieldDivider: (appearance: ValueOf<typeof vars.appearances>) =>
    compose(
      css(stylesheet['.psds-date-picker__sub-field-divider']),
      css(
        stylesheet[
          `.psds-date-picker__sub-field-divider--appearance-${appearance}`
        ]
      )
    )
}

interface SubFieldProps
  extends Omit<
    React.HTMLAttributes<HTMLInputElement>,
    'onBlur' | 'onChange' | 'onFocus'
  > {
  appearance: ValueOf<typeof vars.appearances>
  disabled?: boolean
  name: string
  onBlur: (evt: React.FocusEvent) => void
  onFocus: (evt: React.FocusEvent) => void
  value: number | undefined
}
export const SubField: FC<SubFieldProps> = props => {
  const { appearance, disabled, name, onBlur, onFocus, value, ...rest } = props
  const ref = useRef<HTMLInputElement>(null)

  const handleFocus = combineFns<[React.FocusEvent]>(() => {
    if (ref.current) ref.current.select()
  }, onFocus)

  return (
    <input
      {...styles.subField(appearance)}
      {...rest}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onFocus={handleFocus}
      placeholder={name}
      ref={ref}
      defaultValue={value}
    />
  )
}

export const SubFieldDivider: FC<{
  appearance: ValueOf<typeof vars.appearances>
}> = ({ appearance }) => <span {...styles.subFieldDivider(appearance)}>/</span>

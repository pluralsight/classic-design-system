import {
  combineFns,
  ValueOf,
  HTMLPropsFor
} from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React, { FC } from 'react'

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

interface SubFieldProps extends HTMLPropsFor<'input'> {
  appearance: ValueOf<typeof vars.appearances>
  onFocus: React.FocusEventHandler<HTMLInputElement>
}
export const SubField: FC<SubFieldProps> = props => {
  const { appearance, name, onFocus, ...rest } = props

  const handleFocus = combineFns<[React.FocusEvent<HTMLInputElement>]>(evt => {
    evt.target.select()
  }, onFocus)

  return (
    <input
      {...styles.subField(appearance)}
      {...rest}
      placeholder={name}
      name={name}
      onFocus={handleFocus}
    />
  )
}

export const SubFieldDivider: FC<{
  appearance: ValueOf<typeof vars.appearances>
}> = ({ appearance }) => <span {...styles.subFieldDivider(appearance)}>/</span>

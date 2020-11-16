import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React from 'react'

import stylesheet from '../css'
import * as vars from '../vars'

const styles = {
  buttonRow: (align: string) =>
    css(
      stylesheet['.psds-form-button-row'],
      stylesheet[`.psds-form-button-row--align-${align}`]
    ),
  button: () => css(stylesheet['.psds-form-button-row__button'])
}

export interface ButtonRowStatics {
  aligns: typeof vars.aligns
}
export interface ButtonRowProps extends HTMLPropsFor<'div'> {
  align?: ValueOf<typeof vars.aligns>
}

const ButtonRow: React.FC<ButtonRowProps> & ButtonRowStatics = ({
  align = vars.aligns.left,
  children
}) => (
  <div {...styles.buttonRow(align)}>
    {React.Children.map(children, button => (
      <div {...styles.button()}>{button}</div>
    ))}
  </div>
)
ButtonRow.displayName = 'ButtonRow'

ButtonRow.aligns = vars.aligns

export const aligns = vars.aligns

export default ButtonRow

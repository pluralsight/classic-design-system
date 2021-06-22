import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports

const styles = {
  buttonRow: (align: string) =>
    glamor.css(
      stylesheet['.psds-form-button-row'],
      stylesheet[`.psds-form-button-row--align-${align}`]
    ),
  button: () => glamor.css(stylesheet['.psds-form-button-row__button'])
}

export interface ButtonRowStatics {
  aligns: typeof vars.aligns
}
export interface ButtonRowProps extends HTMLPropsFor<HTMLDivElement> {
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

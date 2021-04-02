import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import glamor from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const styles = ({ marginLeft, marginRight }: Props) =>
  glamor.css(
    stylesheet[`.psds-actionmenu__icon`],
    marginRight && stylesheet[`.psds-actionmenu__icon-right`],
    marginLeft && stylesheet[`.psds-actionmenu__icon-left`]
  )

interface Props extends HTMLPropsFor<'span'> {
  marginRight?: boolean
  marginLeft?: boolean
}

export const Icon: React.FC<Props> = ({ marginLeft, marginRight, ...rest }) => (
  <span {...rest} {...styles({ marginLeft, marginRight })} />
)

Icon.displayName = 'ActionMenu.Icon'

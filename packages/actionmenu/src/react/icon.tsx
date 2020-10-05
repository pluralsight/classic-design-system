import { css } from 'glamor'
import React, { HTMLAttributes } from 'react'
import stylesheet from '../css/index'

const styles = ({ marginLeft, marginRight }) =>
  css(
    stylesheet[`.psds-actionmenu__icon`],
    marginRight && stylesheet[`.psds-actionmenu__icon-right`],
    marginLeft && stylesheet[`.psds-actionmenu__icon-left`]
  )

interface Props extends HTMLAttributes<HTMLSpanElement> {
  marginRight?: boolean
  marginLeft?: boolean
}

export const Icon: React.FC<Props> = ({
  marginLeft,
  marginRight,
  ...props
}) => <span {...props} {...styles({ marginLeft, marginRight })} />

Icon.displayName = 'ActionMenu.Icon'

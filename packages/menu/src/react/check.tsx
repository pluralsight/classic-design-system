import React, { useContext } from 'react'
import { CheckIcon } from '@pluralsight/ps-design-system-icon'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import { ItemContext } from './context'
import stylesheet from '../css'
const styles = {
  icon: css(stylesheet[`.psds-menu__item-icon`]),
  filler: css(stylesheet[`.psds-menu__item-icon-filler`])
}
interface CheckProps extends HTMLPropsFor<'div'> {}

export const Check: React.FC<CheckProps> = props => {
  const { selected } = useContext(ItemContext)
  return selected ? (
    // @ts-ignore: ignore icon type
    <CheckIcon {...styles.icon} {...props} />
  ) : (
    <div {...styles.filler} style={props.style} />
  )
}

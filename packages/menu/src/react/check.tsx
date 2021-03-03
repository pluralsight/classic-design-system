import React, { useContext } from 'react'
import { CheckIcon } from '@pluralsight/ps-design-system-icon'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import { ItemContext } from './context'
import stylesheet from '../css'
const styles = css(stylesheet[`.psds-menu__item-icon`])
interface CheckProps extends HTMLPropsFor<'div'> {}

export const Check: React.FC<CheckProps> = props => {
  const { selected } = useContext(ItemContext)
  // @ts-ignore: ignore icon type
  return selected ? <CheckIcon {...styles} {...props} /> : null
}

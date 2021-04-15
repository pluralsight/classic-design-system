import { CheckIcon } from '@pluralsight/ps-design-system-icon'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { ItemContext } from './context'
import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  icon: glamor.css(stylesheet[`.psds-menu__item-icon`]),
  filler: glamor.css(stylesheet[`.psds-menu__item-icon-filler`])
}
interface CheckProps extends HTMLPropsFor<'div'> {}

export const Check: React.FC<CheckProps> = props => {
  const { selected } = React.useContext(ItemContext)
  return selected ? (
    // @ts-ignore: ignore icon type
    <CheckIcon {...styles.icon} {...props} />
  ) : (
    <div {...styles.filler} style={props.style} />
  )
}

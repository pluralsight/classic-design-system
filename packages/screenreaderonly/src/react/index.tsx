import { accessibility } from '@pluralsight/ps-design-system-core'
import {HTMLPropsFor} from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React, { ReactNode, forwardRef } from 'react'

interface Props extends HTMLPropsFor<'div'> {
  children?: ReactNode
  as?: React.ElementType | keyof JSX.IntrinsicElements
}

const ScreenReaderOnly = forwardRef<HTMLElement, Props>((props, ref) => {
  const { as: Tag = 'div', ...rest } = props

  return <Tag ref={ref} {...css(accessibility.screenReaderOnly)} {...rest} />
})

ScreenReaderOnly.displayName = 'ScreenReaderOnly'

export default ScreenReaderOnly

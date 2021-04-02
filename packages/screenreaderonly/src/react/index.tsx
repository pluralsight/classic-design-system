import { accessibility } from '@pluralsight/ps-design-system-core'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import glamor from 'glamor'
import React from 'react'

interface Props extends HTMLPropsFor<'div'> {
  children?: React.ReactNode
  as?: React.ElementType | keyof JSX.IntrinsicElements
}

const ScreenReaderOnly = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const { as: Tag = 'div', ...rest } = props

  return (
    <Tag ref={ref} {...glamor.css(accessibility.screenReaderOnly)} {...rest} />
  )
})

ScreenReaderOnly.displayName = 'ScreenReaderOnly'

export default ScreenReaderOnly

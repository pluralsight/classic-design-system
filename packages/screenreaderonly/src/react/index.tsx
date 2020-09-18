import { accessibility } from '@pluralsight/ps-design-system-core'
import { css } from 'glamor'
import React, { ReactNode, forwardRef } from 'react'

interface Props {
  children?: ReactNode
  as?: React.ElementType | keyof JSX.IntrinsicElements
}

const ScreenReaderOnly = forwardRef<any, Props>((props, ref) => {
  const { as: Tag = 'div', ...rest } = props

  return <Tag ref={ref} {...css(accessibility.screenReaderOnly)} {...rest} />
})

ScreenReaderOnly.displayName = 'ScreenReaderOnly'

export default ScreenReaderOnly

import { accessibility } from '../../core'
import { forwardRefWithAs } from '../../util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

const glamor = glamorDefault || glamorExports

export const ScreenReaderOnly = forwardRefWithAs<unknown, 'div'>(
  (props, ref) => {
    const { as: Tag = 'div', ...rest } = props

    return (
      <Tag
        ref={ref}
        {...glamor.css(accessibility.screenReaderOnly)}
        {...rest}
      />
    )
  }
)

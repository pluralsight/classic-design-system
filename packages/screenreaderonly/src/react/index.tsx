import { accessibility } from '@pluralsight/ps-design-system-core'
import { forwardRefWithAs } from '@pluralsight/ps-design-system-util'
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

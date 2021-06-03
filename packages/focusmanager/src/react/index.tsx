import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import React from 'react'

import { useFocusManager } from './use-focus-manager'

export interface FocusManagerProps extends HTMLPropsFor<'div'> {
  autofocus?: boolean
  returnFocus?: boolean
  trapped?: boolean
}

export const FocusManager = React.forwardRef<HTMLDivElement, FocusManagerProps>(
  ({ autofocus = true, returnFocus = true, trapped = true, ...rest }, _ref) => {
    const ref = React.useRef<HTMLDivElement>(null)
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    React.useImperativeHandle(_ref, () => ref.current as HTMLDivElement)

    useFocusManager(ref, {
      autofocus: autofocus,
      returnFocus: returnFocus,
      trapped: trapped
    })

    return <div ref={ref} {...rest} />
  }
)

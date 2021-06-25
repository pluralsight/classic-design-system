import React from 'react'

import useFocusManager from './use-focus-manager'

export interface FocusManagerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  autofocus?: boolean
  returnFocus?: boolean
  trapped?: boolean
}

const FocusManager = React.forwardRef<HTMLDivElement, FocusManagerProps>(
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

export default FocusManager

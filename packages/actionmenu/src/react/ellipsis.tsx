import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import React from 'react'
interface EllipsisProps extends React.HTMLAttributes<HTMLSpanElement> {}
export const Ellipsis = React.forwardRef<HTMLSpanElement, EllipsisProps>(
  (props, ref) => <span ref={ref} {...props} />
)

Ellipsis.displayName = 'ActionMenu.Ellipsis'

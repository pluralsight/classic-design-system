import { classNames } from '@pluralsight/ps-design-system-util'
import React from 'react'

export const Divider: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={classNames('psds-actionmenu__divider', className)}
    />
  )
}

Divider.displayName = 'ActionMenu.Divider'

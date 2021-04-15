import { WarningIcon } from '@pluralsight/ps-design-system-icon'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = glamor.css(stylesheet['.psds-dropdown__error'])

export const ErrorIcon = ({ error }: { error: boolean }) =>
  error ? (
    <div {...styles}>
      <WarningIcon />
    </div>
  ) : null

ErrorIcon.displayName = 'Dropdown.ErrorIcon'

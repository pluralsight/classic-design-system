import { WarningIcon } from '@pluralsight/ps-design-system-icon'
import { css } from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const styles = css(stylesheet['.psds-dropdown__error'])

export const ErrorIcon = ({ error }: { error: boolean }) =>
  error ? (
    <div {...styles}>
      <WarningIcon />
    </div>
  ) : null

ErrorIcon.displayName = 'Dropdown.ErrorIcon'

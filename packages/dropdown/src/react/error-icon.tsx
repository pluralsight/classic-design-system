import React from 'react'
import { css } from 'glamor'

import { WarningIcon } from '@pluralsight/ps-design-system-icon'
import stylesheet from '../css/index.js'

const styles = css(stylesheet['.psds-dropdown__error'])

export const ErrorIcon = ({ error }: { error: boolean}) =>
  error ? (
    <div {...styles}>
      <WarningIcon />
    </div>
  ) : null

ErrorIcon.displayName = 'Dropdown.ErrorIcon'

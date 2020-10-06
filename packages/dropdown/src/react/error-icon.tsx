import React from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'

import { WarningIcon } from '@pluralsight/ps-design-system-icon'
import stylesheet from '../css/index.js'

const styles = css(stylesheet['.psds-dropdown__error'])

export const ErrorIcon = ({ error }) =>
  error ? (
    <div {...styles}>
      <WarningIcon />
    </div>
  ) : null

ErrorIcon.displayName = 'Dropdown.ErrorIcon'
ErrorIcon.propTypes = {
  error: PropTypes.bool
}

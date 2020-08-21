import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import ScreenReaderOnly from '@pluralsight/ps-design-system-screenreaderonly'
import { withTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'
import { toPercentageString } from '../js/index.js'

const styles = {
  bg: ({ themeName }) =>
    compose(
      css(stylesheet['.psds-linearprogress__bg']),
      css(stylesheet[`.psds-linearprogress__bg.psds-theme--${themeName}`])
    ),
  fg: ({ themeName, value }) => {
    const percent = toPercentageString(value)
    const isComplete = percent === '100%'

    return compose(
      css(stylesheet['.psds-linearprogress__fg']),
      css(stylesheet[`.psds-linearprogress__fg.psds-theme--${themeName}`]),
      isComplete && css(stylesheet['.psds-linearprogress__fg--complete']),
      css({ width: percent })
    )
  }
}

const LinearProgress = props => (
  <div {...styles.bg(props)} {...filterReactProps(props)}>
    <ScreenReaderOnly role="region" aria-live="off">
      {`${props.value}% complete`}
    </ScreenReaderOnly>
    <div {...styles.fg(props)} />
  </div>
)

LinearProgress.propTypes = {
  value: PropTypes.number
}
LinearProgress.defaultProps = {
  value: 0
}

export default withTheme(LinearProgress)

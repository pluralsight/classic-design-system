import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { withTheme } from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'
import { toPercentageString } from '../js/index.js'

const styles = {
  bg: ({ themeName }) =>
    glamor.css({
      ...css['.psds-linearprogress__bg'],
      ...css[`.psds-linearprogress__bg.psds-theme--${themeName}`]
    }),
  fg: ({ themeName, value }) => {
    const percent = toPercentageString(value)
    const isComplete = percent === '100%'

    return glamor.css(
      css['.psds-linearprogress__fg'],
      css[`.psds-linearprogress__fg.psds-theme--${themeName}`],
      isComplete && css['.psds-linearprogress__fg--complete'],
      { width: percent }
    )
  }
}

const LinearProgress = props => (
  <div {...styles.bg(props)} {...filterReactProps(props)}>
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

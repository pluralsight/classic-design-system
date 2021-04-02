import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import glamor from 'glamor'
import React from 'react'
import ScreenReaderOnly from '@pluralsight/ps-design-system-screenreaderonly'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index'
import { toPercentageString } from '../js/index'

const styles = {
  bg: ({ themeName }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-linearprogress__bg']),
      glamor.css(
        stylesheet[`.psds-linearprogress__bg.psds-theme--${themeName}`]
      )
    ),
  fg: ({ themeName, value }) => {
    const percent = toPercentageString(value)
    const isComplete = percent === '100%'

    return glamor.compose(
      glamor.css(stylesheet['.psds-linearprogress__fg']),
      glamor.css(
        stylesheet[`.psds-linearprogress__fg.psds-theme--${themeName}`]
      ),
      isComplete &&
        glamor.css(stylesheet['.psds-linearprogress__fg--complete']),
      glamor.css({ width: percent })
    )
  }
}

interface LinearProgressProps extends HTMLPropsFor<'div'> {
  value?: number
}

const LinearProgress: React.FC<LinearProgressProps> = ({ value, ...rest }) => {
  const themeName = useTheme()
  return (
    <div {...styles.bg({ themeName })} {...rest}>
      <ScreenReaderOnly role="region" aria-live="off">
        {`${value}% complete`}
      </ScreenReaderOnly>
      <div {...styles.fg({ themeName, value })} />
    </div>
  )
}

LinearProgress.defaultProps = {
  value: 0
}

export default LinearProgress

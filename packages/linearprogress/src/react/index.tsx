import { compose, css } from 'glamor'
import React, { HTMLAttributes } from 'react'
import ScreenReaderOnly from '@pluralsight/ps-design-system-screenreaderonly'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css'
import { toPercentageString } from '../js'

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

interface LinearProgressProps extends HTMLAttributes<HTMLDivElement> {
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

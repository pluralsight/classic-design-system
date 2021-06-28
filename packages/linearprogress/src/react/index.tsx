import { ValueOf } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'
import ScreenReaderOnly from '@pluralsight/ps-design-system-screenreaderonly'
import {
  useTheme,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index'
import { toPercentageString } from '../js/index'

const glamor = glamorDefault || glamorExports

const styles = {
  bg: ({ themeName }: { themeName: ValueOf<typeof themeNames> }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-linearprogress__bg']),
      glamor.css(
        stylesheet[`.psds-linearprogress__bg.psds-theme--${themeName}`]
      )
    ),
  fg: ({
    themeName,
    value
  }: {
    themeName: ValueOf<typeof themeNames>
    value: string
  }) => {
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

interface LinearProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  'aria-label': string
}

const LinearProgress: React.FC<LinearProgressProps> = ({
  value = 0,
  'aria-label': ariaLabel,
  ...rest
}) => {
  const themeName = useTheme()
  const busy = value
    ? value === 100
      ? 'false'
      : value > 0
      ? 'true'
      : 'false'
    : 'true'
  return (
    <div
      {...styles.bg({ themeName })}
      {...rest}
      role="progressbar"
      aria-busy={busy}
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(value)}
    >
      {value ? (
        <ScreenReaderOnly aria-live={'polite'}>
          {value < 100 ? `${Math.round(value)}%` : 'complete'}
        </ScreenReaderOnly>
      ) : null}
      <div {...styles.fg({ themeName, value: `${value}` })} />
    </div>
  )
}

export default LinearProgress
